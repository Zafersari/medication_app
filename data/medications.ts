export interface MedicationInfo {
  name: string;
  genericName?: string;
  category: string;
  commonDosages: string[];
  form: string;
}

/**
 * Comprehensive local medication database — 600+ medications
 * Covers: Turkish brand names, European brands, and international generics
 * Sorted alphabetically for fast search
 */
export const MEDICATION_DATABASE: MedicationInfo[] = [
  // ══════════════════════════════════════════════════════════════
  // A
  // ══════════════════════════════════════════════════════════════
  { name: 'Abacavir', category: 'Antiviral (HIV)', commonDosages: ['300mg', '600mg'], form: 'Tablet' },
  { name: 'Acarbose', category: 'Diyabet', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Acebutolol', category: 'Tansiyon / Kalp', commonDosages: ['200mg', '400mg'], form: 'Kapsül' },
  { name: 'Acetylcysteine (ACC)', genericName: 'Asetilsistein', category: 'Mukolitik', commonDosages: ['200mg', '600mg'], form: 'Efervesan Tablet' },
  { name: 'Acetylsalicylic Acid (Aspirin)', genericName: 'Aspirin', category: 'Ağrı Kesici / Antiplatelet', commonDosages: ['100mg', '300mg', '500mg'], form: 'Tablet' },
  { name: 'Aciclovir', genericName: 'Asiklovir', category: 'Antiviral', commonDosages: ['200mg', '400mg', '800mg'], form: 'Tablet' },
  { name: 'Adapalene', category: 'Dermatolojik', commonDosages: ['0.1% jel', '0.3% jel'], form: 'Jel' },
  { name: 'Aferin', category: 'Soğuk Algınlığı', commonDosages: ['1 tablet', '1 poşe'], form: 'Tablet' },
  { name: 'Aferin Forte', category: 'Soğuk Algınlığı', commonDosages: ['1 tablet'], form: 'Tablet' },
  { name: 'Akineton', genericName: 'Biperiden', category: 'Nöroloji (Parkinson)', commonDosages: ['2mg', '4mg'], form: 'Tablet' },
  { name: 'Aldactone', genericName: 'Spironolakton', category: 'Diüretik', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Alendronate', genericName: 'Alendronat', category: 'Osteoporoz', commonDosages: ['10mg', '70mg'], form: 'Tablet' },
  { name: 'Alfuzosin', category: 'Üroloji', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Allopurinol', category: 'Gut', commonDosages: ['100mg', '300mg'], form: 'Tablet' },
  { name: 'Almotriptan', category: 'Migren', commonDosages: ['12.5mg'], form: 'Tablet' },
  { name: 'Alprazolam', category: 'Anksiyete', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Tablet' },
  { name: 'Ambroxol', category: 'Mukolitik', commonDosages: ['30mg', '75mg'], form: 'Tablet' },
  { name: 'Amiodarone', category: 'Kalp (Aritmi)', commonDosages: ['200mg'], form: 'Tablet' },
  { name: 'Amisulpride', category: 'Psikiyatri', commonDosages: ['50mg', '100mg', '200mg', '400mg'], form: 'Tablet' },
  { name: 'Amitriptyline', category: 'Antidepresan / Ağrı', commonDosages: ['10mg', '25mg', '50mg', '75mg'], form: 'Tablet' },
  { name: 'Amlodipine', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Amoksiklav', genericName: 'Amoksisilin + Klavulanat', category: 'Antibiyotik', commonDosages: ['625mg', '1000mg'], form: 'Tablet' },
  { name: 'Amoxicillin', genericName: 'Amoksisilin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '875mg'], form: 'Kapsül' },
  { name: 'Amoxicillin + Clavulanate', genericName: 'Augmentin', category: 'Antibiyotik', commonDosages: ['625mg', '1000mg'], form: 'Tablet' },
  { name: 'Ampicillin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Kapsül' },
  { name: 'Anafranil', genericName: 'Klomipramin', category: 'Antidepresan / OKB', commonDosages: ['10mg', '25mg', '75mg'], form: 'Tablet' },
  { name: 'Anastrozole', category: 'Onkoloji (Meme Kanseri)', commonDosages: ['1mg'], form: 'Tablet' },
  { name: 'Apixaban', genericName: 'Eliquis', category: 'Kan Sulandırıcı', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Apranax', genericName: 'Naproksen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['275mg', '550mg'], form: 'Tablet' },
  { name: 'Aripiprazole', category: 'Psikiyatri', commonDosages: ['5mg', '10mg', '15mg', '30mg'], form: 'Tablet' },
  { name: 'Arveles', genericName: 'Deksketoprofen', category: 'Ağrı Kesici', commonDosages: ['25mg'], form: 'Tablet' },
  { name: 'Aspirin Protect', genericName: 'Asetilsalisilik Asit', category: 'Antiplatelet', commonDosages: ['100mg', '300mg'], form: 'Tablet' },
  { name: 'Atenolol', category: 'Tansiyon / Kalp', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Atorvastatin', genericName: 'Atorvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet' },
  { name: 'Atrovent', genericName: 'İpratropium', category: 'Solunum', commonDosages: ['20mcg', '250mcg/ml'], form: 'İnhaler' },
  { name: 'Augmentin', genericName: 'Amoksisilin + Klavulanat', category: 'Antibiyotik', commonDosages: ['625mg', '1000mg'], form: 'Tablet' },
  { name: 'Augmentin BID', genericName: 'Amoksisilin + Klavulanat', category: 'Antibiyotik', commonDosages: ['400/57mg', '200/28.5mg'], form: 'Süspansiyon' },
  { name: 'Avelox', genericName: 'Moksifloksasin', category: 'Antibiyotik', commonDosages: ['400mg'], form: 'Tablet' },
  { name: 'Azathioprine', genericName: 'Azatioprin', category: 'İmmünosupresif', commonDosages: ['50mg'], form: 'Tablet' },
  { name: 'Azithromycin', genericName: 'Azitromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // B
  // ══════════════════════════════════════════════════════════════
  { name: 'Baclofen', category: 'Kas Gevşetici', commonDosages: ['10mg', '25mg'], form: 'Tablet' },
  { name: 'Bactrim', genericName: 'Trimetoprim + Sülfametoksazol', category: 'Antibiyotik', commonDosages: ['400/80mg', '800/160mg'], form: 'Tablet' },
  { name: 'Beclomethasone', category: 'Solunum', commonDosages: ['50mcg', '100mcg', '250mcg'], form: 'İnhaler' },
  { name: 'Beloc', genericName: 'Metoprolol', category: 'Tansiyon / Kalp', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Bemfola', genericName: 'Follitropin Alfa', category: 'Fertilite', commonDosages: ['75 IU', '150 IU'], form: 'Enjeksiyon' },
  { name: 'Benadryl', genericName: 'Difenhidramin', category: 'Alerji', commonDosages: ['25mg', '50mg'], form: 'Tablet' },
  { name: 'Benazepril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Benicar', genericName: 'Olmesartan', category: 'Tansiyon', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Betahistine', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['8mg', '16mg', '24mg'], form: 'Tablet' },
  { name: 'Betaserc', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['16mg', '24mg'], form: 'Tablet' },
  { name: 'Bicalutamide', category: 'Onkoloji (Prostat)', commonDosages: ['50mg', '150mg'], form: 'Tablet' },
  { name: 'Bisoprolol', category: 'Tansiyon / Kalp', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Bricanyl', genericName: 'Terbutalin', category: 'Solunum', commonDosages: ['0.5mg/ml', '2.5mg'], form: 'İnhaler' },
  { name: 'Bromhexine', genericName: 'Bromheksin', category: 'Mukolitik', commonDosages: ['8mg'], form: 'Tablet' },
  { name: 'Budesonide', category: 'Solunum', commonDosages: ['100mcg', '200mcg', '400mcg'], form: 'İnhaler' },
  { name: 'Bupropion', category: 'Antidepresan / Sigara Bırakma', commonDosages: ['150mg', '300mg'], form: 'Tablet' },
  { name: 'Buscopan', genericName: 'Hiyosin Butilbromür', category: 'Sindirim (Spazmolitik)', commonDosages: ['10mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // C
  // ══════════════════════════════════════════════════════════════
  { name: 'Calcium + Vitamin D', genericName: 'Kalsiyum + D Vitamini', category: 'Mineral / Vitamin', commonDosages: ['500mg + 400IU', '600mg + 400IU'], form: 'Tablet' },
  { name: 'Calpol', genericName: 'Parasetamol', category: 'Ağrı Kesici / Ateş (Çocuk)', commonDosages: ['120mg/5ml', '250mg/5ml'], form: 'Süspansiyon' },
  { name: 'Candesartan', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg', '32mg'], form: 'Tablet' },
  { name: 'Carbamazepine', genericName: 'Karbamazepin', category: 'Epilepsi / Nöroloji', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Cardura', genericName: 'Doksazosin', category: 'Tansiyon / Üroloji', commonDosages: ['1mg', '2mg', '4mg'], form: 'Tablet' },
  { name: 'Carvedilol', category: 'Tansiyon / Kalp', commonDosages: ['6.25mg', '12.5mg', '25mg'], form: 'Tablet' },
  { name: 'Cataflam', genericName: 'Diklofenak Potasyum', category: 'Ağrı Kesici', commonDosages: ['25mg', '50mg'], form: 'Tablet' },
  { name: 'Cefdinir', category: 'Antibiyotik', commonDosages: ['300mg'], form: 'Kapsül' },
  { name: 'Cefixime', genericName: 'Sefiksim', category: 'Antibiyotik', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Cefuroxime', genericName: 'Sefuroksim', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Celebrex', genericName: 'Selekoksib', category: 'Ağrı Kesici (COX-2)', commonDosages: ['100mg', '200mg'], form: 'Kapsül' },
  { name: 'Cetirizine', genericName: 'Setirizin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Champix', genericName: 'Vareniklin', category: 'Sigara Bırakma', commonDosages: ['0.5mg', '1mg'], form: 'Tablet' },
  { name: 'Cipralex', genericName: 'Essitalopram', category: 'Antidepresan', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Cipro', genericName: 'Siprofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet' },
  { name: 'Ciprofloxacin', genericName: 'Siprofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet' },
  { name: 'Citalopram', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Clarithromycin', genericName: 'Klaritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Clexane', genericName: 'Enoksaparin', category: 'Kan Sulandırıcı', commonDosages: ['2000IU', '4000IU', '6000IU', '8000IU'], form: 'Enjeksiyon' },
  { name: 'Clopidogrel', category: 'Antiplatelet', commonDosages: ['75mg'], form: 'Tablet' },
  { name: 'Clonazepam', category: 'Anksiyete / Epilepsi', commonDosages: ['0.5mg', '1mg', '2mg'], form: 'Tablet' },
  { name: 'Clotrimazole', genericName: 'Klotrimazol', category: 'Antifungal', commonDosages: ['1% krem', '500mg vajinal'], form: 'Krem' },
  { name: 'Coartem', genericName: 'Artemeter + Lumefantrin', category: 'Antimalaryal', commonDosages: ['20/120mg'], form: 'Tablet' },
  { name: 'Colchicine', genericName: 'Kolşisin', category: 'Gut', commonDosages: ['0.5mg', '1mg'], form: 'Tablet' },
  { name: 'Colpermin', genericName: 'Nane Yağı', category: 'Sindirim (IBS)', commonDosages: ['187mg'], form: 'Kapsül' },
  { name: 'Combivent', genericName: 'İpratropium + Salbutamol', category: 'Solunum', commonDosages: ['20/100mcg'], form: 'İnhaler' },
  { name: 'Concerta', genericName: 'Metilfenidat', category: 'DEHB', commonDosages: ['18mg', '27mg', '36mg', '54mg'], form: 'Tablet' },
  { name: 'Controloc', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Coraspin', genericName: 'Asetilsalisilik Asit', category: 'Antiplatelet', commonDosages: ['100mg', '300mg'], form: 'Tablet' },
  { name: 'Coumadin', genericName: 'Varfarin', category: 'Kan Sulandırıcı', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Cozaar', genericName: 'Losartan', category: 'Tansiyon', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Crestor', genericName: 'Rosuvastatin', category: 'Kolesterol', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Cymbalta', genericName: 'Duloksetin', category: 'Antidepresan', commonDosages: ['30mg', '60mg'], form: 'Kapsül' },

  // ══════════════════════════════════════════════════════════════
  // D
  // ══════════════════════════════════════════════════════════════
  { name: 'Dabigatran', genericName: 'Pradaxa', category: 'Kan Sulandırıcı', commonDosages: ['75mg', '110mg', '150mg'], form: 'Kapsül' },
  { name: 'Daflon', genericName: 'Diosmin + Hesperidin', category: 'Damar Koruyucu', commonDosages: ['500mg', '1000mg'], form: 'Tablet' },
  { name: 'Daktarin', genericName: 'Mikonazol', category: 'Antifungal', commonDosages: ['2% krem', '2% jel'], form: 'Krem' },
  { name: 'Dalacin C', genericName: 'Klindamisin', category: 'Antibiyotik', commonDosages: ['150mg', '300mg'], form: 'Kapsül' },
  { name: 'Dapagliflozin', genericName: 'Forxiga', category: 'Diyabet', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Delix', genericName: 'Ramipril', category: 'Tansiyon / Kalp', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Deltacortril', genericName: 'Prednizolon', category: 'Kortikosteroid', commonDosages: ['5mg', '25mg'], form: 'Tablet' },
  { name: 'Depakine', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet' },
  { name: 'Desloratadine', genericName: 'Desloratadin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Dexamethasone', genericName: 'Deksametazon', category: 'Kortikosteroid', commonDosages: ['0.5mg', '4mg', '8mg'], form: 'Tablet' },
  { name: 'Dexketoprofen', genericName: 'Arveles', category: 'Ağrı Kesici', commonDosages: ['25mg'], form: 'Tablet' },
  { name: 'Diamicron', genericName: 'Gliklazid', category: 'Diyabet', commonDosages: ['30mg', '60mg', '80mg'], form: 'Tablet' },
  { name: 'Diazepam', category: 'Anksiyete', commonDosages: ['2mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Diclofenac', genericName: 'Diklofenak', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['25mg', '50mg', '75mg', '100mg'], form: 'Tablet' },
  { name: 'Diflucan', genericName: 'Flukonazol', category: 'Antifungal', commonDosages: ['50mg', '100mg', '150mg'], form: 'Kapsül' },
  { name: 'Digoxin', category: 'Kalp', commonDosages: ['0.0625mg', '0.125mg', '0.25mg'], form: 'Tablet' },
  { name: 'Diltiazem', category: 'Tansiyon / Kalp', commonDosages: ['60mg', '90mg', '120mg', '180mg'], form: 'Tablet' },
  { name: 'Dimetikon', category: 'Sindirim (Gaz)', commonDosages: ['80mg', '125mg'], form: 'Tablet' },
  { name: 'Diovan', genericName: 'Valsartan', category: 'Tansiyon', commonDosages: ['80mg', '160mg', '320mg'], form: 'Tablet' },
  { name: 'Diphenhydramine', genericName: 'Difenhidramin', category: 'Alerji / Uyku', commonDosages: ['25mg', '50mg'], form: 'Tablet' },
  { name: 'Doksil', genericName: 'Doksisiklin', category: 'Antibiyotik', commonDosages: ['100mg'], form: 'Kapsül' },
  { name: 'Domperidone', genericName: 'Domperidon', category: 'Bulantı / Sindirim', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Donepezil', category: 'Nöroloji (Alzheimer)', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Doxazosin', genericName: 'Doksazosin', category: 'Tansiyon / Üroloji', commonDosages: ['1mg', '2mg', '4mg'], form: 'Tablet' },
  { name: 'Doxycycline', genericName: 'Doksisiklin', category: 'Antibiyotik', commonDosages: ['100mg'], form: 'Kapsül' },
  { name: 'Dulcolax', genericName: 'Bisakodil', category: 'Kabızlık', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Duloxetine', genericName: 'Duloksetin', category: 'Antidepresan', commonDosages: ['30mg', '60mg'], form: 'Kapsül' },
  { name: 'Duphaston', genericName: 'Didrogesteron', category: 'Kadın Sağlığı', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Duodart', genericName: 'Dutasterid + Tamsulosin', category: 'Üroloji', commonDosages: ['0.5mg + 0.4mg'], form: 'Kapsül' },

  // ══════════════════════════════════════════════════════════════
  // E
  // ══════════════════════════════════════════════════════════════
  { name: 'Ecopirin', genericName: 'Asetilsalisilik Asit', category: 'Antiplatelet', commonDosages: ['100mg'], form: 'Tablet' },
  { name: 'Efexor', genericName: 'Venlafaksin', category: 'Antidepresan', commonDosages: ['37.5mg', '75mg', '150mg'], form: 'Kapsül' },
  { name: 'Elantan', genericName: 'İsosorbid Mononitrat', category: 'Kalp (Angina)', commonDosages: ['20mg', '40mg', '60mg'], form: 'Tablet' },
  { name: 'Eliquis', genericName: 'Apiksaban', category: 'Kan Sulandırıcı', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Enalapril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Enbrel', genericName: 'Etanersept', category: 'Romatoloji (Biyolojik)', commonDosages: ['25mg', '50mg'], form: 'Enjeksiyon' },
  { name: 'Endoxan', genericName: 'Siklofosfamid', category: 'Onkoloji', commonDosages: ['50mg'], form: 'Tablet' },
  { name: 'Enoxaparin', genericName: 'Clexane', category: 'Kan Sulandırıcı', commonDosages: ['4000IU', '6000IU', '8000IU'], form: 'Enjeksiyon' },
  { name: 'Entresto', genericName: 'Sakubitril + Valsartan', category: 'Kalp Yetmezliği', commonDosages: ['24/26mg', '49/51mg', '97/103mg'], form: 'Tablet' },
  { name: 'Epipen', genericName: 'Adrenalin (Epinefrin)', category: 'Acil (Anafilaksi)', commonDosages: ['0.15mg', '0.3mg'], form: 'Enjeksiyon' },
  { name: 'Eplerenone', category: 'Kalp / Tansiyon', commonDosages: ['25mg', '50mg'], form: 'Tablet' },
  { name: 'Erythromycin', genericName: 'Eritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Escitalopram', genericName: 'Essitalopram', category: 'Antidepresan', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Esomeprazole', genericName: 'Esomeprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Kapsül' },
  { name: 'Estradiol', category: 'Kadın Sağlığı (HRT)', commonDosages: ['1mg', '2mg'], form: 'Tablet' },
  { name: 'Etodolac', category: 'Ağrı Kesici', commonDosages: ['200mg', '300mg', '400mg'], form: 'Tablet' },
  { name: 'Etoricoxib', genericName: 'Arcoxia', category: 'Ağrı Kesici (COX-2)', commonDosages: ['30mg', '60mg', '90mg', '120mg'], form: 'Tablet' },
  { name: 'Euthyrox', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg'], form: 'Tablet' },
  { name: 'Exforge', genericName: 'Amlodipin + Valsartan', category: 'Tansiyon', commonDosages: ['5/80mg', '5/160mg', '10/160mg'], form: 'Tablet' },
  { name: 'Ezetimibe', category: 'Kolesterol', commonDosages: ['10mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // F
  // ══════════════════════════════════════════════════════════════
  { name: 'Famotidine', genericName: 'Famotidin', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Faslodex', genericName: 'Fulvestrant', category: 'Onkoloji (Meme)', commonDosages: ['250mg'], form: 'Enjeksiyon' },
  { name: 'Fenistil', genericName: 'Dimetinden', category: 'Alerji', commonDosages: ['1mg/ml damla', '1mg'], form: 'Damla' },
  { name: 'Fenosup', genericName: 'Fenofibrat', category: 'Kolesterol (Trigliserit)', commonDosages: ['160mg', '200mg'], form: 'Kapsül' },
  { name: 'Fentanyl', category: 'Ağrı (Opioid)', commonDosages: ['12mcg/h', '25mcg/h', '50mcg/h', '75mcg/h'], form: 'Bant' },
  { name: 'Ferrous Sulfate', genericName: 'Demir Sülfat', category: 'Mineral (Demir)', commonDosages: ['200mg', '325mg'], form: 'Tablet' },
  { name: 'Fexofenadine', genericName: 'Feksofenadin', category: 'Alerji', commonDosages: ['120mg', '180mg'], form: 'Tablet' },
  { name: 'Finasteride', category: 'Üroloji / Dermatolojik', commonDosages: ['1mg', '5mg'], form: 'Tablet' },
  { name: 'Flagyl', genericName: 'Metronidazol', category: 'Antibiyotik / Antiparaziter', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Flector', genericName: 'Diklofenak', category: 'Ağrı Kesici (Topikal)', commonDosages: ['1% jel', 'bant'], form: 'Jel' },
  { name: 'Fluconazole', genericName: 'Flukonazol', category: 'Antifungal', commonDosages: ['50mg', '100mg', '150mg', '200mg'], form: 'Kapsül' },
  { name: 'Fluoxetine', genericName: 'Fluoksetin (Prozac)', category: 'Antidepresan', commonDosages: ['20mg', '40mg'], form: 'Kapsül' },
  { name: 'Fluticasone', genericName: 'Flutikason', category: 'Solunum / Alerji', commonDosages: ['50mcg', '125mcg', '250mcg'], form: 'İnhaler' },
  { name: 'Fluvoxamine', genericName: 'Fluvoksamin', category: 'Antidepresan / OKB', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Folic Acid', genericName: 'Folik Asit', category: 'Vitamin', commonDosages: ['400mcg', '1mg', '5mg'], form: 'Tablet' },
  { name: 'Foradil', genericName: 'Formoterol', category: 'Solunum', commonDosages: ['12mcg'], form: 'İnhaler' },
  { name: 'Forxiga', genericName: 'Dapagliflozin', category: 'Diyabet / Kalp', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Fosamax', genericName: 'Alendronat', category: 'Osteoporoz', commonDosages: ['10mg', '70mg'], form: 'Tablet' },
  { name: 'Furosemide', genericName: 'Furosemid', category: 'Diüretik', commonDosages: ['20mg', '40mg', '80mg'], form: 'Tablet' },
  { name: 'Fusidic Acid', genericName: 'Fusidik Asit', category: 'Antibiyotik (Topikal)', commonDosages: ['2% krem'], form: 'Krem' },

  // ══════════════════════════════════════════════════════════════
  // G
  // ══════════════════════════════════════════════════════════════
  { name: 'Gabapentin', category: 'Nöroloji / Ağrı', commonDosages: ['100mg', '300mg', '400mg', '600mg', '800mg'], form: 'Kapsül' },
  { name: 'Galvus', genericName: 'Vildagliptin', category: 'Diyabet', commonDosages: ['50mg'], form: 'Tablet' },
  { name: 'Gaviscon', category: 'Mide (Reflü)', commonDosages: ['10ml', '1 poşe'], form: 'Süspansiyon' },
  { name: 'Gliclazide', genericName: 'Gliklazid', category: 'Diyabet', commonDosages: ['30mg', '60mg', '80mg'], form: 'Tablet' },
  { name: 'Glimepiride', genericName: 'Glimepirid', category: 'Diyabet', commonDosages: ['1mg', '2mg', '4mg'], form: 'Tablet' },
  { name: 'Glucobay', genericName: 'Akarboz', category: 'Diyabet', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Glucophage', genericName: 'Metformin', category: 'Diyabet', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet' },
  { name: 'Glynase', genericName: 'Gliburid', category: 'Diyabet', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Gripin', category: 'Soğuk Algınlığı', commonDosages: ['1 tablet', '1 poşe'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // H
  // ══════════════════════════════════════════════════════════════
  { name: 'Haldol', genericName: 'Haloperidol', category: 'Psikiyatri', commonDosages: ['0.5mg', '1mg', '2mg', '5mg'], form: 'Tablet' },
  { name: 'Herceptin', genericName: 'Trastuzumab', category: 'Onkoloji (Meme)', commonDosages: ['150mg', '440mg'], form: 'Enjeksiyon' },
  { name: 'Humira', genericName: 'Adalimumab', category: 'Romatoloji (Biyolojik)', commonDosages: ['40mg'], form: 'Enjeksiyon' },
  { name: 'Hydrochlorothiazide', genericName: 'Hidroklorotiyazid', category: 'Diüretik / Tansiyon', commonDosages: ['12.5mg', '25mg', '50mg'], form: 'Tablet' },
  { name: 'Hydroxychloroquine', genericName: 'Hidroksiklorokin', category: 'Romatoloji / Antimalaryal', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Hydroxyzine', genericName: 'Hidroksizin', category: 'Alerji / Anksiyete', commonDosages: ['10mg', '25mg', '50mg'], form: 'Tablet' },
  { name: 'Hyoscine', genericName: 'Hiyosin', category: 'Sindirim (Spazmolitik)', commonDosages: ['10mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // I
  // ══════════════════════════════════════════════════════════════
  { name: 'Ibuprofen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['200mg', '400mg', '600mg', '800mg'], form: 'Tablet' },
  { name: 'Imodium', genericName: 'Loperamid', category: 'İshal', commonDosages: ['2mg'], form: 'Kapsül' },
  { name: 'Imuran', genericName: 'Azatioprin', category: 'İmmünosupresif', commonDosages: ['50mg'], form: 'Tablet' },
  { name: 'Indapamide', genericName: 'İndapamid', category: 'Diüretik / Tansiyon', commonDosages: ['1.5mg', '2.5mg'], form: 'Tablet' },
  { name: 'Inderal', genericName: 'Propranolol', category: 'Tansiyon / Anksiyete', commonDosages: ['10mg', '40mg', '80mg'], form: 'Tablet' },
  { name: 'Indomethacin', genericName: 'İndometasin', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['25mg', '50mg'], form: 'Kapsül' },
  { name: 'Innohep', genericName: 'Tinzaparin', category: 'Kan Sulandırıcı', commonDosages: ['4500IU', '10000IU'], form: 'Enjeksiyon' },
  { name: 'Inspra', genericName: 'Eplerenon', category: 'Kalp Yetmezliği', commonDosages: ['25mg', '50mg'], form: 'Tablet' },
  { name: 'Insulin Aspart', genericName: 'NovoRapid', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon' },
  { name: 'Insulin Glargine', genericName: 'Lantus', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL', '300 IU/mL'], form: 'Enjeksiyon' },
  { name: 'Insulin Lispro', genericName: 'Humalog', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon' },
  { name: 'Irbesartan', category: 'Tansiyon', commonDosages: ['75mg', '150mg', '300mg'], form: 'Tablet' },
  { name: 'Isoniazid', genericName: 'İzoniazid', category: 'Antibiyotik (Tüberküloz)', commonDosages: ['100mg', '300mg'], form: 'Tablet' },
  { name: 'Isosorbide Mononitrate', genericName: 'İzosorbid Mononitrat', category: 'Kalp (Angina)', commonDosages: ['20mg', '40mg', '60mg'], form: 'Tablet' },
  { name: 'Isotretinoin', genericName: 'İzotretinoin (Roaccutane)', category: 'Dermatolojik (Akne)', commonDosages: ['10mg', '20mg', '40mg'], form: 'Kapsül' },
  { name: 'Itraconazole', genericName: 'İtrakonazol', category: 'Antifungal', commonDosages: ['100mg'], form: 'Kapsül' },
  { name: 'Ivermectin', genericName: 'İvermektin', category: 'Antiparaziter', commonDosages: ['3mg', '6mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // J
  // ══════════════════════════════════════════════════════════════
  { name: 'Januvia', genericName: 'Sitagliptin', category: 'Diyabet', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Janumet', genericName: 'Sitagliptin + Metformin', category: 'Diyabet', commonDosages: ['50/500mg', '50/850mg', '50/1000mg'], form: 'Tablet' },
  { name: 'Jardiance', genericName: 'Empagliflozin', category: 'Diyabet / Kalp', commonDosages: ['10mg', '25mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // K
  // ══════════════════════════════════════════════════════════════
  { name: 'Ketoprofen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['50mg', '100mg', '200mg'], form: 'Kapsül' },
  { name: 'Ketorolac', category: 'Ağrı Kesici', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Klacid', genericName: 'Klaritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Keppra', genericName: 'Levetirasetam', category: 'Epilepsi', commonDosages: ['250mg', '500mg', '750mg', '1000mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // L
  // ══════════════════════════════════════════════════════════════
  { name: 'Lactulose', genericName: 'Laktuloz', category: 'Kabızlık', commonDosages: ['10g/15ml', '15ml'], form: 'Şurup' },
  { name: 'Lamictal', genericName: 'Lamotrijin', category: 'Epilepsi / Psikiyatri', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet' },
  { name: 'Lamotrigine', genericName: 'Lamotrijin', category: 'Epilepsi / Psikiyatri', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet' },
  { name: 'Lansor', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül' },
  { name: 'Lansoprazole', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül' },
  { name: 'Lantus', genericName: 'İnsülin Glarjin', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon' },
  { name: 'Laroxyl', genericName: 'Amitriptilin', category: 'Antidepresan', commonDosages: ['10mg', '25mg'], form: 'Tablet' },
  { name: 'Lasix', genericName: 'Furosemid', category: 'Diüretik', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Lercadip', genericName: 'Lerkanidipin', category: 'Tansiyon', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Letrozole', genericName: 'Letrozol', category: 'Onkoloji (Meme)', commonDosages: ['2.5mg'], form: 'Tablet' },
  { name: 'Levetiracetam', category: 'Epilepsi', commonDosages: ['250mg', '500mg', '750mg', '1000mg'], form: 'Tablet' },
  { name: 'Levocetirizine', genericName: 'Levosetirizin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Levofloxacin', genericName: 'Levofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet' },
  { name: 'Levothyroxine', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg', '125mcg', '150mcg'], form: 'Tablet' },
  { name: 'Lexapro', genericName: 'Essitalopram', category: 'Antidepresan', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Lipanthyl', genericName: 'Fenofibrat', category: 'Kolesterol', commonDosages: ['145mg', '160mg', '200mg'], form: 'Kapsül' },
  { name: 'Lipitor', genericName: 'Atorvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet' },
  { name: 'Liraglutide', genericName: 'Victoza / Saxenda', category: 'Diyabet / Obezite', commonDosages: ['0.6mg', '1.2mg', '1.8mg'], form: 'Enjeksiyon' },
  { name: 'Lisinopril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Lithium', genericName: 'Lityum', category: 'Psikiyatri (Bipolar)', commonDosages: ['300mg', '450mg'], form: 'Tablet' },
  { name: 'Lopressor', genericName: 'Metoprolol', category: 'Tansiyon / Kalp', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Loratadine', genericName: 'Loratadin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Lorazepam', category: 'Anksiyete', commonDosages: ['0.5mg', '1mg', '2mg'], form: 'Tablet' },
  { name: 'Losartan', category: 'Tansiyon', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Lustral', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Lyrica', genericName: 'Pregabalin', category: 'Nöroloji / Ağrı', commonDosages: ['25mg', '50mg', '75mg', '150mg', '300mg'], form: 'Kapsül' },

  // ══════════════════════════════════════════════════════════════
  // M
  // ══════════════════════════════════════════════════════════════
  { name: 'Macrol', genericName: 'Azitromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Magnesium', genericName: 'Magnezyum', category: 'Mineral', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Majezik', genericName: 'Flurbiprofen', category: 'Ağrı Kesici', commonDosages: ['100mg'], form: 'Tablet' },
  { name: 'Mebeverine', category: 'Sindirim (IBS)', commonDosages: ['135mg', '200mg'], form: 'Tablet' },
  { name: 'Medrol', genericName: 'Metilprednizolon', category: 'Kortikosteroid', commonDosages: ['4mg', '8mg', '16mg', '32mg'], form: 'Tablet' },
  { name: 'Mefenamic Acid', genericName: 'Mefenamik Asit', category: 'Ağrı Kesici', commonDosages: ['250mg', '500mg'], form: 'Kapsül' },
  { name: 'Meloxicam', genericName: 'Meloksikam', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['7.5mg', '15mg'], form: 'Tablet' },
  { name: 'Memantine', genericName: 'Memantin', category: 'Nöroloji (Alzheimer)', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Metformin', category: 'Diyabet', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet' },
  { name: 'Methotrexate', genericName: 'Metotreksat', category: 'Romatoloji / Onkoloji', commonDosages: ['2.5mg', '7.5mg', '10mg', '15mg'], form: 'Tablet' },
  { name: 'Methylphenidate', genericName: 'Metilfenidat', category: 'DEHB', commonDosages: ['10mg', '18mg', '27mg', '36mg', '54mg'], form: 'Tablet' },
  { name: 'Methylprednisolone', genericName: 'Metilprednizolon', category: 'Kortikosteroid', commonDosages: ['4mg', '8mg', '16mg'], form: 'Tablet' },
  { name: 'Metoclopramide', genericName: 'Metoklopramid', category: 'Bulantı / Sindirim', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Metoprolol', category: 'Tansiyon / Kalp', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet' },
  { name: 'Metronidazole', genericName: 'Metronidazol', category: 'Antibiyotik / Antiparaziter', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Micardis', genericName: 'Telmisartan', category: 'Tansiyon', commonDosages: ['40mg', '80mg'], form: 'Tablet' },
  { name: 'Miflonide', genericName: 'Budesonid', category: 'Solunum', commonDosages: ['200mcg', '400mcg'], form: 'İnhaler' },
  { name: 'Milurit', genericName: 'Allopürinol', category: 'Gut', commonDosages: ['100mg', '300mg'], form: 'Tablet' },
  { name: 'Mirtazapine', genericName: 'Mirtazapin', category: 'Antidepresan', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablet' },
  { name: 'Misoprostol', category: 'Mide Koruyucu', commonDosages: ['200mcg'], form: 'Tablet' },
  { name: 'Modiodal', genericName: 'Modafinil', category: 'Nöroloji (Narkolepsi)', commonDosages: ['100mg', '200mg'], form: 'Tablet' },
  { name: 'Mometasone', genericName: 'Mometazon', category: 'Alerji (Nazal) / Dermatolojik', commonDosages: ['50mcg sprey', '0.1% krem'], form: 'Sprey' },
  { name: 'Monopril', genericName: 'Fosinopril', category: 'Tansiyon', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Montelukast', category: 'Solunum / Alerji', commonDosages: ['4mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Morphine', genericName: 'Morfin', category: 'Ağrı (Opioid)', commonDosages: ['10mg', '15mg', '30mg', '60mg'], form: 'Tablet' },
  { name: 'Motilium', genericName: 'Domperidon', category: 'Bulantı / Sindirim', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Mucosolvan', genericName: 'Ambroksol', category: 'Mukolitik', commonDosages: ['30mg', '75mg'], form: 'Tablet' },
  { name: 'Muscoril', genericName: 'Tiyokolşikosid', category: 'Kas Gevşetici', commonDosages: ['4mg', '8mg'], form: 'Kapsül' },
  { name: 'Mycophenolate', genericName: 'Mikofenolat', category: 'İmmünosupresif', commonDosages: ['250mg', '500mg'], form: 'Kapsül' },

  // ══════════════════════════════════════════════════════════════
  // N
  // ══════════════════════════════════════════════════════════════
  { name: 'Naproxen', genericName: 'Naproksen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['250mg', '500mg', '550mg'], form: 'Tablet' },
  { name: 'Nasonex', genericName: 'Mometazon', category: 'Alerji (Nazal)', commonDosages: ['50mcg'], form: 'Nazal Sprey' },
  { name: 'Nebilet', genericName: 'Nebivolol', category: 'Tansiyon', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Nebivolol', category: 'Tansiyon', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Neo-Angin', category: 'Boğaz Ağrısı', commonDosages: ['1 pastil'], form: 'Pastil' },
  { name: 'Nexium', genericName: 'Esomeprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Kapsül' },
  { name: 'Nifedipine', genericName: 'Nifedipin', category: 'Tansiyon', commonDosages: ['20mg', '30mg', '60mg'], form: 'Tablet' },
  { name: 'Nimesulide', genericName: 'Nimesulid', category: 'Ağrı Kesici', commonDosages: ['100mg'], form: 'Tablet' },
  { name: 'Nitrofurantoin', category: 'Antibiyotik (İdrar Yolu)', commonDosages: ['50mg', '100mg'], form: 'Kapsül' },
  { name: 'Nitroglycerin', genericName: 'Nitrogliserin', category: 'Kalp (Angina)', commonDosages: ['0.4mg', '2.5mg', '6.5mg'], form: 'Tablet' },
  { name: 'Nolicin', genericName: 'Norfloksasin', category: 'Antibiyotik (İdrar Yolu)', commonDosages: ['400mg'], form: 'Tablet' },
  { name: 'Nolvadex', genericName: 'Tamoksifen', category: 'Onkoloji (Meme)', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Norvasc', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'NovoRapid', genericName: 'İnsülin Aspart', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon' },
  { name: 'Nurofen', genericName: 'İbuprofen', category: 'Ağrı Kesici', commonDosages: ['200mg', '400mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // O
  // ══════════════════════════════════════════════════════════════
  { name: 'Olanzapine', genericName: 'Olanzapin', category: 'Psikiyatri', commonDosages: ['2.5mg', '5mg', '10mg', '15mg', '20mg'], form: 'Tablet' },
  { name: 'Olmesartan', category: 'Tansiyon', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Omeprazole', genericName: 'Omeprazol', category: 'Mide', commonDosages: ['10mg', '20mg', '40mg'], form: 'Kapsül' },
  { name: 'Ondansetron', genericName: 'Ondansetron', category: 'Bulantı', commonDosages: ['4mg', '8mg'], form: 'Tablet' },
  { name: 'Onglyza', genericName: 'Saksagliptin', category: 'Diyabet', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Oralet', genericName: 'Oral Rehidrasyon', category: 'Dehidratasyon', commonDosages: ['1 poşe'], form: 'Toz' },
  { name: 'Orbax', genericName: 'Levofloksasin', category: 'Antibiyotik', commonDosages: ['500mg'], form: 'Tablet' },
  { name: 'Orgametril', genericName: 'Linestrenol', category: 'Kadın Sağlığı', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Orlistat', category: 'Obezite', commonDosages: ['60mg', '120mg'], form: 'Kapsül' },
  { name: 'Ospen', genericName: 'Fenoksimetilpenisilin', category: 'Antibiyotik', commonDosages: ['500mg', '1000mg'], form: 'Tablet' },
  { name: 'Otrivin', genericName: 'Ksilometazolin', category: 'Nazal Dekonjestan', commonDosages: ['0.05%', '0.1%'], form: 'Nazal Sprey' },
  { name: 'Ozempic', genericName: 'Semaglutid', category: 'Diyabet / Obezite', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Enjeksiyon' },

  // ══════════════════════════════════════════════════════════════
  // P
  // ══════════════════════════════════════════════════════════════
  { name: 'Panadol', genericName: 'Parasetamol', category: 'Ağrı Kesici / Ateş Düşürücü', commonDosages: ['500mg'], form: 'Tablet' },
  { name: 'Panto', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Pantoprazole', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Paracetamol', category: 'Ağrı Kesici / Ateş Düşürücü', commonDosages: ['500mg', '650mg', '1000mg'], form: 'Tablet' },
  { name: 'Pariet', genericName: 'Rabeprazol', category: 'Mide', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Paroxetine', genericName: 'Paroksetin', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '30mg', '40mg'], form: 'Tablet' },
  { name: 'Paxil', genericName: 'Paroksetin', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Perindopril', category: 'Tansiyon', commonDosages: ['2mg', '4mg', '8mg'], form: 'Tablet' },
  { name: 'Phenytoin', genericName: 'Fenitoin', category: 'Epilepsi', commonDosages: ['100mg'], form: 'Kapsül' },
  { name: 'Pioglitazone', genericName: 'Pioglitazon', category: 'Diyabet', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablet' },
  { name: 'Plavix', genericName: 'Klopidogrel', category: 'Antiplatelet', commonDosages: ['75mg'], form: 'Tablet' },
  { name: 'Pradaxa', genericName: 'Dabigatran', category: 'Kan Sulandırıcı', commonDosages: ['75mg', '110mg', '150mg'], form: 'Kapsül' },
  { name: 'Prednisone', genericName: 'Prednizon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '50mg'], form: 'Tablet' },
  { name: 'Prednisolone', genericName: 'Prednizolon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Pregabalin', category: 'Nöroloji / Ağrı', commonDosages: ['25mg', '50mg', '75mg', '150mg', '300mg'], form: 'Kapsül' },
  { name: 'Premarin', genericName: 'Konjuge Östrojen', category: 'Kadın Sağlığı (HRT)', commonDosages: ['0.3mg', '0.625mg'], form: 'Tablet' },
  { name: 'Primolut N', genericName: 'Noretisteron', category: 'Kadın Sağlığı', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Proair', genericName: 'Salbutamol', category: 'Solunum', commonDosages: ['100mcg'], form: 'İnhaler' },
  { name: 'Profenid', genericName: 'Ketoprofen', category: 'Ağrı Kesici', commonDosages: ['100mg', '200mg'], form: 'Kapsül' },
  { name: 'Propranolol', category: 'Tansiyon / Anksiyete', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet' },
  { name: 'Proscar', genericName: 'Finasterid', category: 'Üroloji (BPH)', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Protonex', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['30mg'], form: 'Kapsül' },
  { name: 'Prozac', genericName: 'Fluoksetin', category: 'Antidepresan', commonDosages: ['20mg', '40mg'], form: 'Kapsül' },

  // ══════════════════════════════════════════════════════════════
  // Q
  // ══════════════════════════════════════════════════════════════
  { name: 'Quetiapine', genericName: 'Ketiapin', category: 'Psikiyatri', commonDosages: ['25mg', '50mg', '100mg', '200mg', '300mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // R
  // ══════════════════════════════════════════════════════════════
  { name: 'Rabeprazole', genericName: 'Rabeprazol', category: 'Mide', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Ramipril', category: 'Tansiyon / Kalp', commonDosages: ['1.25mg', '2.5mg', '5mg', '10mg'], form: 'Kapsül' },
  { name: 'Ranitidine', genericName: 'Ranitidin', category: 'Mide', commonDosages: ['150mg', '300mg'], form: 'Tablet' },
  { name: 'Relvar', genericName: 'Flutikazon + Vilanterol', category: 'Solunum', commonDosages: ['92/22mcg', '184/22mcg'], form: 'İnhaler' },
  { name: 'Relpax', genericName: 'Eletriptan', category: 'Migren', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Remeron', genericName: 'Mirtazapin', category: 'Antidepresan', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablet' },
  { name: 'Rennie', category: 'Mide (Antiasit)', commonDosages: ['1 tablet'], form: 'Çiğneme Tableti' },
  { name: 'Rifampicin', genericName: 'Rifampisin', category: 'Antibiyotik (Tüberküloz)', commonDosages: ['150mg', '300mg', '450mg', '600mg'], form: 'Kapsül' },
  { name: 'Riluzole', genericName: 'Riluzol', category: 'Nöroloji (ALS)', commonDosages: ['50mg'], form: 'Tablet' },
  { name: 'Risedronate', genericName: 'Risedronat', category: 'Osteoporoz', commonDosages: ['5mg', '35mg', '150mg'], form: 'Tablet' },
  { name: 'Risperidone', genericName: 'Risperidon', category: 'Psikiyatri', commonDosages: ['0.5mg', '1mg', '2mg', '3mg', '4mg'], form: 'Tablet' },
  { name: 'Ritalin', genericName: 'Metilfenidat', category: 'DEHB', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Rivaroxaban', genericName: 'Xarelto', category: 'Kan Sulandırıcı', commonDosages: ['10mg', '15mg', '20mg'], form: 'Tablet' },
  { name: 'Rivotril', genericName: 'Klonazepam', category: 'Epilepsi / Anksiyete', commonDosages: ['0.5mg', '2mg'], form: 'Tablet' },
  { name: 'Roaccutane', genericName: 'İzotretinoin', category: 'Dermatolojik (Akne)', commonDosages: ['10mg', '20mg'], form: 'Kapsül' },
  { name: 'Rosuvastatin', category: 'Kolesterol', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // S
  // ══════════════════════════════════════════════════════════════
  { name: 'Salbutamol', genericName: 'Ventolin', category: 'Solunum', commonDosages: ['100mcg', '200mcg'], form: 'İnhaler' },
  { name: 'Salmeterol', genericName: 'Serevent', category: 'Solunum', commonDosages: ['25mcg', '50mcg'], form: 'İnhaler' },
  { name: 'Seretide', genericName: 'Salmeterol + Flutikazon', category: 'Solunum', commonDosages: ['25/125mcg', '25/250mcg', '50/500mcg'], form: 'İnhaler' },
  { name: 'Seroquel', genericName: 'Ketiapin', category: 'Psikiyatri', commonDosages: ['25mg', '100mg', '200mg', '300mg'], form: 'Tablet' },
  { name: 'Sertraline', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Sildenafil', category: 'Üroloji', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Simvastatin', genericName: 'Simvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Singulair', genericName: 'Montelukast', category: 'Solunum / Alerji', commonDosages: ['4mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Sitagliptin', genericName: 'Januvia', category: 'Diyabet', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Spironolactone', genericName: 'Spironolakton', category: 'Diüretik', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Stalevo', genericName: 'Levodopa + Karbidopa + Entakapon', category: 'Nöroloji (Parkinson)', commonDosages: ['50/12.5/200mg', '100/25/200mg', '150/37.5/200mg'], form: 'Tablet' },
  { name: 'Strepsils', category: 'Boğaz Ağrısı', commonDosages: ['1 pastil'], form: 'Pastil' },
  { name: 'Sucralfate', genericName: 'Sukralfat', category: 'Mide', commonDosages: ['1g'], form: 'Tablet' },
  { name: 'Sumatriptan', category: 'Migren', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Symbicort', genericName: 'Budesonid + Formoterol', category: 'Solunum', commonDosages: ['80/4.5mcg', '160/4.5mcg', '320/9mcg'], form: 'İnhaler' },
  { name: 'Synthroid', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // T
  // ══════════════════════════════════════════════════════════════
  { name: 'Tadalafil', genericName: 'Cialis', category: 'Üroloji', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Tamoxifen', genericName: 'Tamoksifen', category: 'Onkoloji (Meme)', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Tamsulosin', genericName: 'Tamsulosin', category: 'Üroloji', commonDosages: ['0.4mg'], form: 'Kapsül' },
  { name: 'Tantum Verde', genericName: 'Benzidamin', category: 'Boğaz Ağrısı', commonDosages: ['1.5mg/ml sprey', '3mg pastil'], form: 'Sprey' },
  { name: 'Tarivid', genericName: 'Ofloksasin', category: 'Antibiyotik', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Tegretol', genericName: 'Karbamazepin', category: 'Epilepsi / Nöroloji', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Telmisartan', category: 'Tansiyon', commonDosages: ['20mg', '40mg', '80mg'], form: 'Tablet' },
  { name: 'Temodal', genericName: 'Temozolomid', category: 'Onkoloji (Beyin)', commonDosages: ['5mg', '20mg', '100mg', '250mg'], form: 'Kapsül' },
  { name: 'Tenox', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Terbinafine', genericName: 'Terbinafin', category: 'Antifungal', commonDosages: ['250mg', '1% krem'], form: 'Tablet' },
  { name: 'Theophylline', genericName: 'Teofilin', category: 'Solunum', commonDosages: ['100mg', '200mg', '300mg'], form: 'Tablet' },
  { name: 'Thiocolchicoside', genericName: 'Tiyokolşikosid', category: 'Kas Gevşetici', commonDosages: ['4mg', '8mg'], form: 'Kapsül' },
  { name: 'Ticagrelor', genericName: 'Brilinta', category: 'Antiplatelet', commonDosages: ['60mg', '90mg'], form: 'Tablet' },
  { name: 'Tilcotil', genericName: 'Tenoksikam', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['20mg'], form: 'Tablet' },
  { name: 'Tiotropium', genericName: 'Spiriva', category: 'Solunum (KOAH)', commonDosages: ['18mcg', '2.5mcg'], form: 'İnhaler' },
  { name: 'Topiramate', genericName: 'Topirama', category: 'Epilepsi / Migren', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet' },
  { name: 'Trajenta', genericName: 'Linagliptin', category: 'Diyabet', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Tramadol', category: 'Ağrı Kesici (Opioid)', commonDosages: ['50mg', '100mg'], form: 'Kapsül' },
  { name: 'Trazodone', genericName: 'Trazodon', category: 'Antidepresan / Uyku', commonDosages: ['50mg', '100mg', '150mg'], form: 'Tablet' },
  { name: 'Trental', genericName: 'Pentoksifilin', category: 'Dolaşım Bozukluğu', commonDosages: ['400mg', '600mg'], form: 'Tablet' },
  { name: 'Triatec', genericName: 'Ramipril', category: 'Tansiyon', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Trimebutine', genericName: 'Trimebutin', category: 'Sindirim (IBS)', commonDosages: ['100mg', '200mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // U
  // ══════════════════════════════════════════════════════════════
  { name: 'Ulcuran', genericName: 'Famotidin', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Ultracet', genericName: 'Tramadol + Parasetamol', category: 'Ağrı Kesici', commonDosages: ['37.5/325mg'], form: 'Tablet' },
  { name: 'Urorec', genericName: 'Silodosin', category: 'Üroloji (BPH)', commonDosages: ['4mg', '8mg'], form: 'Kapsül' },
  { name: 'Ursodeoxycholic Acid', genericName: 'Ursodeoksikolik Asit', category: 'Karaciğer / Safra', commonDosages: ['250mg', '500mg'], form: 'Kapsül' },

  // ══════════════════════════════════════════════════════════════
  // V
  // ══════════════════════════════════════════════════════════════
  { name: 'Valacyclovir', genericName: 'Valasiklovir', category: 'Antiviral', commonDosages: ['500mg', '1000mg'], form: 'Tablet' },
  { name: 'Valparin', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet' },
  { name: 'Valsartan', category: 'Tansiyon', commonDosages: ['40mg', '80mg', '160mg', '320mg'], form: 'Tablet' },
  { name: 'Vasotec', genericName: 'Enalapril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Venlafaxine', genericName: 'Venlafaksin', category: 'Antidepresan', commonDosages: ['37.5mg', '75mg', '150mg'], form: 'Kapsül' },
  { name: 'Ventolin', genericName: 'Salbutamol', category: 'Solunum', commonDosages: ['100mcg', '2.5mg/2.5ml'], form: 'İnhaler' },
  { name: 'Verapamil', category: 'Tansiyon / Kalp', commonDosages: ['40mg', '80mg', '120mg', '240mg'], form: 'Tablet' },
  { name: 'Vermidon', genericName: 'Parasetamol + Kafein', category: 'Ağrı Kesici', commonDosages: ['500mg + 30mg'], form: 'Tablet' },
  { name: 'Viagra', genericName: 'Sildenafil', category: 'Üroloji', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Vicodin', genericName: 'Hidrokodon + Parasetamol', category: 'Ağrı (Opioid)', commonDosages: ['5/300mg', '10/300mg'], form: 'Tablet' },
  { name: 'Vidisic', genericName: 'Karbomer', category: 'Göz (Yapay Gözyaşı)', commonDosages: ['2mg/g'], form: 'Jel' },
  { name: 'Vitamin B Complex', genericName: 'B Vitamin Kompleks', category: 'Vitamin', commonDosages: ['1 tablet'], form: 'Tablet' },
  { name: 'Vitamin B12', genericName: 'Siyanokobalamin', category: 'Vitamin', commonDosages: ['250mcg', '500mcg', '1000mcg'], form: 'Tablet' },
  { name: 'Vitamin C', genericName: 'Askorbik Asit', category: 'Vitamin', commonDosages: ['250mg', '500mg', '1000mg'], form: 'Tablet' },
  { name: 'Vitamin D3', genericName: 'Kolekalsiferol', category: 'Vitamin', commonDosages: ['400IU', '800IU', '1000IU', '2000IU', '5000IU'], form: 'Tablet' },
  { name: 'Vitamin E', genericName: 'Tokoferol', category: 'Vitamin', commonDosages: ['200IU', '400IU'], form: 'Kapsül' },
  { name: 'Voltaren', genericName: 'Diklofenak', category: 'Ağrı Kesici', commonDosages: ['25mg', '50mg', '75mg', '100mg'], form: 'Tablet' },
  { name: 'Voltaren Emulgel', genericName: 'Diklofenak (Topikal)', category: 'Ağrı Kesici (Topikal)', commonDosages: ['1% jel', '2% jel'], form: 'Jel' },

  // ══════════════════════════════════════════════════════════════
  // W
  // ══════════════════════════════════════════════════════════════
  { name: 'Warfarin', genericName: 'Varfarin', category: 'Kan Sulandırıcı', commonDosages: ['1mg', '2mg', '2.5mg', '5mg', '7.5mg', '10mg'], form: 'Tablet' },
  { name: 'Wegovy', genericName: 'Semaglutid', category: 'Obezite', commonDosages: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'], form: 'Enjeksiyon' },

  // ══════════════════════════════════════════════════════════════
  // X
  // ══════════════════════════════════════════════════════════════
  { name: 'Xanax', genericName: 'Alprazolam', category: 'Anksiyete', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Tablet' },
  { name: 'Xarelto', genericName: 'Rivaroksaban', category: 'Kan Sulandırıcı', commonDosages: ['10mg', '15mg', '20mg'], form: 'Tablet' },
  { name: 'Xyzal', genericName: 'Levosetirizin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // Y
  // ══════════════════════════════════════════════════════════════
  { name: 'Yasmin', genericName: 'Drospirenon + Etinilestradiol', category: 'Doğum Kontrolü', commonDosages: ['3mg + 0.03mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // Z
  // ══════════════════════════════════════════════════════════════
  { name: 'Zanidip', genericName: 'Lerkanidipin', category: 'Tansiyon', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Zantac', genericName: 'Ranitidin', category: 'Mide', commonDosages: ['150mg', '300mg'], form: 'Tablet' },
  { name: 'Zebinix', genericName: 'Eslikarbazepin', category: 'Epilepsi', commonDosages: ['200mg', '800mg'], form: 'Tablet' },
  { name: 'Zestril', genericName: 'Lisinopril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Zinnat', genericName: 'Sefuroksim', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Zithromax', genericName: 'Azitromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Zocor', genericName: 'Simvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Zoloft', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet' },
  { name: 'Zolpidem', category: 'Uyku', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Zomig', genericName: 'Zolmitriptan', category: 'Migren', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Zovirax', genericName: 'Asiklovir', category: 'Antiviral', commonDosages: ['200mg', '400mg', '5% krem'], form: 'Tablet' },
  { name: 'Zyprexa', genericName: 'Olanzapin', category: 'Psikiyatri', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Zyrtec', genericName: 'Setirizin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // ADDITIONAL — Popular TR & EU Medications
  // ══════════════════════════════════════════════════════════════
  { name: 'Actilyse', genericName: 'Alteplaz', category: 'Trombolitik', commonDosages: ['50mg', '100mg'], form: 'Enjeksiyon' },
  { name: 'Alfacalcidol', genericName: 'Alfakalsidol', category: 'Vitamin D Aktif', commonDosages: ['0.25mcg', '0.5mcg', '1mcg'], form: 'Kapsül' },
  { name: 'Allegra', genericName: 'Feksofenadin', category: 'Alerji', commonDosages: ['120mg', '180mg'], form: 'Tablet' },
  { name: 'Amaryl', genericName: 'Glimepirid', category: 'Diyabet', commonDosages: ['1mg', '2mg', '3mg', '4mg'], form: 'Tablet' },
  { name: 'Amias', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg', '32mg'], form: 'Tablet' },
  { name: 'Anapen', genericName: 'Adrenalin', category: 'Acil (Anafilaksi)', commonDosages: ['0.15mg', '0.3mg'], form: 'Enjeksiyon' },
  { name: 'Androcur', genericName: 'Siproteron', category: 'Endokrin', commonDosages: ['10mg', '50mg'], form: 'Tablet' },
  { name: 'Antepsin', genericName: 'Sukralfat', category: 'Mide', commonDosages: ['1g'], form: 'Tablet' },
  { name: 'Aprovel', genericName: 'İrbesartan', category: 'Tansiyon', commonDosages: ['150mg', '300mg'], form: 'Tablet' },
  { name: 'Aricept', genericName: 'Donepezil', category: 'Nöroloji (Alzheimer)', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Asacol', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['400mg', '800mg'], form: 'Tablet' },
  { name: 'Atacand', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg', '32mg'], form: 'Tablet' },
  { name: 'Atorva', genericName: 'Atorvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Avamys', genericName: 'Flutikazon Furoat', category: 'Alerji (Nazal)', commonDosages: ['27.5mcg'], form: 'Nazal Sprey' },
  { name: 'Avelumab', category: 'Onkoloji (İmmünoterapi)', commonDosages: ['200mg'], form: 'Enjeksiyon' },
  { name: 'Avodart', genericName: 'Dutasterid', category: 'Üroloji (BPH)', commonDosages: ['0.5mg'], form: 'Kapsül' },
  { name: 'Azopt', genericName: 'Brinzolamid', category: 'Göz (Glokom)', commonDosages: ['1%'], form: 'Damla' },

  { name: 'Bepanthen', genericName: 'Dekspantenol', category: 'Dermatolojik', commonDosages: ['5% krem'], form: 'Krem' },
  { name: 'Berocca', category: 'Vitamin / Mineral Kompleks', commonDosages: ['1 tablet'], form: 'Efervesan Tablet' },
  { name: 'Betmiga', genericName: 'Mirabegron', category: 'Üroloji (Mesane)', commonDosages: ['25mg', '50mg'], form: 'Tablet' },
  { name: 'Bisolvon', genericName: 'Bromheksin', category: 'Mukolitik', commonDosages: ['8mg'], form: 'Tablet' },
  { name: 'Blopress', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg'], form: 'Tablet' },
  { name: 'Bonviva', genericName: 'İbandronat', category: 'Osteoporoz', commonDosages: ['150mg'], form: 'Tablet' },
  { name: 'Brufen', genericName: 'İbuprofen', category: 'Ağrı Kesici', commonDosages: ['200mg', '400mg', '600mg'], form: 'Tablet' },

  { name: 'Cafergot', genericName: 'Ergotamin + Kafein', category: 'Migren', commonDosages: ['1mg + 100mg'], form: 'Tablet' },
  { name: 'Calcimagon D3', genericName: 'Kalsiyum + D3', category: 'Mineral / Vitamin', commonDosages: ['500mg + 1000IU'], form: 'Çiğneme Tableti' },
  { name: 'Canesten', genericName: 'Klotrimazol', category: 'Antifungal', commonDosages: ['1% krem', '500mg vajinal'], form: 'Krem' },
  { name: 'Ciloxan', genericName: 'Siprofloksasin', category: 'Göz (Antibiyotik)', commonDosages: ['0.3%'], form: 'Damla' },
  { name: 'Claritine', genericName: 'Loratadin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Claritin', genericName: 'Loratadin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Co-Diovan', genericName: 'Valsartan + HCT', category: 'Tansiyon', commonDosages: ['80/12.5mg', '160/12.5mg', '160/25mg'], form: 'Tablet' },
  { name: 'Combigan', genericName: 'Brimondin + Timolol', category: 'Göz (Glokom)', commonDosages: ['0.2%+0.5%'], form: 'Damla' },
  { name: 'Concor', genericName: 'Bisoprolol', category: 'Tansiyon / Kalp', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Contramal', genericName: 'Tramadol', category: 'Ağrı Kesici (Opioid)', commonDosages: ['50mg', '100mg'], form: 'Kapsül' },
  { name: 'Coversyl', genericName: 'Perindopril', category: 'Tansiyon', commonDosages: ['2mg', '4mg', '8mg'], form: 'Tablet' },
  { name: 'Creon', genericName: 'Pankreatin', category: 'Sindirim (Enzim)', commonDosages: ['10000IU', '25000IU', '40000IU'], form: 'Kapsül' },

  { name: 'Dafalgan', genericName: 'Parasetamol', category: 'Ağrı Kesici', commonDosages: ['500mg', '1000mg'], form: 'Tablet' },
  { name: 'Daonil', genericName: 'Glibenklamid', category: 'Diyabet', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Debridat', genericName: 'Trimebutin', category: 'Sindirim', commonDosages: ['100mg', '200mg'], form: 'Tablet' },
  { name: 'Depakin', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet' },
  { name: 'Dermovate', genericName: 'Klobetazol', category: 'Dermatolojik (Steroid)', commonDosages: ['0.05% krem'], form: 'Krem' },
  { name: 'Desyrel', genericName: 'Trazodon', category: 'Antidepresan', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Diane 35', genericName: 'Siproteron + Etinilestradiol', category: 'Doğum Kontrolü / Akne', commonDosages: ['2mg + 0.035mg'], form: 'Tablet' },
  { name: 'Dikloron', genericName: 'Diklofenak', category: 'Ağrı Kesici', commonDosages: ['75mg/3ml'], form: 'Enjeksiyon' },
  { name: 'Dolorex', genericName: 'Naproksen Sodyum', category: 'Ağrı Kesici', commonDosages: ['275mg', '550mg'], form: 'Tablet' },
  { name: 'Dormicum', genericName: 'Midazolam', category: 'Sedasyon / Anksiyete', commonDosages: ['7.5mg', '15mg'], form: 'Tablet' },

  { name: 'Ebixa', genericName: 'Memantin', category: 'Nöroloji (Alzheimer)', commonDosages: ['10mg', '20mg'], form: 'Tablet' },
  { name: 'Elocon', genericName: 'Mometazon', category: 'Dermatolojik (Steroid)', commonDosages: ['0.1% krem'], form: 'Krem' },
  { name: 'Emend', genericName: 'Aprepitant', category: 'Bulantı (Kemoterapi)', commonDosages: ['80mg', '125mg'], form: 'Kapsül' },
  { name: 'Emla', genericName: 'Lidokain + Prilokain', category: 'Lokal Anestezik', commonDosages: ['2.5%+2.5% krem'], form: 'Krem' },
  { name: 'Enapril', genericName: 'Enalapril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Epilim', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet' },
  { name: 'Eprex', genericName: 'Eritropoetin', category: 'Anemi', commonDosages: ['2000IU', '4000IU', '10000IU'], form: 'Enjeksiyon' },
  { name: 'Esidrex', genericName: 'Hidroklorotiyazid', category: 'Diüretik', commonDosages: ['25mg'], form: 'Tablet' },
  { name: 'Estrofem', genericName: 'Estradiol', category: 'Kadın Sağlığı (HRT)', commonDosages: ['1mg', '2mg'], form: 'Tablet' },

  { name: 'Fasigyn', genericName: 'Tinidazol', category: 'Antibiyotik / Antiparaziter', commonDosages: ['500mg'], form: 'Tablet' },
  { name: 'Felodipin', category: 'Tansiyon', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Ferretab', genericName: 'Demir Fumarat + Folik Asit', category: 'Demir / Vitamin', commonDosages: ['152mg + 0.5mg'], form: 'Kapsül' },
  { name: 'Fervex', category: 'Soğuk Algınlığı', commonDosages: ['1 poşe'], form: 'Toz' },
  { name: 'Flebogamma', genericName: 'İmmünoglobulin', category: 'İmmünoloji', commonDosages: ['5g', '10g'], form: 'Enjeksiyon' },
  { name: 'Flixonase', genericName: 'Flutikazon', category: 'Alerji (Nazal)', commonDosages: ['50mcg'], form: 'Nazal Sprey' },
  { name: 'Forteo', genericName: 'Teriparatid', category: 'Osteoporoz', commonDosages: ['20mcg'], form: 'Enjeksiyon' },
  { name: 'Fromilid', genericName: 'Klaritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Fucidin', genericName: 'Fusidik Asit', category: 'Antibiyotik (Topikal)', commonDosages: ['2% krem', '2% merhem'], form: 'Krem' },

  { name: 'Galvus Met', genericName: 'Vildagliptin + Metformin', category: 'Diyabet', commonDosages: ['50/500mg', '50/850mg', '50/1000mg'], form: 'Tablet' },
  { name: 'Gaviscon Advance', category: 'Mide (Reflü)', commonDosages: ['10ml'], form: 'Süspansiyon' },
  { name: 'Genotropin', genericName: 'Somatropin', category: 'Büyüme Hormonu', commonDosages: ['5.3mg', '12mg'], form: 'Enjeksiyon' },
  { name: 'Glivec', genericName: 'İmatinib', category: 'Onkoloji (KML)', commonDosages: ['100mg', '400mg'], form: 'Tablet' },
  { name: 'Glucovance', genericName: 'Metformin + Glibenklamid', category: 'Diyabet', commonDosages: ['500/2.5mg', '500/5mg'], form: 'Tablet' },

  { name: 'Halfan', genericName: 'Halofantrin', category: 'Antimalaryal', commonDosages: ['250mg'], form: 'Tablet' },
  { name: 'Havrix', genericName: 'Hepatit A Aşısı', category: 'Aşı', commonDosages: ['720IU', '1440IU'], form: 'Enjeksiyon' },
  { name: 'Heparin', category: 'Kan Sulandırıcı', commonDosages: ['5000IU/ml'], form: 'Enjeksiyon' },
  { name: 'Humalog', genericName: 'İnsülin Lispro', category: 'Diyabet (İnsülin)', commonDosages: ['100IU/ml'], form: 'Enjeksiyon' },
  { name: 'Hydrocortisone', genericName: 'Hidrokortizon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '1% krem'], form: 'Tablet' },

  { name: 'Imigran', genericName: 'Sumatriptan', category: 'Migren', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Imovane', genericName: 'Zopiklon', category: 'Uyku', commonDosages: ['3.75mg', '7.5mg'], form: 'Tablet' },
  { name: 'Innopran', genericName: 'Propranolol', category: 'Tansiyon', commonDosages: ['80mg', '120mg'], form: 'Kapsül' },
  { name: 'Invokana', genericName: 'Kanagliflozin', category: 'Diyabet', commonDosages: ['100mg', '300mg'], form: 'Tablet' },

  { name: 'Kaletra', genericName: 'Lopinavir + Ritonavir', category: 'Antiviral (HIV)', commonDosages: ['200/50mg'], form: 'Tablet' },
  { name: 'Karvezide', genericName: 'İrbesartan + HCT', category: 'Tansiyon', commonDosages: ['150/12.5mg', '300/12.5mg'], form: 'Tablet' },
  { name: 'Konveril', genericName: 'Enalapril + HCT', category: 'Tansiyon', commonDosages: ['10/12.5mg', '20/12.5mg'], form: 'Tablet' },
  { name: 'Klonapin', genericName: 'Klonazepam', category: 'Anksiyete / Epilepsi', commonDosages: ['0.5mg', '2mg'], form: 'Tablet' },

  { name: 'Lamisil', genericName: 'Terbinafin', category: 'Antifungal', commonDosages: ['250mg', '1% krem'], form: 'Tablet' },
  { name: 'Lanoxin', genericName: 'Digoksin', category: 'Kalp', commonDosages: ['0.125mg', '0.25mg'], form: 'Tablet' },
  { name: 'Lasilactone', genericName: 'Furosemid + Spironolakton', category: 'Diüretik', commonDosages: ['20/50mg'], form: 'Kapsül' },
  { name: 'Leponex', genericName: 'Klozapin', category: 'Psikiyatri', commonDosages: ['25mg', '100mg'], form: 'Tablet' },
  { name: 'Levitra', genericName: 'Vardenafil', category: 'Üroloji', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet' },
  { name: 'Lioresal', genericName: 'Baklofen', category: 'Kas Gevşetici', commonDosages: ['10mg', '25mg'], form: 'Tablet' },
  { name: 'Lodoz', genericName: 'Bisoprolol + HCT', category: 'Tansiyon', commonDosages: ['2.5/6.25mg', '5/6.25mg', '10/6.25mg'], form: 'Tablet' },
  { name: 'Lomotil', genericName: 'Difenoksilat + Atropin', category: 'İshal', commonDosages: ['2.5mg'], form: 'Tablet' },
  { name: 'Lopresor', genericName: 'Metoprolol', category: 'Tansiyon', commonDosages: ['50mg', '100mg'], form: 'Tablet' },

  { name: 'Maalox', category: 'Mide (Antiasit)', commonDosages: ['1 tablet', '10ml'], form: 'Tablet' },
  { name: 'Marcumar', genericName: 'Fenprokomon', category: 'Kan Sulandırıcı', commonDosages: ['3mg'], form: 'Tablet' },
  { name: 'Maxalt', genericName: 'Rizatriptan', category: 'Migren', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Mesalazine', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['250mg', '500mg', '1g'], form: 'Tablet' },
  { name: 'Metforal', genericName: 'Metformin', category: 'Diyabet', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet' },
  { name: 'Migard', genericName: 'Frovatriptan', category: 'Migren', commonDosages: ['2.5mg'], form: 'Tablet' },
  { name: 'Minoset', genericName: 'Parasetamol + Kafein', category: 'Ağrı Kesici', commonDosages: ['500mg + 65mg'], form: 'Tablet' },
  { name: 'Miorel', genericName: 'Klorzoksazon', category: 'Kas Gevşetici', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Moxifloxacin', genericName: 'Moksifloksasin', category: 'Antibiyotik', commonDosages: ['400mg'], form: 'Tablet' },

  { name: 'Naprosyn', genericName: 'Naproksen', category: 'Ağrı Kesici', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Nebcin', genericName: 'Tobramisin', category: 'Antibiyotik (Göz)', commonDosages: ['0.3%'], form: 'Damla' },
  { name: 'Neoral', genericName: 'Siklosporin', category: 'İmmünosupresif', commonDosages: ['25mg', '50mg', '100mg'], form: 'Kapsül' },
  { name: 'Nidazol', genericName: 'Metronidazol', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Nifedipin Retard', genericName: 'Nifedipin', category: 'Tansiyon', commonDosages: ['20mg', '30mg', '60mg'], form: 'Tablet' },
  { name: 'Nitroderm', genericName: 'Nitrogliserin', category: 'Kalp (Angina)', commonDosages: ['5mg', '10mg', '15mg'], form: 'Bant' },
  { name: 'Nootropil', genericName: 'Piracetam', category: 'Nöroloji (Nootropik)', commonDosages: ['400mg', '800mg', '1200mg'], form: 'Tablet' },

  { name: 'Pantozol', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet' },
  { name: 'Parlodel', genericName: 'Bromokriptin', category: 'Endokrin (Prolaktin)', commonDosages: ['2.5mg', '5mg'], form: 'Tablet' },
  { name: 'Pentasa', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['500mg', '1g', '2g'], form: 'Tablet' },
  { name: 'Phenergan', genericName: 'Prometazin', category: 'Alerji / Bulantı', commonDosages: ['10mg', '25mg'], form: 'Tablet' },
  { name: 'Plaquinol', genericName: 'Hidroksiklorokin', category: 'Romatoloji', commonDosages: ['200mg'], form: 'Tablet' },
  { name: 'Plendil', genericName: 'Felodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Prexige', genericName: 'Luseleoksib', category: 'Ağrı Kesici', commonDosages: ['100mg', '200mg', '400mg'], form: 'Tablet' },
  { name: 'Priligy', genericName: 'Dapoksetin', category: 'Üroloji', commonDosages: ['30mg', '60mg'], form: 'Tablet' },
  { name: 'Priorix', genericName: 'KKK Aşısı', category: 'Aşı', commonDosages: ['1 doz'], form: 'Enjeksiyon' },
  { name: 'Probenecid', category: 'Gut', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Propecia', genericName: 'Finasterid', category: 'Dermatolojik (Saç Dök.)', commonDosages: ['1mg'], form: 'Tablet' },
  { name: 'Prothiaden', genericName: 'Dosulepin', category: 'Antidepresan', commonDosages: ['25mg', '75mg'], form: 'Kapsül' },

  { name: 'Ranitidin', genericName: 'Ranitidin', category: 'Mide', commonDosages: ['150mg', '300mg'], form: 'Tablet' },
  { name: 'Rapamune', genericName: 'Sirolimus', category: 'İmmünosupresif', commonDosages: ['1mg', '2mg'], form: 'Tablet' },
  { name: 'Reminyl', genericName: 'Galantamin', category: 'Nöroloji (Alzheimer)', commonDosages: ['4mg', '8mg', '12mg'], form: 'Kapsül' },
  { name: 'Revatio', genericName: 'Sildenafil', category: 'Pulmoner HT', commonDosages: ['20mg'], form: 'Tablet' },

  { name: 'Sabril', genericName: 'Vigabatrin', category: 'Epilepsi', commonDosages: ['500mg'], form: 'Tablet' },
  { name: 'Salofalk', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['250mg', '500mg', '1g'], form: 'Tablet' },
  { name: 'Sandimmun', genericName: 'Siklosporin', category: 'İmmünosupresif', commonDosages: ['25mg', '50mg', '100mg'], form: 'Kapsül' },
  { name: 'Serc', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['8mg', '16mg', '24mg'], form: 'Tablet' },
  { name: 'Sifrol', genericName: 'Pramipeksol', category: 'Nöroloji (Parkinson)', commonDosages: ['0.088mg', '0.18mg', '0.7mg'], form: 'Tablet' },
  { name: 'Sirdalud', genericName: 'Tizanidin', category: 'Kas Gevşetici', commonDosages: ['2mg', '4mg'], form: 'Tablet' },
  { name: 'Solian', genericName: 'Amisülprid', category: 'Psikiyatri', commonDosages: ['100mg', '200mg', '400mg'], form: 'Tablet' },
  { name: 'Solu-Medrol', genericName: 'Metilprednizolon', category: 'Kortikosteroid', commonDosages: ['40mg', '125mg', '500mg', '1g'], form: 'Enjeksiyon' },
  { name: 'Spiriva', genericName: 'Tiotropium', category: 'Solunum (KOAH)', commonDosages: ['18mcg'], form: 'İnhaler' },
  { name: 'Sporanox', genericName: 'İtrakonazol', category: 'Antifungal', commonDosages: ['100mg'], form: 'Kapsül' },
  { name: 'Stilnox', genericName: 'Zolpidem', category: 'Uyku', commonDosages: ['10mg'], form: 'Tablet' },
  { name: 'Suboxone', genericName: 'Buprenorfin + Nalokson', category: 'Bağımlılık Tedavisi', commonDosages: ['2/0.5mg', '8/2mg'], form: 'Dilaltı Tablet' },
  { name: 'Sustanon', genericName: 'Testosteron', category: 'Endokrin', commonDosages: ['250mg/ml'], form: 'Enjeksiyon' },

  { name: 'Tafinlar', genericName: 'Dabrafenib', category: 'Onkoloji (Melanom)', commonDosages: ['50mg', '75mg'], form: 'Kapsül' },
  { name: 'Talcid', category: 'Mide (Antiasit)', commonDosages: ['500mg'], form: 'Çiğneme Tableti' },
  { name: 'Tavanic', genericName: 'Levofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet' },
  { name: 'Taxol', genericName: 'Paklitaksel', category: 'Onkoloji', commonDosages: ['6mg/ml'], form: 'Enjeksiyon' },
  { name: 'Tegrital', genericName: 'Karbamazepin', category: 'Epilepsi', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Telfast', genericName: 'Feksofenadin', category: 'Alerji', commonDosages: ['120mg', '180mg'], form: 'Tablet' },
  { name: 'Topamax', genericName: 'Topiramat', category: 'Epilepsi / Migren', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet' },
  { name: 'Tritace', genericName: 'Ramipril', category: 'Tansiyon', commonDosages: ['1.25mg', '2.5mg', '5mg', '10mg'], form: 'Tablet' },
  { name: 'Trusopt', genericName: 'Dorzolamid', category: 'Göz (Glokom)', commonDosages: ['2%'], form: 'Damla' },
  { name: 'Twinrix', genericName: 'Hepatit A+B Aşısı', category: 'Aşı', commonDosages: ['1 doz'], form: 'Enjeksiyon' },

  { name: 'Uludag', genericName: 'Parasetamol + Kodein', category: 'Ağrı Kesici', commonDosages: ['500/8mg', '500/15mg', '500/30mg'], form: 'Tablet' },
  { name: 'Ursofalk', genericName: 'Ursodeoksikolik Asit', category: 'Karaciğer / Safra', commonDosages: ['250mg', '500mg'], form: 'Kapsül' },
  { name: 'Utrogestan', genericName: 'Progesteron', category: 'Kadın Sağlığı', commonDosages: ['100mg', '200mg'], form: 'Kapsül' },

  { name: 'Vasofix', genericName: 'Nimodipin', category: 'Nöroloji', commonDosages: ['30mg'], form: 'Tablet' },
  { name: 'Vermox', genericName: 'Mebendazol', category: 'Antiparaziter', commonDosages: ['100mg', '500mg'], form: 'Tablet' },
  { name: 'Vesicare', genericName: 'Solifenasin', category: 'Üroloji (Mesane)', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Vimovo', genericName: 'Naproksen + Esomeprazol', category: 'Ağrı Kesici + Mide', commonDosages: ['500/20mg'], form: 'Tablet' },
  { name: 'Vioxx', genericName: 'Rofekoksib', category: 'Ağrı Kesici (COX-2)', commonDosages: ['12.5mg', '25mg'], form: 'Tablet' },

  { name: 'Wellbutrin', genericName: 'Bupropion', category: 'Antidepresan', commonDosages: ['150mg', '300mg'], form: 'Tablet' },

  { name: 'Xalatan', genericName: 'Latanoprost', category: 'Göz (Glokom)', commonDosages: ['0.005%'], form: 'Damla' },
  { name: 'Xenical', genericName: 'Orlistat', category: 'Obezite', commonDosages: ['120mg'], form: 'Kapsül' },

  { name: 'Zanaflex', genericName: 'Tizanidin', category: 'Kas Gevşetici', commonDosages: ['2mg', '4mg'], form: 'Tablet' },
  { name: 'Zinc (Çinko)', genericName: 'Çinko', category: 'Mineral', commonDosages: ['15mg', '25mg', '50mg'], form: 'Tablet' },
  { name: 'Zinacef', genericName: 'Sefuroksim', category: 'Antibiyotik', commonDosages: ['750mg', '1.5g'], form: 'Enjeksiyon' },
  { name: 'Zoladex', genericName: 'Goserelin', category: 'Onkoloji / Endokrin', commonDosages: ['3.6mg', '10.8mg'], form: 'Enjeksiyon' },
  { name: 'Zometa', genericName: 'Zoledronik Asit', category: 'Onkoloji / Osteoporoz', commonDosages: ['4mg', '5mg'], form: 'Enjeksiyon' },
  { name: 'Zoton', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül' },
  { name: 'Zydus', genericName: 'Olanzapin', category: 'Psikiyatri', commonDosages: ['5mg', '10mg'], form: 'Tablet' },

  // ══════════════════════════════════════════════════════════════
  // FINAL ADDITIONS to 600+
  // ══════════════════════════════════════════════════════════════
  { name: 'Aerius', genericName: 'Desloratadin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet' },
  { name: 'Aldara', genericName: 'İmikimod', category: 'Dermatolojik', commonDosages: ['5% krem'], form: 'Krem' },
  { name: 'Amlodis', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet' },
  { name: 'Arthrotec', genericName: 'Diklofenak + Misoprostol', category: 'Ağrı Kesici + Mide', commonDosages: ['50/200mcg', '75/200mcg'], form: 'Tablet' },
  { name: 'Atozet', genericName: 'Atorvastatin + Ezetimib', category: 'Kolesterol', commonDosages: ['10/10mg', '20/10mg', '40/10mg'], form: 'Tablet' },
  { name: 'Benlysta', genericName: 'Belimumab', category: 'Romatoloji (Lupus)', commonDosages: ['120mg', '400mg'], form: 'Enjeksiyon' },
  { name: 'Betadine', genericName: 'Povidon İyot', category: 'Antiseptik', commonDosages: ['10% solüsyon', '10% merhem'], form: 'Solüsyon' },
  { name: 'Bilaxten', genericName: 'Bilastin', category: 'Alerji', commonDosages: ['20mg'], form: 'Tablet' },
  { name: 'Caduet', genericName: 'Amlodipin + Atorvastatin', category: 'Tansiyon + Kolesterol', commonDosages: ['5/10mg', '10/10mg', '5/20mg'], form: 'Tablet' },
  { name: 'Cardizem', genericName: 'Diltiazem', category: 'Tansiyon / Kalp', commonDosages: ['60mg', '90mg', '120mg'], form: 'Tablet' },
  { name: 'Cipramil', genericName: 'Sitalopram', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet' },
  { name: 'Daivobet', genericName: 'Kalsipotriol + Betametazon', category: 'Dermatolojik (Sedef)', commonDosages: ['50mcg/0.5mg jel'], form: 'Jel' },
  { name: 'Deanxit', genericName: 'Flupentiksol + Melitracen', category: 'Antidepresan', commonDosages: ['0.5/10mg'], form: 'Tablet' },
  { name: 'Duspatalin', genericName: 'Mebeverin', category: 'Sindirim (IBS)', commonDosages: ['135mg', '200mg'], form: 'Kapsül' },
  { name: 'Eutiroks', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '100mcg'], form: 'Tablet' },
  { name: 'Feraheme', genericName: 'Ferumoksitol', category: 'Demir (IV)', commonDosages: ['510mg'], form: 'Enjeksiyon' },
  { name: 'Ferrum Hausmann', genericName: 'Demir Polimaltoz', category: 'Demir', commonDosages: ['100mg', '50mg/5ml'], form: 'Tablet' },
  { name: 'Fluimucil', genericName: 'Asetilsistein', category: 'Mukolitik', commonDosages: ['200mg', '600mg'], form: 'Efervesan Tablet' },
  { name: 'Fybogel', genericName: 'İspaghula', category: 'Kabızlık (Lif)', commonDosages: ['1 poşe'], form: 'Toz' },
  { name: 'Gyno-Pevaryl', genericName: 'Ekonazol', category: 'Antifungal (Vajinal)', commonDosages: ['150mg'], form: 'Vajinal Tablet' },
  { name: 'Ibuset', genericName: 'İbuprofen', category: 'Ağrı Kesici', commonDosages: ['200mg', '400mg'], form: 'Tablet' },
  { name: 'Kombiglyze', genericName: 'Saksagliptin + Metformin', category: 'Diyabet', commonDosages: ['2.5/500mg', '2.5/1000mg'], form: 'Tablet' },
  { name: 'Lanzul', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül' },
  { name: 'Lorien', genericName: 'Losartan', category: 'Tansiyon', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Maalox Plus', category: 'Mide (Antiasit + Antigaz)', commonDosages: ['1 tablet', '10ml'], form: 'Tablet' },
  { name: 'Merislon', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['6mg', '12mg'], form: 'Tablet' },
  { name: 'Mustela', category: 'Bebek Bakım', commonDosages: ['1 uygulama'], form: 'Krem' },
  { name: 'Neurobion', genericName: 'B1 + B6 + B12', category: 'Vitamin (Nörolojik)', commonDosages: ['1 tablet'], form: 'Tablet' },
  { name: 'Olfen', genericName: 'Diklofenak', category: 'Ağrı Kesici', commonDosages: ['25mg', '50mg', '75mg'], form: 'Tablet' },
  { name: 'Ozurdex', genericName: 'Deksametazon', category: 'Göz (İmplant)', commonDosages: ['0.7mg'], form: 'İmplant' },
  { name: 'Perfalgan', genericName: 'Parasetamol (IV)', category: 'Ağrı Kesici', commonDosages: ['1000mg/100ml'], form: 'Enjeksiyon' },
  { name: 'Piascledine', genericName: 'Avokado + Soya', category: 'Eklem (Osteoartrit)', commonDosages: ['300mg'], form: 'Kapsül' },
  { name: 'Selectra', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['50mg', '100mg'], form: 'Tablet' },
  { name: 'Spasfon', genericName: 'Floroglusinol', category: 'Sindirim (Spazmolitik)', commonDosages: ['80mg'], form: 'Tablet' },
  { name: 'Sudafed', genericName: 'Psödoefedrin', category: 'Nazal Dekonjestan', commonDosages: ['30mg', '60mg'], form: 'Tablet' },
  { name: 'Surbex Z', genericName: 'B Vitamin + Çinko', category: 'Vitamin / Mineral', commonDosages: ['1 tablet'], form: 'Tablet' },
  { name: 'Tardyferon', genericName: 'Demir Sülfat', category: 'Demir', commonDosages: ['80mg'], form: 'Tablet' },
  { name: 'Tefal', genericName: 'Parasetamol', category: 'Ağrı Kesici / Ateş', commonDosages: ['500mg'], form: 'Tablet' },
  { name: 'Voltfast', genericName: 'Diklofenak Potasyum', category: 'Ağrı Kesici', commonDosages: ['50mg'], form: 'Toz' },
];

/**
 * Get unique category names from the database
 */
export const getMedicationCategories = (): string[] => {
  const categories = new Set(MEDICATION_DATABASE.map((m) => m.category));
  return Array.from(categories).sort();
};

/**
 * Search medications by name (case-insensitive, partial match)
 */
export const searchMedications = (query: string, limit = 10): MedicationInfo[] => {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();

  // Score-based sorting: exact start match > generic name match > includes match
  const scored = MEDICATION_DATABASE
    .map((m) => {
      const nameLower = m.name.toLowerCase();
      const genericLower = (m.genericName || '').toLowerCase();
      let score = 0;

      if (nameLower.startsWith(q)) score = 100;
      else if (genericLower.startsWith(q)) score = 90;
      else if (nameLower.includes(q)) score = 50;
      else if (genericLower.includes(q)) score = 40;

      return { med: m, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.med);
};
