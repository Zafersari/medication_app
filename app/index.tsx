import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Alert,
  Animated,
  Pressable,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Medication, MedicationDose } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { tr, LANGUAGES } from '../utils/i18n';
import { makeStyles, DRAWER_WIDTH } from '../styles/homeStyles';
import { MedicationProgress } from '../components/MedicationProgress';

export default function HomeScreen() {
  const router = useRouter();
  const { colors, isDark, setMode } = useTheme();
  const { lang, setLanguage } = useLanguage();
  const styles = makeStyles(colors);

  const [medications, setMedications] = useState<Medication[]>([]);
  const [doses, setDoses] = useState<MedicationDose[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const today = new Date().toISOString().split('T')[0];

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.parallel([
      Animated.timing(drawerAnim, { toValue: 0, duration: 280, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 1, duration: 280, useNativeDriver: true }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(drawerAnim, { toValue: -DRAWER_WIDTH, duration: 250, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start(() => setDrawerOpen(false));
  };

  const loadData = async () => {
    try {
      await NotificationService.requestPermissions();
      const activeMeds = await StorageService.getActiveMedicationsForDate(today);
      setMedications(activeMeds);
      const todayDoses = await StorageService.getDosesForDate(today);
      const allDoses: MedicationDose[] = [];

      for (const med of activeMeds) {
        if (med.isAsNeeded) {
          const existingDose = todayDoses.find(
            (d) => d.medicationId === med.id && d.time === tr('any_time_label', lang)
          );
          allDoses.push(existingDose || {
            medicationId: med.id,
            medicationName: med.name,
            dosage: med.dosage,
            time: tr('any_time_label', lang),
            date: today,
            taken: false,
          });
        } else {
          for (const time of med.times) {
            const existingDose = todayDoses.find(
              (d) => d.medicationId === med.id && d.time === time
            );
            allDoses.push(existingDose || {
              medicationId: med.id,
              medicationName: med.name,
              dosage: med.dosage,
              time,
              date: today,
              taken: false,
            });
          }
        }
      }

      allDoses.sort((a, b) => a.time.localeCompare(b.time));
      setDoses(allDoses);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  useFocusEffect(useCallback(() => { loadData(); }, [lang]));

  const toggleDose = async (dose: MedicationDose) => {
    try {
      const newTakenStatus = !dose.taken;
      await StorageService.markDoseAsTaken(today, dose.medicationId, dose.time, newTakenStatus);
      setDoses(
        doses.map((d) =>
          d.medicationId === dose.medicationId && d.time === dose.time
            ? { ...d, taken: newTakenStatus }
            : d
        )
      );
      const activeMeds = await StorageService.getActiveMedicationsForDate(today);
      setMedications(activeMeds);
    } catch (error) {
      Alert.alert(tr('error', lang), tr('failed_update_dose', lang));
    }
  };

  const toggleTheme = () => {
    if (isDark) setMode('light');
    else setMode('dark');
  };

  const navigateTo = (path: string) => {
    closeDrawer();
    setTimeout(() => router.push(path as any), 300);
  };

  const isUpcoming = (time: string): boolean => {
    if (time === tr('any_time_label', lang)) return false;
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const doseTime = new Date();
    doseTime.setHours(hours, minutes, 0, 0);
    return doseTime > now;
  };

  const completedCount = doses.filter((d) => d.taken).length;
  const totalCount = doses.length;

  // Weekday & date for drawer header
  const todayDate = new Date();
  const weekday = todayDate.toLocaleDateString(
    lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : 'en-US',
    { weekday: 'long' }
  );
  const fullDate = todayDate.toLocaleDateString(
    lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : 'en-US',
    { month: 'long', day: 'numeric', year: 'numeric' }
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{tr('today', lang)}</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.allButton} onPress={() => router.push('/all-medications')}>
            <Text style={styles.allButtonText}>{tr('all', lang)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add-medication')}>
            <Text style={styles.addButtonText}>{tr('add', lang)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {totalCount > 0 && (
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {tr('doses_taken_of', lang, completedCount, totalCount)}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(completedCount / totalCount) * 100}%` }]} />
          </View>
        </View>
      )}

      <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {doses.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>💊</Text>
            <Text style={styles.emptyTitle}>{tr('no_medications_today', lang)}</Text>
            <Text style={styles.emptyText}>{tr('add_first_medication', lang)}</Text>
          </View>
        ) : (
          doses.map((dose, index) => (
            <TouchableOpacity
              key={`${dose.medicationId}-${dose.time}-${index}`}
              style={[styles.doseCard, dose.taken && styles.doseCardTaken]}
              onPress={() => toggleDose(dose)}
            >
              <View style={styles.doseMain}>
                <View style={styles.checkbox}>
                  {dose.taken && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <View style={styles.doseInfo}>
                  <Text style={[styles.doseName, dose.taken && styles.doseNameTaken]}>{dose.medicationName}</Text>
                  <Text style={styles.doseDosage}>{dose.dosage}</Text>
                </View>
                <View style={styles.doseTimeContainer}>
                  <Text style={[styles.doseTime, isUpcoming(dose.time) && !dose.taken && styles.doseTimeUpcoming]}>{dose.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}

        {medications.length > 0 && (
          <View style={styles.medicationsSection}>
            <Text style={styles.sectionTitle}>{tr('active_medications', lang)}</Text>
            {medications.map((med) => (
              <View key={med.id} style={styles.medicationCard}>
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationName}>{med.name}</Text>
                  <Text style={styles.medicationDetails}>
                    {med.dosage} • {med.isAsNeeded ? tr('as_needed', lang) : tr('times_daily', lang, med.times.length)}
                  </Text>
                  {med.stock != null && (
                    <Text style={[
                      styles.medicationDetails,
                      { fontWeight: '600' },
                      med.minStock != null && med.stock <= med.minStock
                        ? { color: colors.danger }
                        : {}
                    ]}>
                      {tr('stock', lang)}: {med.stock} {tr('units', lang)}{med.minStock != null && med.stock <= med.minStock ? ' ⚠️' : ''}
                    </Text>
                  )}
                  <Text style={styles.medicationDates}>
                    {new Date(med.startDate).toLocaleDateString()} - {med.endDate ? new Date(med.endDate).toLocaleDateString() : tr('ongoing', lang)}
                  </Text>
                  <MedicationProgress medication={med} />
                </View>
                <TouchableOpacity onPress={() => router.push(`/edit-medication?id=${med.id}`)} style={styles.editButton}>
                  <Text style={styles.editButtonText}>{tr('edit', lang)}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        <View style={{ height: 40 }} />
      </ScrollView>

      {drawerOpen && (
        <Animated.View style={[styles.overlay, { opacity: overlayAnim }]}>
          <Pressable style={StyleSheet.absoluteFill} onPress={closeDrawer} />
        </Animated.View>
      )}

      {drawerOpen && (
        <Animated.View style={[styles.drawer, { transform: [{ translateX: drawerAnim }] }]}>
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerAppName}>💊 MedTracker</Text>
            <Text style={styles.drawerDateDay}>{weekday}</Text>
            <Text style={styles.drawerDateFull}>{fullDate}</Text>
            {totalCount > 0 && (
              <View style={styles.drawerStatsRow}>
                <View style={styles.drawerStatsBadge}>
                  <Text style={styles.drawerStatsText}>
                    {tr('doses_today', lang, completedCount, totalCount)}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <ScrollView style={styles.drawerBody}>
            <Text style={styles.drawerSectionLabel}>{tr('navigation', lang)}</Text>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigateTo('/calendar')}>
              <Text style={styles.drawerItemIcon}>📅</Text>
              <Text style={styles.drawerItemText}>{tr('calendar', lang)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigateTo('/all-medications')}>
              <Text style={styles.drawerItemIcon}>💊</Text>
              <Text style={styles.drawerItemText}>{tr('all_medications', lang)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigateTo('/add-medication')}>
              <Text style={styles.drawerItemIcon}>➕</Text>
              <Text style={styles.drawerItemText}>{tr('add_medication_menu', lang)}</Text>
            </TouchableOpacity>
            <View style={styles.drawerDivider} />
            <Text style={styles.drawerSectionLabel}>{tr('settings', lang)}</Text>
            <TouchableOpacity style={styles.drawerItem} onPress={toggleTheme}>
              <Text style={styles.drawerItemIcon}>{isDark ? '☀️' : '🌙'}</Text>
              <Text style={styles.drawerItemText}>{isDark ? tr('switch_light', lang) : tr('switch_dark', lang)}</Text>
            </TouchableOpacity>

            {/* ─── Language Picker ─── */}
            <View style={styles.drawerItem}>
              <Text style={styles.drawerItemIcon}>🌐</Text>
              <Text style={styles.drawerItemText}>{tr('language', lang)}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 8, paddingBottom: 12 }}>
              {LANGUAGES.map((l) => (
                <TouchableOpacity
                  key={l.code}
                  onPress={() => setLanguage(l.code)}
                  style={{
                    flex: 1,
                    paddingVertical: 8,
                    borderRadius: 10,
                    alignItems: 'center',
                    backgroundColor: lang === l.code ? colors.primary : colors.chipBg,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{l.flag}</Text>
                  <Text style={{
                    fontSize: 11,
                    marginTop: 2,
                    fontWeight: '600',
                    color: lang === l.code ? '#fff' : colors.textSecondary,
                  }}>
                    {l.code.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.drawerDivider} />
            <View style={styles.drawerFooter}>
              <Text style={styles.drawerFooterText}>MedTracker v1.0.0</Text>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
}
