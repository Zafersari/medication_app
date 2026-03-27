import AsyncStorage from '@react-native-async-storage/async-storage';
import { MedicationInfo, searchMedications as searchLocal } from '../data/medications';

const API_CACHE_KEY = '@medication_api_cache';
const CACHE_EXPIRY_KEY = '@medication_cache_expiry';
const CACHE_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Search OpenFDA API for medications by name
 */
async function searchOpenFDA(query: string): Promise<MedicationInfo[]> {
  try {
    const encoded = encodeURIComponent(query);
    const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${encoded}*+openfda.generic_name:${encoded}*&limit=10`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) return [];

    const data = await response.json();

    if (!data.results) return [];

    const seen = new Set<string>();
    const results: MedicationInfo[] = [];

    for (const item of data.results) {
      const openfda = item.openfda || {};

      const brandNames: string[] = openfda.brand_name || [];
      const genericNames: string[] = openfda.generic_name || [];
      const routes: string[] = openfda.route || [];
      const dosageForms: string[] = openfda.dosage_form || [];
      const pharmClass: string[] = openfda.pharm_class_epc || [];

      // Use brand name first, fallback to generic
      const name = brandNames[0] || genericNames[0];
      if (!name) continue;

      const nameKey = name.toLowerCase();
      if (seen.has(nameKey)) continue;
      seen.add(nameKey);

      // Extract dosage strengths from the active ingredients
      const dosages: string[] = [];
      if (item.active_ingredient) {
        const matches = (item.active_ingredient as string[]).join(' ').match(/\d+\.?\d*\s*(mg|mcg|g|ml|IU|%)/gi);
        if (matches) {
          const uniqueDosages = [...new Set(matches.map((m: string) => m.trim()))];
          dosages.push(...uniqueDosages.slice(0, 5));
        }
      }

      // Determine form
      const form = dosageForms[0] || guessForm(routes);

      // Determine category
      const category = pharmClass[0] || guessCategory(genericNames[0] || '');

      results.push({
        name: formatName(name),
        genericName: genericNames[0] ? formatName(genericNames[0]) : undefined,
        category: category,
        commonDosages: dosages.length > 0 ? dosages : ['—'],
        form: formatForm(form),
      });
    }

    return results;
  } catch (error) {
    // Network error, timeout, etc. — silently fail
    console.log('OpenFDA search failed (offline?):', (error as Error).message);
    return [];
  }
}

/**
 * Format drug name: Title Case
 */
function formatName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Map dosage form to Turkish-friendly label
 */
function formatForm(form: string): string {
  const f = form.toLowerCase();
  if (f.includes('tablet')) return 'Tablet';
  if (f.includes('capsule')) return 'Kapsül';
  if (f.includes('syrup') || f.includes('solution') || f.includes('liquid')) return 'Şurup';
  if (f.includes('injection') || f.includes('injectable')) return 'Enjeksiyon';
  if (f.includes('cream')) return 'Krem';
  if (f.includes('ointment')) return 'Merhem';
  if (f.includes('gel')) return 'Jel';
  if (f.includes('spray') || f.includes('inhaler') || f.includes('inhalation')) return 'İnhaler';
  if (f.includes('drops') || f.includes('ophthalmic')) return 'Damla';
  if (f.includes('patch')) return 'Bant';
  if (f.includes('suppository')) return 'Fitil';
  if (f.includes('powder')) return 'Toz';
  return form || 'Tablet';
}

function guessForm(routes: string[]): string {
  if (!routes.length) return 'Tablet';
  const r = routes[0].toLowerCase();
  if (r.includes('oral')) return 'Tablet';
  if (r.includes('topical')) return 'Krem';
  if (r.includes('intravenous') || r.includes('injection')) return 'Enjeksiyon';
  if (r.includes('inhalation')) return 'İnhaler';
  if (r.includes('ophthalmic')) return 'Damla';
  if (r.includes('rectal')) return 'Fitil';
  return 'Tablet';
}

function guessCategory(genericName: string): string {
  // Very rough heuristic fallback
  const g = genericName.toLowerCase();
  if (g.includes('cillin') || g.includes('mycin') || g.includes('oxacin') || g.includes('cycline')) return 'Antibiyotik';
  if (g.includes('prazole') || g.includes('tidine')) return 'Mide';
  if (g.includes('statin')) return 'Kolesterol';
  if (g.includes('sartan') || g.includes('pril') || g.includes('dipine')) return 'Tansiyon';
  if (g.includes('metformin') || g.includes('gliptin') || g.includes('gliclazide')) return 'Diyabet';
  if (g.includes('olol')) return 'Tansiyon / Kalp';
  if (g.includes('profen') || g.includes('fenac')) return 'Ağrı Kesici';
  if (g.includes('oxetine') || g.includes('aline') || g.includes('pram')) return 'Antidepresan';
  return 'İlaç';
}

// ─── Cache Layer ────────────────────────────────────────────────

interface CacheEntry {
  query: string;
  results: MedicationInfo[];
  timestamp: number;
}

let memoryCache: Record<string, MedicationInfo[]> = {};

/**
 * Load the disk cache into memory (call once at startup)
 */
async function loadCache(): Promise<void> {
  try {
    const raw = await AsyncStorage.getItem(API_CACHE_KEY);
    if (raw) {
      const entries: CacheEntry[] = JSON.parse(raw);
      const now = Date.now();
      for (const entry of entries) {
        if (now - entry.timestamp < CACHE_DURATION_MS) {
          memoryCache[entry.query.toLowerCase()] = entry.results;
        }
      }
    }
  } catch {
    // ignore
  }
}

/**
 * Save the memory cache to disk
 */
async function saveCache(): Promise<void> {
  try {
    const now = Date.now();
    const entries: CacheEntry[] = Object.entries(memoryCache).map(([query, results]) => ({
      query,
      results,
      timestamp: now,
    }));
    // Keep max 200 entries to avoid storage bloat
    const trimmed = entries.slice(-200);
    await AsyncStorage.setItem(API_CACHE_KEY, JSON.stringify(trimmed));
  } catch {
    // ignore
  }
}

// Load cache on module init
loadCache();

// ─── Main Hybrid Search ─────────────────────────────────────────

/**
 * Hybrid medication search:
 * 1. Search local database (instant)
 * 2. Check memory/disk cache
 * 3. If online, fetch from OpenFDA and merge
 * 4. Return combined & deduplicated results
 */
export async function searchMedicationsHybrid(
  query: string,
  limit = 10,
): Promise<MedicationInfo[]> {
  if (!query || query.trim().length < 2) return [];

  const q = query.trim().toLowerCase();

  // 1) Local results (instant, always available)
  const localResults = searchLocal(query, limit);

  // 2) Check cache
  const cached = memoryCache[q];
  if (cached) {
    return dedup([...localResults, ...cached]).slice(0, limit);
  }

  // 3) Try API (non-blocking, with timeout)
  try {
    const apiResults = await searchOpenFDA(query);

    if (apiResults.length > 0) {
      // Save to cache
      memoryCache[q] = apiResults;
      saveCache(); // fire-and-forget

      return dedup([...localResults, ...apiResults]).slice(0, limit);
    }
  } catch {
    // Offline — just use local
  }

  return localResults.slice(0, limit);
}

/**
 * Remove duplicates by normalized name
 */
function dedup(items: MedicationInfo[]): MedicationInfo[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Clear the medication cache (for settings/debug)
 */
export async function clearMedicationCache(): Promise<void> {
  memoryCache = {};
  await AsyncStorage.removeItem(API_CACHE_KEY);
}
