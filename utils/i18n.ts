export type Language = 'en' | 'tr' | 'de';
export type LocationCode = 'TR' | 'US' | 'EU';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export const LOCATIONS: { code: LocationCode; label: Record<Language, string>; flag: string }[] = [
  { code: 'TR', label: { en: 'Turkey', tr: 'Türkiye', de: 'Türkei' }, flag: '🇹🇷' },
  { code: 'US', label: { en: 'United States', tr: 'ABD', de: 'USA' }, flag: '🇺🇸' },
  { code: 'EU', label: { en: 'Europe', tr: 'Avrupa', de: 'Europa' }, flag: '🇪🇺' },
];

// ─── Medication Categories ──────────────────────────────────────
export const categoryTranslations: Record<string, Record<Language, string>> = {
  painkiller: { en: 'Painkiller', tr: 'Ağrı Kesici', de: 'Schmerzmittel' },
  painkiller_anti_inflammatory: { en: 'Painkiller / Anti-inflammatory', tr: 'Ağrı Kesici / Antiinflamatuar', de: 'Schmerzmittel / Entzündungshemmer' },
  painkiller_fever: { en: 'Painkiller / Fever Reducer', tr: 'Ağrı Kesici / Ateş Düşürücü', de: 'Schmerzmittel / Fiebermittel' },
  painkiller_fever_child: { en: 'Painkiller / Fever (Child)', tr: 'Ağrı Kesici / Ateş (Çocuk)', de: 'Schmerzmittel / Fieber (Kind)' },
  painkiller_opioid: { en: 'Painkiller (Opioid)', tr: 'Ağrı Kesici (Opioid)', de: 'Schmerzmittel (Opioid)' },
  painkiller_topical: { en: 'Painkiller (Topical)', tr: 'Ağrı Kesici (Topikal)', de: 'Schmerzmittel (Topisch)' },
  painkiller_cox2: { en: 'Painkiller (COX-2)', tr: 'Ağrı Kesici (COX-2)', de: 'Schmerzmittel (COX-2)' },
  painkiller_stomach: { en: 'Painkiller + Stomach Protection', tr: 'Ağrı Kesici + Mide', de: 'Schmerzmittel + Magenschutz' },
  antiplatelet: { en: 'Antiplatelet', tr: 'Antiplatelet', de: 'Thrombozytenaggregationshemmer' },
  antibiotic: { en: 'Antibiotic', tr: 'Antibiyotik', de: 'Antibiotikum' },
  antibiotic_urinary: { en: 'Antibiotic (Urinary Tract)', tr: 'Antibiyotik (İdrar Yolu)', de: 'Antibiotikum (Harnwege)' },
  antibiotic_topical: { en: 'Antibiotic (Topical)', tr: 'Antibiyotik (Topikal)', de: 'Antibiotikum (Topisch)' },
  antibiotic_eye: { en: 'Antibiotic (Eye)', tr: 'Antibiyotik (Göz)', de: 'Antibiotikum (Auge)' },
  antibiotic_tb: { en: 'Antibiotic (Tuberculosis)', tr: 'Antibiyotik (Tüberküloz)', de: 'Antibiotikum (Tuberkulose)' },
  antibiotic_antiparasitic: { en: 'Antibiotic / Antiparasitic', tr: 'Antibiyotik / Antiparaziter', de: 'Antibiotikum / Antiparasitär' },
  antifungal: { en: 'Antifungal', tr: 'Antifungal', de: 'Antimykotikum' },
  antifungal_vaginal: { en: 'Antifungal (Vaginal)', tr: 'Antifungal (Vajinal)', de: 'Antimykotikum (Vaginal)' },
  antiviral: { en: 'Antiviral', tr: 'Antiviral', de: 'Antiviral' },
  antiviral_hiv: { en: 'Antiviral (HIV)', tr: 'Antiviral (HIV)', de: 'Antiviral (HIV)' },
  antiparasitic: { en: 'Antiparasitic', tr: 'Antiparaziter', de: 'Antiparasitär' },
  antimalarial: { en: 'Antimalarial', tr: 'Antimalaryal', de: 'Antimalariamittel' },
  blood_pressure: { en: 'Blood Pressure', tr: 'Tansiyon', de: 'Blutdruck' },
  blood_pressure_heart: { en: 'Blood Pressure / Heart', tr: 'Tansiyon / Kalp', de: 'Blutdruck / Herz' },
  blood_pressure_urology: { en: 'Blood Pressure / Urology', tr: 'Tansiyon / Üroloji', de: 'Blutdruck / Urologie' },
  blood_pressure_anxiety: { en: 'Blood Pressure / Anxiety', tr: 'Tansiyon / Anksiyete', de: 'Blutdruck / Angst' },
  blood_pressure_cholesterol: { en: 'Blood Pressure + Cholesterol', tr: 'Tansiyon + Kolesterol', de: 'Blutdruck + Cholesterin' },
  heart: { en: 'Heart', tr: 'Kalp', de: 'Herz' },
  heart_arrhythmia: { en: 'Heart (Arrhythmia)', tr: 'Kalp (Aritmi)', de: 'Herz (Arrhythmie)' },
  heart_angina: { en: 'Heart (Angina)', tr: 'Kalp (Angina)', de: 'Herz (Angina)' },
  heart_failure: { en: 'Heart Failure', tr: 'Kalp Yetmezliği', de: 'Herzinsuffizienz' },
  heart_bp: { en: 'Heart / Blood Pressure', tr: 'Kalp / Tansiyon', de: 'Herz / Blutdruck' },
  blood_thinner: { en: 'Blood Thinner', tr: 'Kan Sulandırıcı', de: 'Blutverdünner' },
  thrombolytic: { en: 'Thrombolytic', tr: 'Trombolitik', de: 'Thrombolytikum' },
  cholesterol: { en: 'Cholesterol', tr: 'Kolesterol', de: 'Cholesterin' },
  cholesterol_triglyceride: { en: 'Cholesterol (Triglyceride)', tr: 'Kolesterol (Trigliserit)', de: 'Cholesterin (Triglyzeride)' },
  diabetes: { en: 'Diabetes', tr: 'Diyabet', de: 'Diabetes' },
  diabetes_insulin: { en: 'Diabetes (Insulin)', tr: 'Diyabet (İnsülin)', de: 'Diabetes (Insulin)' },
  diabetes_heart: { en: 'Diabetes / Heart', tr: 'Diyabet / Kalp', de: 'Diabetes / Herz' },
  diabetes_obesity: { en: 'Diabetes / Obesity', tr: 'Diyabet / Obezite', de: 'Diabetes / Adipositas' },
  diuretic: { en: 'Diuretic', tr: 'Diüretik', de: 'Diuretikum' },
  diuretic_bp: { en: 'Diuretic / Blood Pressure', tr: 'Diüretik / Tansiyon', de: 'Diuretikum / Blutdruck' },
  stomach: { en: 'Stomach', tr: 'Mide', de: 'Magen' },
  stomach_reflux: { en: 'Stomach (Reflux)', tr: 'Mide (Reflü)', de: 'Magen (Reflux)' },
  stomach_antacid: { en: 'Stomach (Antacid)', tr: 'Mide (Antiasit)', de: 'Magen (Antazidum)' },
  stomach_antacid_gas: { en: 'Stomach (Antacid + Anti-gas)', tr: 'Mide (Antiasit + Antigaz)', de: 'Magen (Antazidum + Entschäumer)' },
  stomach_protective: { en: 'Stomach Protective', tr: 'Mide Koruyucu', de: 'Magenschutz' },
  digestion: { en: 'Digestion', tr: 'Sindirim', de: 'Verdauung' },
  digestion_spasm: { en: 'Digestion (Antispasmodic)', tr: 'Sindirim (Spazmolitik)', de: 'Verdauung (Krampflösend)' },
  digestion_ibs: { en: 'Digestion (IBS)', tr: 'Sindirim (IBS)', de: 'Verdauung (Reizdarm)' },
  digestion_gas: { en: 'Digestion (Gas)', tr: 'Sindirim (Gaz)', de: 'Verdauung (Blähungen)' },
  digestion_enzyme: { en: 'Digestion (Enzyme)', tr: 'Sindirim (Enzim)', de: 'Verdauung (Enzym)' },
  nausea: { en: 'Nausea', tr: 'Bulantı', de: 'Übelkeit' },
  nausea_digestion: { en: 'Nausea / Digestion', tr: 'Bulantı / Sindirim', de: 'Übelkeit / Verdauung' },
  nausea_chemo: { en: 'Nausea (Chemotherapy)', tr: 'Bulantı (Kemoterapi)', de: 'Übelkeit (Chemotherapie)' },
  diarrhea: { en: 'Diarrhea', tr: 'İshal', de: 'Durchfall' },
  constipation: { en: 'Constipation', tr: 'Kabızlık', de: 'Verstopfung' },
  constipation_fiber: { en: 'Constipation (Fiber)', tr: 'Kabızlık (Lif)', de: 'Verstopfung (Ballaststoff)' },
  gi_ulcerative: { en: 'GI (Ulcerative Colitis)', tr: 'GI (Ülseratif Kolit)', de: 'GI (Colitis ulcerosa)' },
  dehydration: { en: 'Dehydration', tr: 'Dehidratasyon', de: 'Dehydration' },
  allergy: { en: 'Allergy', tr: 'Alerji', de: 'Allergie' },
  allergy_nasal: { en: 'Allergy (Nasal)', tr: 'Alerji (Nazal)', de: 'Allergie (Nasal)' },
  allergy_anxiety: { en: 'Allergy / Anxiety', tr: 'Alerji / Anksiyete', de: 'Allergie / Angst' },
  allergy_nausea: { en: 'Allergy / Nausea', tr: 'Alerji / Bulantı', de: 'Allergie / Übelkeit' },
  allergy_sleep: { en: 'Allergy / Sleep', tr: 'Alerji / Uyku', de: 'Allergie / Schlaf' },
  nasal_decongestant: { en: 'Nasal Decongestant', tr: 'Nazal Dekonjestan', de: 'Nasenabschweller' },
  respiratory: { en: 'Respiratory', tr: 'Solunum', de: 'Atemwege' },
  respiratory_allergy: { en: 'Respiratory / Allergy', tr: 'Solunum / Alerji', de: 'Atemwege / Allergie' },
  respiratory_copd: { en: 'Respiratory (COPD)', tr: 'Solunum (KOAH)', de: 'Atemwege (COPD)' },
  mucolytic: { en: 'Mucolytic', tr: 'Mukolitik', de: 'Schleimlöser' },
  antidepressant: { en: 'Antidepressant', tr: 'Antidepresan', de: 'Antidepressivum' },
  antidepressant_pain: { en: 'Antidepressant / Pain', tr: 'Antidepresan / Ağrı', de: 'Antidepressivum / Schmerz' },
  antidepressant_ocd: { en: 'Antidepressant / OCD', tr: 'Antidepresan / OKB', de: 'Antidepressivum / Zwangsstörung' },
  antidepressant_sleep: { en: 'Antidepressant / Sleep', tr: 'Antidepresan / Uyku', de: 'Antidepressivum / Schlaf' },
  antidepressant_smoking: { en: 'Antidepressant / Smoking Cessation', tr: 'Antidepresan / Sigara Bırakma', de: 'Antidepressivum / Rauchentwöhnung' },
  anxiety: { en: 'Anxiety', tr: 'Anksiyete', de: 'Angststörung' },
  anxiety_epilepsy: { en: 'Anxiety / Epilepsy', tr: 'Anksiyete / Epilepsi', de: 'Angststörung / Epilepsie' },
  psychiatry: { en: 'Psychiatry', tr: 'Psikiyatri', de: 'Psychiatrie' },
  psychiatry_bipolar: { en: 'Psychiatry (Bipolar)', tr: 'Psikiyatri (Bipolar)', de: 'Psychiatrie (Bipolar)' },
  sedation: { en: 'Sedation / Anxiety', tr: 'Sedasyon / Anksiyete', de: 'Sedierung / Angst' },
  sleep: { en: 'Sleep Aid', tr: 'Uyku', de: 'Schlafmittel' },
  adhd: { en: 'ADHD', tr: 'DEHB', de: 'ADHS' },
  epilepsy: { en: 'Epilepsy', tr: 'Epilepsi', de: 'Epilepsie' },
  epilepsy_neurology: { en: 'Epilepsy / Neurology', tr: 'Epilepsi / Nöroloji', de: 'Epilepsie / Neurologie' },
  epilepsy_psychiatry: { en: 'Epilepsy / Psychiatry', tr: 'Epilepsi / Psikiyatri', de: 'Epilepsie / Psychiatrie' },
  epilepsy_migraine: { en: 'Epilepsy / Migraine', tr: 'Epilepsi / Migren', de: 'Epilepsie / Migräne' },
  neurology: { en: 'Neurology', tr: 'Nöroloji', de: 'Neurologie' },
  neurology_pain: { en: 'Neurology / Pain', tr: 'Nöroloji / Ağrı', de: 'Neurologie / Schmerz' },
  neurology_alzheimer: { en: 'Neurology (Alzheimer)', tr: 'Nöroloji (Alzheimer)', de: 'Neurologie (Alzheimer)' },
  neurology_parkinson: { en: 'Neurology (Parkinson)', tr: 'Nöroloji (Parkinson)', de: 'Neurologie (Parkinson)' },
  neurology_narcolepsy: { en: 'Neurology (Narcolepsy)', tr: 'Nöroloji (Narkolepsi)', de: 'Neurologie (Narkolepsie)' },
  neurology_als: { en: 'Neurology (ALS)', tr: 'Nöroloji (ALS)', de: 'Neurologie (ALS)' },
  neurology_nootropic: { en: 'Neurology (Nootropic)', tr: 'Nöroloji (Nootropik)', de: 'Neurologie (Nootropikum)' },
  migraine: { en: 'Migraine', tr: 'Migren', de: 'Migräne' },
  vertigo: { en: 'Vertigo', tr: 'Vertigo', de: 'Schwindel' },
  muscle_relaxant: { en: 'Muscle Relaxant', tr: 'Kas Gevşetici', de: 'Muskelrelaxans' },
  corticosteroid: { en: 'Corticosteroid', tr: 'Kortikosteroid', de: 'Kortikosteroid' },
  thyroid: { en: 'Thyroid', tr: 'Tiroid', de: 'Schilddrüse' },
  osteoporosis: { en: 'Osteoporosis', tr: 'Osteoporoz', de: 'Osteoporose' },
  gout: { en: 'Gout', tr: 'Gut', de: 'Gicht' },
  rheumatology: { en: 'Rheumatology', tr: 'Romatoloji', de: 'Rheumatologie' },
  rheumatology_antimalarial: { en: 'Rheumatology / Antimalarial', tr: 'Romatoloji / Antimalaryal', de: 'Rheumatologie / Antimalaria' },
  rheumatology_biologic: { en: 'Rheumatology (Biologic)', tr: 'Romatoloji (Biyolojik)', de: 'Rheumatologie (Biologikum)' },
  rheumatology_lupus: { en: 'Rheumatology (Lupus)', tr: 'Romatoloji (Lupus)', de: 'Rheumatologie (Lupus)' },
  rheumatology_oncology: { en: 'Rheumatology / Oncology', tr: 'Romatoloji / Onkoloji', de: 'Rheumatologie / Onkologie' },
  immunosuppressant: { en: 'Immunosuppressant', tr: 'İmmünosupresif', de: 'Immunsuppressivum' },
  immunology: { en: 'Immunology', tr: 'İmmünoloji', de: 'Immunologie' },
  urology: { en: 'Urology', tr: 'Üroloji', de: 'Urologie' },
  urology_bph: { en: 'Urology (BPH)', tr: 'Üroloji (BPH)', de: 'Urologie (BPH)' },
  urology_bladder: { en: 'Urology (Bladder)', tr: 'Üroloji (Mesane)', de: 'Urologie (Blase)' },
  urology_dermatology: { en: 'Urology / Dermatology', tr: 'Üroloji / Dermatolojik', de: 'Urologie / Dermatologie' },
  womens_health: { en: "Women's Health", tr: 'Kadın Sağlığı', de: 'Frauengesundheit' },
  womens_health_hrt: { en: "Women's Health (HRT)", tr: 'Kadın Sağlığı (HRT)', de: 'Frauengesundheit (HRT)' },
  birth_control: { en: 'Birth Control', tr: 'Doğum Kontrolü', de: 'Verhütung' },
  birth_control_acne: { en: 'Birth Control / Acne', tr: 'Doğum Kontrolü / Akne', de: 'Verhütung / Akne' },
  fertility: { en: 'Fertility', tr: 'Fertilite', de: 'Fruchtbarkeit' },
  endocrine: { en: 'Endocrine', tr: 'Endokrin', de: 'Endokrin' },
  endocrine_prolactin: { en: 'Endocrine (Prolactin)', tr: 'Endokrin (Prolaktin)', de: 'Endokrin (Prolaktin)' },
  growth_hormone: { en: 'Growth Hormone', tr: 'Büyüme Hormonu', de: 'Wachstumshormon' },
  dermatology: { en: 'Dermatology', tr: 'Dermatolojik', de: 'Dermatologie' },
  dermatology_acne: { en: 'Dermatology (Acne)', tr: 'Dermatolojik (Akne)', de: 'Dermatologie (Akne)' },
  dermatology_steroid: { en: 'Dermatology (Steroid)', tr: 'Dermatolojik (Steroid)', de: 'Dermatologie (Steroid)' },
  dermatology_psoriasis: { en: 'Dermatology (Psoriasis)', tr: 'Dermatolojik (Sedef)', de: 'Dermatologie (Psoriasis)' },
  dermatology_hair: { en: 'Dermatology (Hair Loss)', tr: 'Dermatolojik (Saç Dök.)', de: 'Dermatologie (Haarausfall)' },
  eye_glaucoma: { en: 'Eye (Glaucoma)', tr: 'Göz (Glokom)', de: 'Auge (Glaukom)' },
  eye_artificial_tear: { en: 'Eye (Artificial Tear)', tr: 'Göz (Yapay Gözyaşı)', de: 'Auge (Künstliche Träne)' },
  eye_implant: { en: 'Eye (Implant)', tr: 'Göz (İmplant)', de: 'Auge (Implantat)' },
  oncology: { en: 'Oncology', tr: 'Onkoloji', de: 'Onkologie' },
  oncology_breast: { en: 'Oncology (Breast)', tr: 'Onkoloji (Meme)', de: 'Onkologie (Brust)' },
  oncology_prostate: { en: 'Oncology (Prostate)', tr: 'Onkoloji (Prostat)', de: 'Onkologie (Prostata)' },
  oncology_brain: { en: 'Oncology (Brain)', tr: 'Onkoloji (Beyin)', de: 'Onkologie (Gehirn)' },
  oncology_cml: { en: 'Oncology (CML)', tr: 'Onkoloji (KML)', de: 'Onkologie (CML)' },
  oncology_melanoma: { en: 'Oncology (Melanoma)', tr: 'Onkoloji (Melanom)', de: 'Onkologie (Melanom)' },
  oncology_immunotherapy: { en: 'Oncology (Immunotherapy)', tr: 'Onkoloji (İmmünoterapi)', de: 'Onkologie (Immuntherapie)' },
  oncology_endocrine: { en: 'Oncology / Endocrine', tr: 'Onkoloji / Endokrin', de: 'Onkologie / Endokrin' },
  oncology_osteoporosis: { en: 'Oncology / Osteoporosis', tr: 'Onkoloji / Osteoporoz', de: 'Onkologie / Osteoporose' },
  anemia: { en: 'Anemia', tr: 'Anemi', de: 'Anämie' },
  iron: { en: 'Iron', tr: 'Demir', de: 'Eisen' },
  iron_vitamin: { en: 'Iron / Vitamin', tr: 'Demir / Vitamin', de: 'Eisen / Vitamin' },
  iron_iv: { en: 'Iron (IV)', tr: 'Demir (IV)', de: 'Eisen (IV)' },
  mineral: { en: 'Mineral', tr: 'Mineral', de: 'Mineral' },
  mineral_vitamin: { en: 'Mineral / Vitamin', tr: 'Mineral / Vitamin', de: 'Mineral / Vitamin' },
  vitamin: { en: 'Vitamin', tr: 'Vitamin', de: 'Vitamin' },
  vitamin_d_active: { en: 'Vitamin D (Active)', tr: 'Vitamin D Aktif', de: 'Vitamin D (Aktiv)' },
  vitamin_neurological: { en: 'Vitamin (Neurological)', tr: 'Vitamin (Nörolojik)', de: 'Vitamin (Neurologisch)' },
  vitamin_mineral_complex: { en: 'Vitamin / Mineral Complex', tr: 'Vitamin / Mineral Kompleks', de: 'Vitamin / Mineral Komplex' },
  cold_flu: { en: 'Cold / Flu', tr: 'Soğuk Algınlığı', de: 'Erkältung / Grippe' },
  sore_throat: { en: 'Sore Throat', tr: 'Boğaz Ağrısı', de: 'Halsschmerzen' },
  smoking_cessation: { en: 'Smoking Cessation', tr: 'Sigara Bırakma', de: 'Rauchentwöhnung' },
  obesity: { en: 'Obesity', tr: 'Obezite', de: 'Adipositas' },
  vascular: { en: 'Vascular Protection', tr: 'Damar Koruyucu', de: 'Gefäßschutz' },
  circulation: { en: 'Circulation Disorder', tr: 'Dolaşım Bozukluğu', de: 'Durchblutungsstörung' },
  liver_bile: { en: 'Liver / Bile', tr: 'Karaciğer / Safra', de: 'Leber / Galle' },
  local_anesthetic: { en: 'Local Anesthetic', tr: 'Lokal Anestezik', de: 'Lokalanästhetikum' },
  antiseptic: { en: 'Antiseptic', tr: 'Antiseptik', de: 'Antiseptikum' },
  emergency_anaphylaxis: { en: 'Emergency (Anaphylaxis)', tr: 'Acil (Anafilaksi)', de: 'Notfall (Anaphylaxie)' },
  pulmonary_ht: { en: 'Pulmonary Hypertension', tr: 'Pulmoner HT', de: 'Pulmonale Hypertonie' },
  addiction_treatment: { en: 'Addiction Treatment', tr: 'Bağımlılık Tedavisi', de: 'Suchtbehandlung' },
  joint_osteoarthritis: { en: 'Joint (Osteoarthritis)', tr: 'Eklem (Osteoartrit)', de: 'Gelenk (Arthrose)' },
  vaccine: { en: 'Vaccine', tr: 'Aşı', de: 'Impfstoff' },
  baby_care: { en: 'Baby Care', tr: 'Bebek Bakım', de: 'Babypflege' },
};

// ─── UI Translations ────────────────────────────────────────────
export const t: Record<string, Record<Language, string>> = {
  // General
  app_name: { en: 'MedTracker', tr: 'MedTracker', de: 'MedTracker' },
  today: { en: 'Today', tr: 'Bugün', de: 'Heute' },
  cancel: { en: 'Cancel', tr: 'İptal', de: 'Abbrechen' },
  confirm: { en: 'Confirm', tr: 'Onayla', de: 'Bestätigen' },
  save: { en: 'Save', tr: 'Kaydet', de: 'Speichern' },
  delete: { en: 'Delete', tr: 'Sil', de: 'Löschen' },
  edit: { en: 'Edit', tr: 'Düzenle', de: 'Bearbeiten' },
  back: { en: '← Back', tr: '← Geri', de: '← Zurück' },
  success: { en: 'Success', tr: 'Başarılı', de: 'Erfolg' },
  error: { en: 'Error', tr: 'Hata', de: 'Fehler' },
  ok: { en: 'OK', tr: 'Tamam', de: 'OK' },
  add: { en: '+ Add', tr: '+ Ekle', de: '+ Hinzufügen' },
  all: { en: 'All', tr: 'Tümü', de: 'Alle' },

  // Home Screen
  doses_taken: { en: '{0} of {1} doses taken', tr: '{1} dozdan {0} alındı', de: '{0} von {1} Dosen eingenommen' },
  no_medications_today: { en: 'No medications for today', tr: 'Bugün ilaç yok', de: 'Heute keine Medikamente' },
  add_first_medication: { en: 'Tap the + Add button to add your first medication', tr: 'İlk ilacınızı eklemek için + Ekle butonuna dokunun', de: 'Tippen Sie auf + Hinzufügen, um Ihr erstes Medikament hinzuzufügen' },
  active_medications: { en: 'Active Medications', tr: 'Aktif İlaçlar', de: 'Aktive Medikamente' },
  times_daily: { en: '{0} times daily', tr: 'Günde {0} kez', de: '{0} mal täglich' },
  as_needed: { en: 'As needed', tr: 'Gerektiğinde', de: 'Bei Bedarf' },
  stock_label: { en: 'Stock: {0} units', tr: 'Stok: {0} adet', de: 'Bestand: {0} Stück' },
  ongoing: { en: 'Ongoing', tr: 'Süresiz', de: 'Laufend' },

  // Add / Edit Medication
  add_medication: { en: 'Add Medication', tr: 'İlaç Ekle', de: 'Medikament hinzufügen' },
  edit_medication: { en: 'Edit Medication', tr: 'İlacı Düzenle', de: 'Medikament bearbeiten' },
  medication_name: { en: 'Medication Name', tr: 'İlaç Adı', de: 'Medikamentenname' },
  medication_name_placeholder: { en: 'e.g., Amoxicillin', tr: 'ör. Amoksisilin', de: 'z.B. Amoxicillin' },
  dosage: { en: 'Dosage', tr: 'Dozaj', de: 'Dosierung' },
  dosage_placeholder: { en: 'e.g., 2 pills, 500mg', tr: 'ör. 2 tablet, 500mg', de: 'z.B. 2 Tabletten, 500mg' },
  total_stock: { en: 'Total Stock (Units)', tr: 'Toplam Stok (Adet)', de: 'Gesamtbestand (Stück)' },
  low_stock_threshold: { en: 'Low Stock Warning Threshold', tr: 'Düşük Stok Uyarı Eşiği', de: 'Niedrigbestandswarnung' },
  start_date: { en: 'Start Date', tr: 'Başlangıç Tarihi', de: 'Startdatum' },
  end_date: { en: 'End Date', tr: 'Bitiş Tarihi', de: 'Enddatum' },
  ongoing_medication: { en: 'Ongoing medication (No end date)', tr: 'Sürekli ilaç (Bitiş tarihi yok)', de: 'Dauermedikation (Kein Enddatum)' },
  any_time: { en: 'Any time / As needed', tr: 'Her zaman / Gerektiğinde', de: 'Jederzeit / Bei Bedarf' },
  daily_times: { en: 'Daily Times', tr: 'Günlük Saatler', de: 'Tägliche Zeiten' },
  add_time: { en: '+ Add Time', tr: '+ Saat Ekle', de: '+ Zeit hinzufügen' },
  save_medication: { en: 'Save Medication', tr: 'İlacı Kaydet', de: 'Speichern' },
  save_changes: { en: 'Save Changes', tr: 'Değişiklikleri Kaydet', de: 'Änderungen speichern' },
  medication_added: { en: 'Medication added successfully', tr: 'İlaç başarıyla eklendi', de: 'Medikament erfolgreich hinzugefügt' },
  medication_updated: { en: 'Medication updated successfully', tr: 'İlaç başarıyla güncellendi', de: 'Medikament erfolgreich aktualisiert' },
  medication_not_found: { en: 'Medication not found', tr: 'İlaç bulunamadı', de: 'Medikament nicht gefunden' },
  save_failed: { en: 'Failed to save medication', tr: 'İlaç kaydedilemedi', de: 'Medikament konnte nicht gespeichert werden' },
  update_failed: { en: 'Failed to update medication', tr: 'İlaç güncellenemedi', de: 'Medikament konnte nicht aktualisiert werden' },
  enter_name: { en: 'Please enter medication name', tr: 'Lütfen ilaç adını girin', de: 'Bitte Medikamentennamen eingeben' },
  enter_dosage: { en: 'Please enter dosage', tr: 'Lütfen dozaj girin', de: 'Bitte Dosierung eingeben' },
  add_one_time: { en: 'Please add at least one time', tr: 'Lütfen en az bir saat ekleyin', de: 'Bitte mindestens eine Zeit hinzufügen' },
  end_after_start: { en: 'End date must be after start date', tr: 'Bitiş tarihi başlangıçtan sonra olmalı', de: 'Enddatum muss nach Startdatum liegen' },
  notifications_disabled: { en: 'Notifications Disabled', tr: 'Bildirimler Devre Dışı', de: 'Benachrichtigungen deaktiviert' },
  enable_notifications: { en: 'Please enable notifications to receive medication reminders', tr: 'İlaç hatırlatmaları almak için bildirimleri etkinleştirin', de: 'Bitte aktivieren Sie Benachrichtigungen für Medikamentenerinnerungen' },

  // All Medications Screen
  all_medications: { en: 'All Medications', tr: 'Tüm İlaçlar', de: 'Alle Medikamente' },
  active: { en: 'Active', tr: 'Aktif', de: 'Aktiv' },
  upcoming: { en: 'Upcoming', tr: 'Yaklaşan', de: 'Bevorstehend' },
  past: { en: 'Past', tr: 'Geçmiş', de: 'Vergangen' },
  no_active_medications: { en: 'No active medications today', tr: 'Bugün aktif ilaç yok', de: 'Heute keine aktiven Medikamente' },
  no_upcoming_medications: { en: 'No upcoming medications', tr: 'Yaklaşan ilaç yok', de: 'Keine bevorstehenden Medikamente' },
  no_past_medications: { en: 'No past medications', tr: 'Geçmiş ilaç yok', de: 'Keine vergangenen Medikamente' },
  delete_medication: { en: 'Delete Medication', tr: 'İlacı Sil', de: 'Medikament löschen' },
  delete_confirm: { en: 'Are you sure you want to delete {0}?', tr: '{0} ilacını silmek istediğinize emin misiniz?', de: 'Möchten Sie {0} wirklich löschen?' },
  delete_failed: { en: 'Failed to delete medication', tr: 'İlaç silinemedi', de: 'Medikament konnte nicht gelöscht werden' },

  // Calendar Screen
  calendar: { en: 'Calendar', tr: 'Takvim', de: 'Kalender' },
  all_taken: { en: 'All taken', tr: 'Hepsi alındı', de: 'Alle eingenommen' },
  partial: { en: 'Partial', tr: 'Kısmen', de: 'Teilweise' },
  missed: { en: 'Missed', tr: 'Kaçırıldı', de: 'Verpasst' },
  tap_day: { en: 'Tap a day to see details', tr: 'Detaylar için bir güne dokunun', de: 'Tippen Sie auf einen Tag für Details' },
  no_medications_day: { en: 'No medications for this day', tr: 'Bu gün için ilaç yok', de: 'Keine Medikamente für diesen Tag' },
  any_time_label: { en: 'Any Time', tr: 'Her Zaman', de: 'Jederzeit' },

  // Drawer
  navigation: { en: 'NAVIGATION', tr: 'MENÜ', de: 'NAVIGATION' },
  settings: { en: 'SETTINGS', tr: 'AYARLAR', de: 'EINSTELLUNGEN' },
  add_medication_menu: { en: 'Add Medication', tr: 'İlaç Ekle', de: 'Medikament hinzufügen' },
  switch_light: { en: 'Switch to Light Mode', tr: 'Açık Tema', de: 'Zum Hellmodus wechseln' },
  switch_dark: { en: 'Switch to Dark Mode', tr: 'Koyu Tema', de: 'Zum Dunkelmodus wechseln' },
  language: { en: 'Language', tr: 'Dil', de: 'Sprache' },
  location: { en: 'Location', tr: 'Lokasyon', de: 'Standort' },
  doses_today: { en: '{0}/{1} doses today', tr: 'Bugün {0}/{1} doz', de: '{0}/{1} Dosen heute' },

  // Days of week
  mon: { en: 'Mon', tr: 'Pzt', de: 'Mo' },
  tue: { en: 'Tue', tr: 'Sal', de: 'Di' },
  wed: { en: 'Wed', tr: 'Çar', de: 'Mi' },
  thu: { en: 'Thu', tr: 'Per', de: 'Do' },
  fri: { en: 'Fri', tr: 'Cum', de: 'Fr' },
  sat: { en: 'Sat', tr: 'Cmt', de: 'Sa' },
  sun: { en: 'Sun', tr: 'Paz', de: 'So' },

  // Months
  january: { en: 'January', tr: 'Ocak', de: 'Januar' },
  february: { en: 'February', tr: 'Şubat', de: 'Februar' },
  march: { en: 'March', tr: 'Mart', de: 'März' },
  april: { en: 'April', tr: 'Nisan', de: 'April' },
  may: { en: 'May', tr: 'Mayıs', de: 'Mai' },
  june: { en: 'June', tr: 'Haziran', de: 'Juni' },
  july: { en: 'July', tr: 'Temmuz', de: 'Juli' },
  august: { en: 'August', tr: 'Ağustos', de: 'August' },
  september: { en: 'September', tr: 'Eylül', de: 'September' },
  october: { en: 'October', tr: 'Ekim', de: 'Oktober' },
  november: { en: 'November', tr: 'Kasım', de: 'November' },
  december: { en: 'December', tr: 'Aralık', de: 'Dezember' },

  // Medication forms
  form_tablet: { en: 'Tablet', tr: 'Tablet', de: 'Tablette' },
  form_capsule: { en: 'Capsule', tr: 'Kapsül', de: 'Kapsel' },
  form_syrup: { en: 'Syrup', tr: 'Şurup', de: 'Sirup' },
  form_suspension: { en: 'Suspension', tr: 'Süspansiyon', de: 'Suspension' },
  form_injection: { en: 'Injection', tr: 'Enjeksiyon', de: 'Injektion' },
  form_inhaler: { en: 'Inhaler', tr: 'İnhaler', de: 'Inhalator' },
  form_cream: { en: 'Cream', tr: 'Krem', de: 'Creme' },
  form_gel: { en: 'Gel', tr: 'Jel', de: 'Gel' },
  form_ointment: { en: 'Ointment', tr: 'Merhem', de: 'Salbe' },
  form_drops: { en: 'Drops', tr: 'Damla', de: 'Tropfen' },
  form_spray: { en: 'Spray', tr: 'Sprey', de: 'Spray' },
  form_nasal_spray: { en: 'Nasal Spray', tr: 'Nazal Sprey', de: 'Nasenspray' },
  form_patch: { en: 'Patch', tr: 'Bant', de: 'Pflaster' },
  form_suppository: { en: 'Suppository', tr: 'Fitil', de: 'Zäpfchen' },
  form_powder: { en: 'Powder', tr: 'Toz', de: 'Pulver' },
  form_effervescent: { en: 'Effervescent Tablet', tr: 'Efervesan Tablet', de: 'Brausetablette' },
  form_chewable: { en: 'Chewable Tablet', tr: 'Çiğneme Tableti', de: 'Kautablette' },
  form_lozenge: { en: 'Lozenge', tr: 'Pastil', de: 'Lutschtablette' },
  form_sublingual: { en: 'Sublingual Tablet', tr: 'Dilaltı Tablet', de: 'Sublingualtablette' },
  form_solution: { en: 'Solution', tr: 'Solüsyon', de: 'Lösung' },
  form_vaginal: { en: 'Vaginal Tablet', tr: 'Vajinal Tablet', de: 'Vaginaltablette' },
  form_implant: { en: 'Implant', tr: 'İmplant', de: 'Implantat' },

  // Missing UI keys
  eg_30: { en: 'e.g., 30', tr: 'ör. 30', de: 'z.B. 30' },
  eg_5: { en: 'e.g., 5', tr: 'ör. 5', de: 'z.B. 5' },
  stock: { en: 'Stock', tr: 'Stok', de: 'Bestand' },
  units: { en: 'units', tr: 'adet', de: 'Stück' },
  failed_update_dose: { en: 'Failed to update dose status', tr: 'Doz durumu güncellenemedi', de: 'Dosisstatus konnte nicht aktualisiert werden' },
  failed_delete: { en: 'Failed to delete medication', tr: 'İlaç silinemedi', de: 'Medikament konnte nicht gelöscht werden' },
  doses_taken_of: { en: '{0} of {1} doses taken', tr: '{1} dozdan {0} alındı', de: '{0} von {1} Dosen eingenommen' },
  progress: { en: 'Progress', tr: 'İlerleme', de: 'Fortschritt' },
  medication_progress_doses: { en: '{0}/{1} doses taken', tr: '{0}/{1} doz alındı', de: '{0}/{1} Dosen eingenommen' },
  completed_percent: { en: '{0}% completed', tr: '%{0} tamamlandı', de: '{0}% abgeschlossen' },
  delete_all: { en: 'Delete All', tr: 'Tümünü Sil', de: 'Alle löschen' },
  delete_all_confirm: { en: 'Are you sure you want to delete all {0} medications?', tr: 'Tüm {0} ilaçları silmek istediğinize emin misiniz?', de: 'Möchten Sie wirklich alle {0} Medikamente löschen?' },

  // Info / About / FAQ Screen
  info_and_help: { en: 'Info & Help', tr: 'Bilgi & Yardım', de: 'Info & Hilfe' },

  about_title: { en: 'About MedTracker', tr: 'MedTracker Hakkında', de: 'Über MedTracker' },
  about_description: {
    en: 'MedTracker is a personal medication tracking app that helps you manage your daily medications, set reminders, and keep track of your adherence. It supports multiple languages and regions so you can find medications available in your location.',
    tr: 'MedTracker, günlük ilaçlarınızı yönetmenize, hatırlatıcılar ayarlamanıza ve ilaç kullanım düzeninizi takip etmenize yardımcı olan kişisel bir ilaç takip uygulamasıdır. Birden fazla dil ve bölge desteği sayesinde bulunduğunuz lokasyondaki ilaçları kolayca bulabilirsiniz.',
    de: 'MedTracker ist eine persönliche Medikamenten-Tracking-App, die Ihnen hilft, Ihre täglichen Medikamente zu verwalten, Erinnerungen einzustellen und Ihre Einnahmetreue zu verfolgen. Die App unterstützt mehrere Sprachen und Regionen, damit Sie Medikamente in Ihrer Region finden können.',
  },

  features_title: { en: 'Features', tr: 'Özellikler', de: 'Funktionen' },
  feature_1: {
    en: 'Add and manage your medications with dosage, schedule, and stock tracking',
    tr: 'Dozaj, zamanlama ve stok takibi ile ilaçlarınızı ekleyin ve yönetin',
    de: 'Medikamente mit Dosierung, Zeitplan und Bestandsverfolgung hinzufügen und verwalten',
  },
  feature_2: {
    en: 'Get push notifications for each dose so you never miss a medication',
    tr: 'Her doz için bildirim alarak ilaçlarınızı asla kaçırmayın',
    de: 'Push-Benachrichtigungen für jede Dosis erhalten, damit Sie nie eine Einnahme verpassen',
  },
  feature_3: {
    en: 'Calendar view to see your medication adherence history at a glance',
    tr: 'Takvim görünümü ile ilaç kullanım geçmişinizi bir bakışta görün',
    de: 'Kalenderansicht, um Ihre Einnahmehistorie auf einen Blick zu sehen',
  },
  feature_4: {
    en: 'Region-based medication search — find medications available in your country',
    tr: 'Bölgeye dayalı ilaç arama — ülkenizde bulunan ilaçları bulun',
    de: 'Regionsbasierte Medikamentensuche — finden Sie Medikamente in Ihrer Region',
  },
  feature_5: {
    en: 'Stock tracking with low-stock warnings so you can refill on time',
    tr: 'Düşük stok uyarıları ile stok takibi sayesinde zamanında tedarik edin',
    de: 'Bestandsverfolgung mit Warnungen bei niedrigem Bestand für rechtzeitige Nachbestellung',
  },

  privacy_title: { en: 'Privacy & Security', tr: 'Gizlilik & Güvenlik', de: 'Datenschutz & Sicherheit' },
  privacy_description: {
    en: 'Your privacy is our top priority. MedTracker is designed with a privacy-first approach. All your data is stored exclusively on your device — nothing is sent to any server, cloud, or third party. We do not collect, transmit, or store any of your personal or health information.',
    tr: 'Gizliliğiniz bizim en önemli önceliğimizdir. MedTracker, gizlilik öncelikli bir yaklaşımla tasarlanmıştır. Tüm verileriniz yalnızca cihazınızda saklanır — hiçbir sunucuya, bulut servisine veya üçüncü tarafa gönderilmez. Kişisel veya sağlık bilgilerinizi toplamıyor, iletmiyor veya saklamıyoruz.',
    de: 'Ihr Datenschutz hat für uns höchste Priorität. MedTracker wurde mit einem Datenschutz-First-Ansatz entwickelt. Alle Ihre Daten werden ausschließlich auf Ihrem Gerät gespeichert — nichts wird an Server, Cloud-Dienste oder Dritte gesendet. Wir erfassen, übertragen oder speichern keine Ihrer persönlichen oder gesundheitsbezogenen Daten.',
  },

  faq_title: { en: 'Frequently Asked Questions', tr: 'Sıkça Sorulan Sorular', de: 'Häufig gestellte Fragen' },

  faq_q1: {
    en: 'Can the app owner or other people see my medication data?',
    tr: 'Uygulamanın sahibi dahil diğer insanlar ilaç bilgilerimi görebilir mi?',
    de: 'Können der App-Inhaber oder andere Personen meine Medikamentendaten sehen?',
  },
  faq_a1: {
    en: 'No, absolutely not. All your medication data is stored locally on your device only. MedTracker does not have any server, database, or backend system. The app owner, developers, or any third party have no way to access, view, or retrieve your information. Your data stays on your phone and nowhere else.',
    tr: 'Hayır, kesinlikle hayır. Tüm ilaç verileriniz yalnızca cihazınızda yerel olarak saklanır. MedTracker\'ın herhangi bir sunucusu, veritabanı veya arka uç sistemi yoktur. Uygulama sahibi, geliştiriciler veya herhangi bir üçüncü taraf, bilgilerinize erişme, görüntüleme veya alma imkânına sahip değildir. Verileriniz telefonunuzda kalır, başka hiçbir yerde bulunmaz.',
    de: 'Nein, absolut nicht. Alle Ihre Medikamentendaten werden ausschließlich lokal auf Ihrem Gerät gespeichert. MedTracker hat keinen Server, keine Datenbank und kein Backend-System. Der App-Inhaber, Entwickler oder Dritte haben keinerlei Möglichkeit, auf Ihre Informationen zuzugreifen, sie einzusehen oder abzurufen. Ihre Daten bleiben auf Ihrem Telefon und nirgendwo sonst.',
  },

  faq_q2: {
    en: 'What happens to my data if I delete the app?',
    tr: 'Uygulamayı silersem verilerime ne olur?',
    de: 'Was passiert mit meinen Daten, wenn ich die App lösche?',
  },
  faq_a2: {
    en: 'Since all data is stored locally on your device, deleting the app will permanently erase all your medication data. There is no way to recover it, because no backup exists on any server. We recommend noting down important information before uninstalling.',
    tr: 'Tüm veriler cihazınızda yerel olarak saklandığından, uygulamayı silmek tüm ilaç verilerinizi kalıcı olarak siler. Hiçbir sunucuda yedek bulunmadığı için verileri kurtarmanın bir yolu yoktur. Uygulamayı kaldırmadan önce önemli bilgilerinizi not almanızı öneririz.',
    de: 'Da alle Daten lokal auf Ihrem Gerät gespeichert sind, werden beim Löschen der App alle Ihre Medikamentendaten dauerhaft gelöscht. Eine Wiederherstellung ist nicht möglich, da kein Backup auf einem Server existiert. Wir empfehlen, wichtige Informationen vor der Deinstallation zu notieren.',
  },

  faq_q3: {
    en: 'Does the app use the internet?',
    tr: 'Uygulama internet kullanıyor mu?',
    de: 'Nutzt die App das Internet?',
  },
  faq_a3: {
    en: 'MedTracker works fully offline. The only time it uses the internet is when you search for a medication name — it may query a public drug database (OpenFDA) to help you find medications. No personal data is sent during this process; only the medication name you type is used for the search.',
    tr: 'MedTracker tamamen çevrimdışı çalışır. İnterneti yalnızca ilaç adı ararken kullanır — ilaçları bulmanıza yardımcı olmak için herkese açık bir ilaç veritabanını (OpenFDA) sorgulayabilir. Bu süreçte hiçbir kişisel veri gönderilmez; yalnızca yazdığınız ilaç adı arama için kullanılır.',
    de: 'MedTracker funktioniert vollständig offline. Das Internet wird nur verwendet, wenn Sie nach einem Medikamentennamen suchen — dabei kann eine öffentliche Arzneimitteldatenbank (OpenFDA) abgefragt werden. Dabei werden keine persönlichen Daten gesendet; nur der eingegebene Medikamentenname wird für die Suche verwendet.',
  },

  faq_q4: {
    en: 'Is the medication information in this app medical advice?',
    tr: 'Bu uygulamadaki ilaç bilgileri tıbbi tavsiye midir?',
    de: 'Sind die Medikamenteninformationen in dieser App eine medizinische Beratung?',
  },
  faq_a4: {
    en: 'No. MedTracker is a personal tracking tool only. It does not provide medical advice, diagnosis, or treatment recommendations. The medication suggestions during search are for convenience only. Always consult your doctor or pharmacist for medical decisions.',
    tr: 'Hayır. MedTracker yalnızca kişisel bir takip aracıdır. Tıbbi tavsiye, teşhis veya tedavi önerisi sunmaz. Arama sırasındaki ilaç önerileri yalnızca kolaylık sağlamak içindir. Tıbbi kararlar için her zaman doktorunuza veya eczacınıza danışın.',
    de: 'Nein. MedTracker ist nur ein persönliches Tracking-Tool. Es bietet keine medizinische Beratung, Diagnose oder Behandlungsempfehlungen. Die Medikamentenvorschläge bei der Suche dienen nur der Bequemlichkeit. Konsultieren Sie immer Ihren Arzt oder Apotheker für medizinische Entscheidungen.',
  },

  faq_q5: {
    en: 'How does the location setting affect the app?',
    tr: 'Lokasyon ayarı uygulamayı nasıl etkiler?',
    de: 'Wie beeinflusst die Standorteinstellung die App?',
  },
  faq_a5: {
    en: 'The location setting determines which medications appear in search results. Each region has different brand-name medications, so setting your location to your country ensures you see medications that are actually available where you live. This setting does not use GPS — you choose it manually.',
    tr: 'Lokasyon ayarı, arama sonuçlarında hangi ilaçların görüneceğini belirler. Her bölgenin farklı marka ilaçları olduğundan, lokasyonunuzu ülkenize ayarlamak gerçekten bulunduğunuz yerde mevcut olan ilaçları görmenizi sağlar. Bu ayar GPS kullanmaz — kendiniz manuel olarak seçersiniz.',
    de: 'Die Standorteinstellung bestimmt, welche Medikamente in den Suchergebnissen erscheinen. Jede Region hat unterschiedliche Markenmedikamente. Wenn Sie Ihren Standort auf Ihr Land einstellen, sehen Sie Medikamente, die tatsächlich verfügbar sind. Diese Einstellung verwendet kein GPS — Sie wählen sie manuell aus.',
  },
};

/**
 * Helper: get translated string with optional {0}, {1} placeholders
 */
export function tr(key: string, lang: Language, ...args: (string | number)[]): string {
  const entry = t[key];
  if (!entry) return key;
  let str = entry[lang] || entry.en || key;
  args.forEach((arg, i) => {
    str = str.replace(`{${i}}`, String(arg));
  });
  return str;
}

/**
 * Helper: get translated category name
 */
export function trCategory(categoryKey: string, lang: Language): string {
  const entry = categoryTranslations[categoryKey];
  if (!entry) return categoryKey;
  return entry[lang] || entry.en || categoryKey;
}

/**
 * Helper: get translated form name
 */
export function trForm(formKey: string, lang: Language): string {
  const formMap: Record<string, string> = {
    'Tablet': 'form_tablet',
    'Kapsül': 'form_capsule',
    'Şurup': 'form_syrup',
    'Süspansiyon': 'form_suspension',
    'Enjeksiyon': 'form_injection',
    'İnhaler': 'form_inhaler',
    'Krem': 'form_cream',
    'Jel': 'form_gel',
    'Merhem': 'form_ointment',
    'Damla': 'form_drops',
    'Sprey': 'form_spray',
    'Nazal Sprey': 'form_nasal_spray',
    'Bant': 'form_patch',
    'Fitil': 'form_suppository',
    'Toz': 'form_powder',
    'Efervesan Tablet': 'form_effervescent',
    'Çiğneme Tableti': 'form_chewable',
    'Pastil': 'form_lozenge',
    'Dilaltı Tablet': 'form_sublingual',
    'Solüsyon': 'form_solution',
    'Vajinal Tablet': 'form_vaginal',
    'İmplant': 'form_implant',
  };
  const tKey = formMap[formKey];
  if (!tKey) return formKey;
  const entry = t[tKey];
  return entry ? (entry[lang] || entry.en) : formKey;
}
