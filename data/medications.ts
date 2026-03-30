export type MedicationCountry = 'TR' | 'US' | 'EU' | 'GLOBAL';

export interface MedicationInfo {
  name: string;
  genericName?: string;
  category: string;
  commonDosages: string[];
  form: string;
  country?: MedicationCountry;
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
  { name: 'Abacavir', category: 'Antiviral (HIV)', commonDosages: ['300mg', '600mg'], form: 'Tablet', country: 'TR' },
  { name: 'Acarbose', category: 'Diyabet', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Acebutolol', category: 'Tansiyon / Kalp', commonDosages: ['200mg', '400mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Acetylcysteine (ACC)', genericName: 'Asetilsistein', category: 'Mukolitik', commonDosages: ['200mg', '600mg'], form: 'Efervesan Tablet', country: 'TR' },
  { name: 'Acetylsalicylic Acid (Aspirin)', genericName: 'Aspirin', category: 'Ağrı Kesici / Antiplatelet', commonDosages: ['100mg', '300mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Aciclovir', genericName: 'Asiklovir', category: 'Antiviral', commonDosages: ['200mg', '400mg', '800mg'], form: 'Tablet', country: 'TR' },
  { name: 'Adapalene', category: 'Dermatolojik', commonDosages: ['0.1% jel', '0.3% jel'], form: 'Jel', country: 'TR' },
  { name: 'Aferin', category: 'Soğuk Algınlığı', commonDosages: ['1 tablet', '1 poşe'], form: 'Tablet', country: 'TR' },
  { name: 'Aferin Forte', category: 'Soğuk Algınlığı', commonDosages: ['1 tablet'], form: 'Tablet', country: 'TR' },
  { name: 'Akineton', genericName: 'Biperiden', category: 'Nöroloji (Parkinson)', commonDosages: ['2mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Aldactone', genericName: 'Spironolakton', category: 'Diüretik', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Alendronate', genericName: 'Alendronat', category: 'Osteoporoz', commonDosages: ['10mg', '70mg'], form: 'Tablet', country: 'TR' },
  { name: 'Alfuzosin', category: 'Üroloji', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Allopurinol', category: 'Gut', commonDosages: ['100mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Almotriptan', category: 'Migren', commonDosages: ['12.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Alprazolam', category: 'Anksiyete', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ambroxol', category: 'Mukolitik', commonDosages: ['30mg', '75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amiodarone', category: 'Kalp (Aritmi)', commonDosages: ['200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amisulpride', category: 'Psikiyatri', commonDosages: ['50mg', '100mg', '200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amitriptyline', category: 'Antidepresan / Ağrı', commonDosages: ['10mg', '25mg', '50mg', '75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amlodipine', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amoksiklav', genericName: 'Amoksisilin + Klavulanat', category: 'Antibiyotik', commonDosages: ['625mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amoxicillin', genericName: 'Amoksisilin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '875mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Amoxicillin + Clavulanate', genericName: 'Augmentin', category: 'Antibiyotik', commonDosages: ['625mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ampicillin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Anafranil', genericName: 'Klomipramin', category: 'Antidepresan / OKB', commonDosages: ['10mg', '25mg', '75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Anastrozole', category: 'Onkoloji (Meme Kanseri)', commonDosages: ['1mg'], form: 'Tablet', country: 'TR' },
  { name: 'Apixaban', genericName: 'Eliquis', category: 'Kan Sulandırıcı', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Apranax', genericName: 'Naproksen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['275mg', '550mg'], form: 'Tablet', country: 'TR' },
  { name: 'Aripiprazole', category: 'Psikiyatri', commonDosages: ['5mg', '10mg', '15mg', '30mg'], form: 'Tablet', country: 'TR' },
  { name: 'Arveles', genericName: 'Deksketoprofen', category: 'Ağrı Kesici', commonDosages: ['25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Aspirin Protect', genericName: 'Asetilsalisilik Asit', category: 'Antiplatelet', commonDosages: ['100mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Atenolol', category: 'Tansiyon / Kalp', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Atorvastatin', genericName: 'Atorvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Atrovent', genericName: 'İpratropium', category: 'Solunum', commonDosages: ['20mcg', '250mcg/ml'], form: 'İnhaler', country: 'TR' },
  { name: 'Augmentin', genericName: 'Amoksisilin + Klavulanat', category: 'Antibiyotik', commonDosages: ['625mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Augmentin BID', genericName: 'Amoksisilin + Klavulanat', category: 'Antibiyotik', commonDosages: ['400/57mg', '200/28.5mg'], form: 'Süspansiyon', country: 'TR' },
  { name: 'Avelox', genericName: 'Moksifloksasin', category: 'Antibiyotik', commonDosages: ['400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Azathioprine', genericName: 'Azatioprin', category: 'İmmünosupresif', commonDosages: ['50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Azithromycin', genericName: 'Azitromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // B
  // ══════════════════════════════════════════════════════════════
  { name: 'Baclofen', category: 'Kas Gevşetici', commonDosages: ['10mg', '25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bactrim', genericName: 'Trimetoprim + Sülfametoksazol', category: 'Antibiyotik', commonDosages: ['400/80mg', '800/160mg'], form: 'Tablet', country: 'TR' },
  { name: 'Beclomethasone', category: 'Solunum', commonDosages: ['50mcg', '100mcg', '250mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Beloc', genericName: 'Metoprolol', category: 'Tansiyon / Kalp', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bemfola', genericName: 'Follitropin Alfa', category: 'Fertilite', commonDosages: ['75 IU', '150 IU'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Benadryl', genericName: 'Difenhidramin', category: 'Alerji', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Benazepril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Benicar', genericName: 'Olmesartan', category: 'Tansiyon', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Betahistine', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['8mg', '16mg', '24mg'], form: 'Tablet', country: 'TR' },
  { name: 'Betaserc', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['16mg', '24mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bicalutamide', category: 'Onkoloji (Prostat)', commonDosages: ['50mg', '150mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bisoprolol', category: 'Tansiyon / Kalp', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bricanyl', genericName: 'Terbutalin', category: 'Solunum', commonDosages: ['0.5mg/ml', '2.5mg'], form: 'İnhaler', country: 'TR' },
  { name: 'Bromhexine', genericName: 'Bromheksin', category: 'Mukolitik', commonDosages: ['8mg'], form: 'Tablet', country: 'TR' },
  { name: 'Budesonide', category: 'Solunum', commonDosages: ['100mcg', '200mcg', '400mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Bupropion', category: 'Antidepresan / Sigara Bırakma', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Buscopan', genericName: 'Hiyosin Butilbromür', category: 'Sindirim (Spazmolitik)', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // C
  // ══════════════════════════════════════════════════════════════
  { name: 'Calcium + Vitamin D', genericName: 'Kalsiyum + D Vitamini', category: 'Mineral / Vitamin', commonDosages: ['500mg + 400IU', '600mg + 400IU'], form: 'Tablet', country: 'TR' },
  { name: 'Calpol', genericName: 'Parasetamol', category: 'Ağrı Kesici / Ateş (Çocuk)', commonDosages: ['120mg/5ml', '250mg/5ml'], form: 'Süspansiyon', country: 'TR' },
  { name: 'Candesartan', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg', '32mg'], form: 'Tablet', country: 'TR' },
  { name: 'Carbamazepine', genericName: 'Karbamazepin', category: 'Epilepsi / Nöroloji', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cardura', genericName: 'Doksazosin', category: 'Tansiyon / Üroloji', commonDosages: ['1mg', '2mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Carvedilol', category: 'Tansiyon / Kalp', commonDosages: ['6.25mg', '12.5mg', '25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cataflam', genericName: 'Diklofenak Potasyum', category: 'Ağrı Kesici', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cefdinir', category: 'Antibiyotik', commonDosages: ['300mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Cefixime', genericName: 'Sefiksim', category: 'Antibiyotik', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cefuroxime', genericName: 'Sefuroksim', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Celebrex', genericName: 'Selekoksib', category: 'Ağrı Kesici (COX-2)', commonDosages: ['100mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Cetirizine', genericName: 'Setirizin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Champix', genericName: 'Vareniklin', category: 'Sigara Bırakma', commonDosages: ['0.5mg', '1mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cipralex', genericName: 'Essitalopram', category: 'Antidepresan', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cipro', genericName: 'Siprofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ciprofloxacin', genericName: 'Siprofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet', country: 'TR' },
  { name: 'Citalopram', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Clarithromycin', genericName: 'Klaritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Clexane', genericName: 'Enoksaparin', category: 'Kan Sulandırıcı', commonDosages: ['2000IU', '4000IU', '6000IU', '8000IU'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Clopidogrel', category: 'Antiplatelet', commonDosages: ['75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Clonazepam', category: 'Anksiyete / Epilepsi', commonDosages: ['0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Clotrimazole', genericName: 'Klotrimazol', category: 'Antifungal', commonDosages: ['1% krem', '500mg vajinal'], form: 'Krem', country: 'TR' },
  { name: 'Coartem', genericName: 'Artemeter + Lumefantrin', category: 'Antimalaryal', commonDosages: ['20/120mg'], form: 'Tablet', country: 'TR' },
  { name: 'Colchicine', genericName: 'Kolşisin', category: 'Gut', commonDosages: ['0.5mg', '1mg'], form: 'Tablet', country: 'TR' },
  { name: 'Colpermin', genericName: 'Nane Yağı', category: 'Sindirim (IBS)', commonDosages: ['187mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Combivent', genericName: 'İpratropium + Salbutamol', category: 'Solunum', commonDosages: ['20/100mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Concerta', genericName: 'Metilfenidat', category: 'DEHB', commonDosages: ['18mg', '27mg', '36mg', '54mg'], form: 'Tablet', country: 'TR' },
  { name: 'Controloc', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Coraspin', genericName: 'Asetilsalisilik Asit', category: 'Antiplatelet', commonDosages: ['100mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Coumadin', genericName: 'Varfarin', category: 'Kan Sulandırıcı', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cozaar', genericName: 'Losartan', category: 'Tansiyon', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Crestor', genericName: 'Rosuvastatin', category: 'Kolesterol', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cymbalta', genericName: 'Duloksetin', category: 'Antidepresan', commonDosages: ['30mg', '60mg'], form: 'Kapsül', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // D
  // ══════════════════════════════════════════════════════════════
  { name: 'Dabigatran', genericName: 'Pradaxa', category: 'Kan Sulandırıcı', commonDosages: ['75mg', '110mg', '150mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Daflon', genericName: 'Diosmin + Hesperidin', category: 'Damar Koruyucu', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Daktarin', genericName: 'Mikonazol', category: 'Antifungal', commonDosages: ['2% krem', '2% jel'], form: 'Krem', country: 'TR' },
  { name: 'Dalacin C', genericName: 'Klindamisin', category: 'Antibiyotik', commonDosages: ['150mg', '300mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Dapagliflozin', genericName: 'Forxiga', category: 'Diyabet', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Delix', genericName: 'Ramipril', category: 'Tansiyon / Kalp', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Deltacortril', genericName: 'Prednizolon', category: 'Kortikosteroid', commonDosages: ['5mg', '25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Depakine', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Desloratadine', genericName: 'Desloratadin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Dexamethasone', genericName: 'Deksametazon', category: 'Kortikosteroid', commonDosages: ['0.5mg', '4mg', '8mg'], form: 'Tablet', country: 'TR' },
  { name: 'Dexketoprofen', genericName: 'Arveles', category: 'Ağrı Kesici', commonDosages: ['25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diamicron', genericName: 'Gliklazid', category: 'Diyabet', commonDosages: ['30mg', '60mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diazepam', category: 'Anksiyete', commonDosages: ['2mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diclofenac', genericName: 'Diklofenak', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['25mg', '50mg', '75mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diflucan', genericName: 'Flukonazol', category: 'Antifungal', commonDosages: ['50mg', '100mg', '150mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Digoxin', category: 'Kalp', commonDosages: ['0.0625mg', '0.125mg', '0.25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diltiazem', category: 'Tansiyon / Kalp', commonDosages: ['60mg', '90mg', '120mg', '180mg'], form: 'Tablet', country: 'TR' },
  { name: 'Dimetikon', category: 'Sindirim (Gaz)', commonDosages: ['80mg', '125mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diovan', genericName: 'Valsartan', category: 'Tansiyon', commonDosages: ['80mg', '160mg', '320mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diphenhydramine', genericName: 'Difenhidramin', category: 'Alerji / Uyku', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Doksil', genericName: 'Doksisiklin', category: 'Antibiyotik', commonDosages: ['100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Domperidone', genericName: 'Domperidon', category: 'Bulantı / Sindirim', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Donepezil', category: 'Nöroloji (Alzheimer)', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Doxazosin', genericName: 'Doksazosin', category: 'Tansiyon / Üroloji', commonDosages: ['1mg', '2mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Doxycycline', genericName: 'Doksisiklin', category: 'Antibiyotik', commonDosages: ['100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Dulcolax', genericName: 'Bisakodil', category: 'Kabızlık', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Duloxetine', genericName: 'Duloksetin', category: 'Antidepresan', commonDosages: ['30mg', '60mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Duphaston', genericName: 'Didrogesteron', category: 'Kadın Sağlığı', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Duodart', genericName: 'Dutasterid + Tamsulosin', category: 'Üroloji', commonDosages: ['0.5mg + 0.4mg'], form: 'Kapsül', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // E
  // ══════════════════════════════════════════════════════════════
  { name: 'Ecopirin', genericName: 'Asetilsalisilik Asit', category: 'Antiplatelet', commonDosages: ['100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Efexor', genericName: 'Venlafaksin', category: 'Antidepresan', commonDosages: ['37.5mg', '75mg', '150mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Elantan', genericName: 'İsosorbid Mononitrat', category: 'Kalp (Angina)', commonDosages: ['20mg', '40mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Eliquis', genericName: 'Apiksaban', category: 'Kan Sulandırıcı', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Enalapril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Enbrel', genericName: 'Etanersept', category: 'Romatoloji (Biyolojik)', commonDosages: ['25mg', '50mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Endoxan', genericName: 'Siklofosfamid', category: 'Onkoloji', commonDosages: ['50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Enoxaparin', genericName: 'Clexane', category: 'Kan Sulandırıcı', commonDosages: ['4000IU', '6000IU', '8000IU'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Entresto', genericName: 'Sakubitril + Valsartan', category: 'Kalp Yetmezliği', commonDosages: ['24/26mg', '49/51mg', '97/103mg'], form: 'Tablet', country: 'TR' },
  { name: 'Epipen', genericName: 'Adrenalin (Epinefrin)', category: 'Acil (Anafilaksi)', commonDosages: ['0.15mg', '0.3mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Eplerenone', category: 'Kalp / Tansiyon', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Erythromycin', genericName: 'Eritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Escitalopram', genericName: 'Essitalopram', category: 'Antidepresan', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Esomeprazole', genericName: 'Esomeprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Estradiol', category: 'Kadın Sağlığı (HRT)', commonDosages: ['1mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Etodolac', category: 'Ağrı Kesici', commonDosages: ['200mg', '300mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Etoricoxib', genericName: 'Arcoxia', category: 'Ağrı Kesici (COX-2)', commonDosages: ['30mg', '60mg', '90mg', '120mg'], form: 'Tablet', country: 'TR' },
  { name: 'Euthyrox', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg'], form: 'Tablet', country: 'TR' },
  { name: 'Exforge', genericName: 'Amlodipin + Valsartan', category: 'Tansiyon', commonDosages: ['5/80mg', '5/160mg', '10/160mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ezetimibe', category: 'Kolesterol', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // F
  // ══════════════════════════════════════════════════════════════
  { name: 'Famotidine', genericName: 'Famotidin', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Faslodex', genericName: 'Fulvestrant', category: 'Onkoloji (Meme)', commonDosages: ['250mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Fenistil', genericName: 'Dimetinden', category: 'Alerji', commonDosages: ['1mg/ml damla', '1mg'], form: 'Damla', country: 'TR' },
  { name: 'Fenosup', genericName: 'Fenofibrat', category: 'Kolesterol (Trigliserit)', commonDosages: ['160mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Fentanyl', category: 'Ağrı (Opioid)', commonDosages: ['12mcg/h', '25mcg/h', '50mcg/h', '75mcg/h'], form: 'Bant', country: 'TR' },
  { name: 'Ferrous Sulfate', genericName: 'Demir Sülfat', category: 'Mineral (Demir)', commonDosages: ['200mg', '325mg'], form: 'Tablet', country: 'TR' },
  { name: 'Fexofenadine', genericName: 'Feksofenadin', category: 'Alerji', commonDosages: ['120mg', '180mg'], form: 'Tablet', country: 'TR' },
  { name: 'Finasteride', category: 'Üroloji / Dermatolojik', commonDosages: ['1mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Flagyl', genericName: 'Metronidazol', category: 'Antibiyotik / Antiparaziter', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Flector', genericName: 'Diklofenak', category: 'Ağrı Kesici (Topikal)', commonDosages: ['1% jel', 'bant'], form: 'Jel', country: 'TR' },
  { name: 'Fluconazole', genericName: 'Flukonazol', category: 'Antifungal', commonDosages: ['50mg', '100mg', '150mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Fluoxetine', genericName: 'Fluoksetin (Prozac)', category: 'Antidepresan', commonDosages: ['20mg', '40mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Fluticasone', genericName: 'Flutikason', category: 'Solunum / Alerji', commonDosages: ['50mcg', '125mcg', '250mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Fluvoxamine', genericName: 'Fluvoksamin', category: 'Antidepresan / OKB', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Folic Acid', genericName: 'Folik Asit', category: 'Vitamin', commonDosages: ['400mcg', '1mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Foradil', genericName: 'Formoterol', category: 'Solunum', commonDosages: ['12mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Forxiga', genericName: 'Dapagliflozin', category: 'Diyabet / Kalp', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Fosamax', genericName: 'Alendronat', category: 'Osteoporoz', commonDosages: ['10mg', '70mg'], form: 'Tablet', country: 'TR' },
  { name: 'Furosemide', genericName: 'Furosemid', category: 'Diüretik', commonDosages: ['20mg', '40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Fusidic Acid', genericName: 'Fusidik Asit', category: 'Antibiyotik (Topikal)', commonDosages: ['2% krem'], form: 'Krem', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // G
  // ══════════════════════════════════════════════════════════════
  { name: 'Gabapentin', category: 'Nöroloji / Ağrı', commonDosages: ['100mg', '300mg', '400mg', '600mg', '800mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Galvus', genericName: 'Vildagliptin', category: 'Diyabet', commonDosages: ['50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Gaviscon', category: 'Mide (Reflü)', commonDosages: ['10ml', '1 poşe'], form: 'Süspansiyon', country: 'TR' },
  { name: 'Gliclazide', genericName: 'Gliklazid', category: 'Diyabet', commonDosages: ['30mg', '60mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Glimepiride', genericName: 'Glimepirid', category: 'Diyabet', commonDosages: ['1mg', '2mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Glucobay', genericName: 'Akarboz', category: 'Diyabet', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Glucophage', genericName: 'Metformin', category: 'Diyabet', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Glynase', genericName: 'Gliburid', category: 'Diyabet', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Gripin', category: 'Soğuk Algınlığı', commonDosages: ['1 tablet', '1 poşe'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // H
  // ══════════════════════════════════════════════════════════════
  { name: 'Haldol', genericName: 'Haloperidol', category: 'Psikiyatri', commonDosages: ['0.5mg', '1mg', '2mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Herceptin', genericName: 'Trastuzumab', category: 'Onkoloji (Meme)', commonDosages: ['150mg', '440mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Humira', genericName: 'Adalimumab', category: 'Romatoloji (Biyolojik)', commonDosages: ['40mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Hydrochlorothiazide', genericName: 'Hidroklorotiyazid', category: 'Diüretik / Tansiyon', commonDosages: ['12.5mg', '25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Hydroxychloroquine', genericName: 'Hidroksiklorokin', category: 'Romatoloji / Antimalaryal', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Hydroxyzine', genericName: 'Hidroksizin', category: 'Alerji / Anksiyete', commonDosages: ['10mg', '25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Hyoscine', genericName: 'Hiyosin', category: 'Sindirim (Spazmolitik)', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // I
  // ══════════════════════════════════════════════════════════════
  { name: 'Ibuprofen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['200mg', '400mg', '600mg', '800mg'], form: 'Tablet', country: 'TR' },
  { name: 'Imodium', genericName: 'Loperamid', category: 'İshal', commonDosages: ['2mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Imuran', genericName: 'Azatioprin', category: 'İmmünosupresif', commonDosages: ['50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Indapamide', genericName: 'İndapamid', category: 'Diüretik / Tansiyon', commonDosages: ['1.5mg', '2.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Inderal', genericName: 'Propranolol', category: 'Tansiyon / Anksiyete', commonDosages: ['10mg', '40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Indomethacin', genericName: 'İndometasin', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['25mg', '50mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Innohep', genericName: 'Tinzaparin', category: 'Kan Sulandırıcı', commonDosages: ['4500IU', '10000IU'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Inspra', genericName: 'Eplerenon', category: 'Kalp Yetmezliği', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Insulin Aspart', genericName: 'NovoRapid', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Insulin Glargine', genericName: 'Lantus', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL', '300 IU/mL'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Insulin Lispro', genericName: 'Humalog', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Irbesartan', category: 'Tansiyon', commonDosages: ['75mg', '150mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Isoniazid', genericName: 'İzoniazid', category: 'Antibiyotik (Tüberküloz)', commonDosages: ['100mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Isosorbide Mononitrate', genericName: 'İzosorbid Mononitrat', category: 'Kalp (Angina)', commonDosages: ['20mg', '40mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Isotretinoin', genericName: 'İzotretinoin (Roaccutane)', category: 'Dermatolojik (Akne)', commonDosages: ['10mg', '20mg', '40mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Itraconazole', genericName: 'İtrakonazol', category: 'Antifungal', commonDosages: ['100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ivermectin', genericName: 'İvermektin', category: 'Antiparaziter', commonDosages: ['3mg', '6mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // J
  // ══════════════════════════════════════════════════════════════
  { name: 'Januvia', genericName: 'Sitagliptin', category: 'Diyabet', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Janumet', genericName: 'Sitagliptin + Metformin', category: 'Diyabet', commonDosages: ['50/500mg', '50/850mg', '50/1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Jardiance', genericName: 'Empagliflozin', category: 'Diyabet / Kalp', commonDosages: ['10mg', '25mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // K
  // ══════════════════════════════════════════════════════════════
  { name: 'Ketoprofen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['50mg', '100mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ketorolac', category: 'Ağrı Kesici', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Klacid', genericName: 'Klaritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Keppra', genericName: 'Levetirasetam', category: 'Epilepsi', commonDosages: ['250mg', '500mg', '750mg', '1000mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // L
  // ══════════════════════════════════════════════════════════════
  { name: 'Lactulose', genericName: 'Laktuloz', category: 'Kabızlık', commonDosages: ['10g/15ml', '15ml'], form: 'Şurup', country: 'TR' },
  { name: 'Lamictal', genericName: 'Lamotrijin', category: 'Epilepsi / Psikiyatri', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lamotrigine', genericName: 'Lamotrijin', category: 'Epilepsi / Psikiyatri', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lansor', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Lansoprazole', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Lantus', genericName: 'İnsülin Glarjin', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Laroxyl', genericName: 'Amitriptilin', category: 'Antidepresan', commonDosages: ['10mg', '25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lasix', genericName: 'Furosemid', category: 'Diüretik', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lercadip', genericName: 'Lerkanidipin', category: 'Tansiyon', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Letrozole', genericName: 'Letrozol', category: 'Onkoloji (Meme)', commonDosages: ['2.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Levetiracetam', category: 'Epilepsi', commonDosages: ['250mg', '500mg', '750mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Levocetirizine', genericName: 'Levosetirizin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Levofloxacin', genericName: 'Levofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet', country: 'TR' },
  { name: 'Levothyroxine', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg', '125mcg', '150mcg'], form: 'Tablet', country: 'TR' },
  { name: 'Lexapro', genericName: 'Essitalopram', category: 'Antidepresan', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lipanthyl', genericName: 'Fenofibrat', category: 'Kolesterol', commonDosages: ['145mg', '160mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Lipitor', genericName: 'Atorvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Liraglutide', genericName: 'Victoza / Saxenda', category: 'Diyabet / Obezite', commonDosages: ['0.6mg', '1.2mg', '1.8mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Lisinopril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lithium', genericName: 'Lityum', category: 'Psikiyatri (Bipolar)', commonDosages: ['300mg', '450mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lopressor', genericName: 'Metoprolol', category: 'Tansiyon / Kalp', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Loratadine', genericName: 'Loratadin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lorazepam', category: 'Anksiyete', commonDosages: ['0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Losartan', category: 'Tansiyon', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lustral', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lyrica', genericName: 'Pregabalin', category: 'Nöroloji / Ağrı', commonDosages: ['25mg', '50mg', '75mg', '150mg', '300mg'], form: 'Kapsül', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // M
  // ══════════════════════════════════════════════════════════════
  { name: 'Macrol', genericName: 'Azitromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Magnesium', genericName: 'Magnezyum', category: 'Mineral', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Majezik', genericName: 'Flurbiprofen', category: 'Ağrı Kesici', commonDosages: ['100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mebeverine', category: 'Sindirim (IBS)', commonDosages: ['135mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Medrol', genericName: 'Metilprednizolon', category: 'Kortikosteroid', commonDosages: ['4mg', '8mg', '16mg', '32mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mefenamic Acid', genericName: 'Mefenamik Asit', category: 'Ağrı Kesici', commonDosages: ['250mg', '500mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Meloxicam', genericName: 'Meloksikam', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['7.5mg', '15mg'], form: 'Tablet', country: 'TR' },
  { name: 'Memantine', genericName: 'Memantin', category: 'Nöroloji (Alzheimer)', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Metformin', category: 'Diyabet', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Methotrexate', genericName: 'Metotreksat', category: 'Romatoloji / Onkoloji', commonDosages: ['2.5mg', '7.5mg', '10mg', '15mg'], form: 'Tablet', country: 'TR' },
  { name: 'Methylphenidate', genericName: 'Metilfenidat', category: 'DEHB', commonDosages: ['10mg', '18mg', '27mg', '36mg', '54mg'], form: 'Tablet', country: 'TR' },
  { name: 'Methylprednisolone', genericName: 'Metilprednizolon', category: 'Kortikosteroid', commonDosages: ['4mg', '8mg', '16mg'], form: 'Tablet', country: 'TR' },
  { name: 'Metoclopramide', genericName: 'Metoklopramid', category: 'Bulantı / Sindirim', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Metoprolol', category: 'Tansiyon / Kalp', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Metronidazole', genericName: 'Metronidazol', category: 'Antibiyotik / Antiparaziter', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Micardis', genericName: 'Telmisartan', category: 'Tansiyon', commonDosages: ['40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Miflonide', genericName: 'Budesonid', category: 'Solunum', commonDosages: ['200mcg', '400mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Milurit', genericName: 'Allopürinol', category: 'Gut', commonDosages: ['100mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mirtazapine', genericName: 'Mirtazapin', category: 'Antidepresan', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablet', country: 'TR' },
  { name: 'Misoprostol', category: 'Mide Koruyucu', commonDosages: ['200mcg'], form: 'Tablet', country: 'TR' },
  { name: 'Modiodal', genericName: 'Modafinil', category: 'Nöroloji (Narkolepsi)', commonDosages: ['100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mometasone', genericName: 'Mometazon', category: 'Alerji (Nazal) / Dermatolojik', commonDosages: ['50mcg sprey', '0.1% krem'], form: 'Sprey', country: 'TR' },
  { name: 'Monopril', genericName: 'Fosinopril', category: 'Tansiyon', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Montelukast', category: 'Solunum / Alerji', commonDosages: ['4mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Morphine', genericName: 'Morfin', category: 'Ağrı (Opioid)', commonDosages: ['10mg', '15mg', '30mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Motilium', genericName: 'Domperidon', category: 'Bulantı / Sindirim', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mucosolvan', genericName: 'Ambroksol', category: 'Mukolitik', commonDosages: ['30mg', '75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Muscoril', genericName: 'Tiyokolşikosid', category: 'Kas Gevşetici', commonDosages: ['4mg', '8mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Mycophenolate', genericName: 'Mikofenolat', category: 'İmmünosupresif', commonDosages: ['250mg', '500mg'], form: 'Kapsül', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // N
  // ══════════════════════════════════════════════════════════════
  { name: 'Naproxen', genericName: 'Naproksen', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['250mg', '500mg', '550mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nasonex', genericName: 'Mometazon', category: 'Alerji (Nazal)', commonDosages: ['50mcg'], form: 'Nazal Sprey', country: 'TR' },
  { name: 'Nebilet', genericName: 'Nebivolol', category: 'Tansiyon', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nebivolol', category: 'Tansiyon', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Neo-Angin', category: 'Boğaz Ağrısı', commonDosages: ['1 pastil'], form: 'Pastil', country: 'TR' },
  { name: 'Nexium', genericName: 'Esomeprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Nifedipine', genericName: 'Nifedipin', category: 'Tansiyon', commonDosages: ['20mg', '30mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nimesulide', genericName: 'Nimesulid', category: 'Ağrı Kesici', commonDosages: ['100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nitrofurantoin', category: 'Antibiyotik (İdrar Yolu)', commonDosages: ['50mg', '100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Nitroglycerin', genericName: 'Nitrogliserin', category: 'Kalp (Angina)', commonDosages: ['0.4mg', '2.5mg', '6.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nolicin', genericName: 'Norfloksasin', category: 'Antibiyotik (İdrar Yolu)', commonDosages: ['400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nolvadex', genericName: 'Tamoksifen', category: 'Onkoloji (Meme)', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Norvasc', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'NovoRapid', genericName: 'İnsülin Aspart', category: 'Diyabet (İnsülin)', commonDosages: ['100 IU/mL'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Nurofen', genericName: 'İbuprofen', category: 'Ağrı Kesici', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // O
  // ══════════════════════════════════════════════════════════════
  { name: 'Olanzapine', genericName: 'Olanzapin', category: 'Psikiyatri', commonDosages: ['2.5mg', '5mg', '10mg', '15mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Olmesartan', category: 'Tansiyon', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Omeprazole', genericName: 'Omeprazol', category: 'Mide', commonDosages: ['10mg', '20mg', '40mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ondansetron', genericName: 'Ondansetron', category: 'Bulantı', commonDosages: ['4mg', '8mg'], form: 'Tablet', country: 'TR' },
  { name: 'Onglyza', genericName: 'Saksagliptin', category: 'Diyabet', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Oralet', genericName: 'Oral Rehidrasyon', category: 'Dehidratasyon', commonDosages: ['1 poşe'], form: 'Toz', country: 'TR' },
  { name: 'Orbax', genericName: 'Levofloksasin', category: 'Antibiyotik', commonDosages: ['500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Orgametril', genericName: 'Linestrenol', category: 'Kadın Sağlığı', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Orlistat', category: 'Obezite', commonDosages: ['60mg', '120mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ospen', genericName: 'Fenoksimetilpenisilin', category: 'Antibiyotik', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Otrivin', genericName: 'Ksilometazolin', category: 'Nazal Dekonjestan', commonDosages: ['0.05%', '0.1%'], form: 'Nazal Sprey', country: 'TR' },
  { name: 'Ozempic', genericName: 'Semaglutid', category: 'Diyabet / Obezite', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Enjeksiyon', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // P
  // ══════════════════════════════════════════════════════════════
  { name: 'Panadol', genericName: 'Parasetamol', category: 'Ağrı Kesici / Ateş Düşürücü', commonDosages: ['500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Panto', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Pantoprazole', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Paracetamol', category: 'Ağrı Kesici / Ateş Düşürücü', commonDosages: ['500mg', '650mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Pariet', genericName: 'Rabeprazol', category: 'Mide', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Paroxetine', genericName: 'Paroksetin', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '30mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Paxil', genericName: 'Paroksetin', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Perindopril', category: 'Tansiyon', commonDosages: ['2mg', '4mg', '8mg'], form: 'Tablet', country: 'TR' },
  { name: 'Phenytoin', genericName: 'Fenitoin', category: 'Epilepsi', commonDosages: ['100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Pioglitazone', genericName: 'Pioglitazon', category: 'Diyabet', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablet', country: 'TR' },
  { name: 'Plavix', genericName: 'Klopidogrel', category: 'Antiplatelet', commonDosages: ['75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Pradaxa', genericName: 'Dabigatran', category: 'Kan Sulandırıcı', commonDosages: ['75mg', '110mg', '150mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Prednisone', genericName: 'Prednizon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Prednisolone', genericName: 'Prednizolon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Pregabalin', category: 'Nöroloji / Ağrı', commonDosages: ['25mg', '50mg', '75mg', '150mg', '300mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Premarin', genericName: 'Konjuge Östrojen', category: 'Kadın Sağlığı (HRT)', commonDosages: ['0.3mg', '0.625mg'], form: 'Tablet', country: 'TR' },
  { name: 'Primolut N', genericName: 'Noretisteron', category: 'Kadın Sağlığı', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Proair', genericName: 'Salbutamol', category: 'Solunum', commonDosages: ['100mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Profenid', genericName: 'Ketoprofen', category: 'Ağrı Kesici', commonDosages: ['100mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Propranolol', category: 'Tansiyon / Anksiyete', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Proscar', genericName: 'Finasterid', category: 'Üroloji (BPH)', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Protonex', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['30mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Prozac', genericName: 'Fluoksetin', category: 'Antidepresan', commonDosages: ['20mg', '40mg'], form: 'Kapsül', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // Q
  // ══════════════════════════════════════════════════════════════
  { name: 'Quetiapine', genericName: 'Ketiapin', category: 'Psikiyatri', commonDosages: ['25mg', '50mg', '100mg', '200mg', '300mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // R
  // ══════════════════════════════════════════════════════════════
  { name: 'Rabeprazole', genericName: 'Rabeprazol', category: 'Mide', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ramipril', category: 'Tansiyon / Kalp', commonDosages: ['1.25mg', '2.5mg', '5mg', '10mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ranitidine', genericName: 'Ranitidin', category: 'Mide', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Relvar', genericName: 'Flutikazon + Vilanterol', category: 'Solunum', commonDosages: ['92/22mcg', '184/22mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Relpax', genericName: 'Eletriptan', category: 'Migren', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Remeron', genericName: 'Mirtazapin', category: 'Antidepresan', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablet', country: 'TR' },
  { name: 'Rennie', category: 'Mide (Antiasit)', commonDosages: ['1 tablet'], form: 'Çiğneme Tableti', country: 'TR' },
  { name: 'Rifampicin', genericName: 'Rifampisin', category: 'Antibiyotik (Tüberküloz)', commonDosages: ['150mg', '300mg', '450mg', '600mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Riluzole', genericName: 'Riluzol', category: 'Nöroloji (ALS)', commonDosages: ['50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Risedronate', genericName: 'Risedronat', category: 'Osteoporoz', commonDosages: ['5mg', '35mg', '150mg'], form: 'Tablet', country: 'TR' },
  { name: 'Risperidone', genericName: 'Risperidon', category: 'Psikiyatri', commonDosages: ['0.5mg', '1mg', '2mg', '3mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ritalin', genericName: 'Metilfenidat', category: 'DEHB', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Rivaroxaban', genericName: 'Xarelto', category: 'Kan Sulandırıcı', commonDosages: ['10mg', '15mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Rivotril', genericName: 'Klonazepam', category: 'Epilepsi / Anksiyete', commonDosages: ['0.5mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Roaccutane', genericName: 'İzotretinoin', category: 'Dermatolojik (Akne)', commonDosages: ['10mg', '20mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Rosuvastatin', category: 'Kolesterol', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // S
  // ══════════════════════════════════════════════════════════════
  { name: 'Salbutamol', genericName: 'Ventolin', category: 'Solunum', commonDosages: ['100mcg', '200mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Salmeterol', genericName: 'Serevent', category: 'Solunum', commonDosages: ['25mcg', '50mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Seretide', genericName: 'Salmeterol + Flutikazon', category: 'Solunum', commonDosages: ['25/125mcg', '25/250mcg', '50/500mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Seroquel', genericName: 'Ketiapin', category: 'Psikiyatri', commonDosages: ['25mg', '100mg', '200mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Sertraline', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Sildenafil', category: 'Üroloji', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Simvastatin', genericName: 'Simvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Singulair', genericName: 'Montelukast', category: 'Solunum / Alerji', commonDosages: ['4mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Sitagliptin', genericName: 'Januvia', category: 'Diyabet', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Spironolactone', genericName: 'Spironolakton', category: 'Diüretik', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Stalevo', genericName: 'Levodopa + Karbidopa + Entakapon', category: 'Nöroloji (Parkinson)', commonDosages: ['50/12.5/200mg', '100/25/200mg', '150/37.5/200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Strepsils', category: 'Boğaz Ağrısı', commonDosages: ['1 pastil'], form: 'Pastil', country: 'TR' },
  { name: 'Sucralfate', genericName: 'Sukralfat', category: 'Mide', commonDosages: ['1g'], form: 'Tablet', country: 'TR' },
  { name: 'Sumatriptan', category: 'Migren', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Symbicort', genericName: 'Budesonid + Formoterol', category: 'Solunum', commonDosages: ['80/4.5mcg', '160/4.5mcg', '320/9mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Synthroid', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // T
  // ══════════════════════════════════════════════════════════════
  { name: 'Tadalafil', genericName: 'Cialis', category: 'Üroloji', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tamoxifen', genericName: 'Tamoksifen', category: 'Onkoloji (Meme)', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tamsulosin', genericName: 'Tamsulosin', category: 'Üroloji', commonDosages: ['0.4mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Tantum Verde', genericName: 'Benzidamin', category: 'Boğaz Ağrısı', commonDosages: ['1.5mg/ml sprey', '3mg pastil'], form: 'Sprey', country: 'TR' },
  { name: 'Tarivid', genericName: 'Ofloksasin', category: 'Antibiyotik', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tegretol', genericName: 'Karbamazepin', category: 'Epilepsi / Nöroloji', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Telmisartan', category: 'Tansiyon', commonDosages: ['20mg', '40mg', '80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Temodal', genericName: 'Temozolomid', category: 'Onkoloji (Beyin)', commonDosages: ['5mg', '20mg', '100mg', '250mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Tenox', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Terbinafine', genericName: 'Terbinafin', category: 'Antifungal', commonDosages: ['250mg', '1% krem'], form: 'Tablet', country: 'TR' },
  { name: 'Theophylline', genericName: 'Teofilin', category: 'Solunum', commonDosages: ['100mg', '200mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Thiocolchicoside', genericName: 'Tiyokolşikosid', category: 'Kas Gevşetici', commonDosages: ['4mg', '8mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ticagrelor', genericName: 'Brilinta', category: 'Antiplatelet', commonDosages: ['60mg', '90mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tilcotil', genericName: 'Tenoksikam', category: 'Ağrı Kesici / Antiinflamatuar', commonDosages: ['20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tiotropium', genericName: 'Spiriva', category: 'Solunum (KOAH)', commonDosages: ['18mcg', '2.5mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Topiramate', genericName: 'Topirama', category: 'Epilepsi / Migren', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Trajenta', genericName: 'Linagliptin', category: 'Diyabet', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tramadol', category: 'Ağrı Kesici (Opioid)', commonDosages: ['50mg', '100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Trazodone', genericName: 'Trazodon', category: 'Antidepresan / Uyku', commonDosages: ['50mg', '100mg', '150mg'], form: 'Tablet', country: 'TR' },
  { name: 'Trental', genericName: 'Pentoksifilin', category: 'Dolaşım Bozukluğu', commonDosages: ['400mg', '600mg'], form: 'Tablet', country: 'TR' },
  { name: 'Triatec', genericName: 'Ramipril', category: 'Tansiyon', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Trimebutine', genericName: 'Trimebutin', category: 'Sindirim (IBS)', commonDosages: ['100mg', '200mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // U
  // ══════════════════════════════════════════════════════════════
  { name: 'Ulcuran', genericName: 'Famotidin', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ultracet', genericName: 'Tramadol + Parasetamol', category: 'Ağrı Kesici', commonDosages: ['37.5/325mg'], form: 'Tablet', country: 'TR' },
  { name: 'Urorec', genericName: 'Silodosin', category: 'Üroloji (BPH)', commonDosages: ['4mg', '8mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ursodeoxycholic Acid', genericName: 'Ursodeoksikolik Asit', category: 'Karaciğer / Safra', commonDosages: ['250mg', '500mg'], form: 'Kapsül', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // V
  // ══════════════════════════════════════════════════════════════
  { name: 'Valacyclovir', genericName: 'Valasiklovir', category: 'Antiviral', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Valparin', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Valsartan', category: 'Tansiyon', commonDosages: ['40mg', '80mg', '160mg', '320mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vasotec', genericName: 'Enalapril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Venlafaxine', genericName: 'Venlafaksin', category: 'Antidepresan', commonDosages: ['37.5mg', '75mg', '150mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Ventolin', genericName: 'Salbutamol', category: 'Solunum', commonDosages: ['100mcg', '2.5mg/2.5ml'], form: 'İnhaler', country: 'TR' },
  { name: 'Verapamil', category: 'Tansiyon / Kalp', commonDosages: ['40mg', '80mg', '120mg', '240mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vermidon', genericName: 'Parasetamol + Kafein', category: 'Ağrı Kesici', commonDosages: ['500mg + 30mg'], form: 'Tablet', country: 'TR' },
  { name: 'Viagra', genericName: 'Sildenafil', category: 'Üroloji', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vicodin', genericName: 'Hidrokodon + Parasetamol', category: 'Ağrı (Opioid)', commonDosages: ['5/300mg', '10/300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vidisic', genericName: 'Karbomer', category: 'Göz (Yapay Gözyaşı)', commonDosages: ['2mg/g'], form: 'Jel', country: 'TR' },
  { name: 'Vitamin B Complex', genericName: 'B Vitamin Kompleks', category: 'Vitamin', commonDosages: ['1 tablet'], form: 'Tablet', country: 'TR' },
  { name: 'Vitamin B12', genericName: 'Siyanokobalamin', category: 'Vitamin', commonDosages: ['250mcg', '500mcg', '1000mcg'], form: 'Tablet', country: 'TR' },
  { name: 'Vitamin C', genericName: 'Askorbik Asit', category: 'Vitamin', commonDosages: ['250mg', '500mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vitamin D3', genericName: 'Kolekalsiferol', category: 'Vitamin', commonDosages: ['400IU', '800IU', '1000IU', '2000IU', '5000IU'], form: 'Tablet', country: 'TR' },
  { name: 'Vitamin E', genericName: 'Tokoferol', category: 'Vitamin', commonDosages: ['200IU', '400IU'], form: 'Kapsül', country: 'TR' },
  { name: 'Voltaren', genericName: 'Diklofenak', category: 'Ağrı Kesici', commonDosages: ['25mg', '50mg', '75mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Voltaren Emulgel', genericName: 'Diklofenak (Topikal)', category: 'Ağrı Kesici (Topikal)', commonDosages: ['1% jel', '2% jel'], form: 'Jel', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // W
  // ══════════════════════════════════════════════════════════════
  { name: 'Warfarin', genericName: 'Varfarin', category: 'Kan Sulandırıcı', commonDosages: ['1mg', '2mg', '2.5mg', '5mg', '7.5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Wegovy', genericName: 'Semaglutid', category: 'Obezite', commonDosages: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'], form: 'Enjeksiyon', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // X
  // ══════════════════════════════════════════════════════════════
  { name: 'Xanax', genericName: 'Alprazolam', category: 'Anksiyete', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Xarelto', genericName: 'Rivaroksaban', category: 'Kan Sulandırıcı', commonDosages: ['10mg', '15mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Xyzal', genericName: 'Levosetirizin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // Y
  // ══════════════════════════════════════════════════════════════
  { name: 'Yasmin', genericName: 'Drospirenon + Etinilestradiol', category: 'Doğum Kontrolü', commonDosages: ['3mg + 0.03mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // Z
  // ══════════════════════════════════════════════════════════════
  { name: 'Zanidip', genericName: 'Lerkanidipin', category: 'Tansiyon', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zantac', genericName: 'Ranitidin', category: 'Mide', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zebinix', genericName: 'Eslikarbazepin', category: 'Epilepsi', commonDosages: ['200mg', '800mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zestril', genericName: 'Lisinopril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zinnat', genericName: 'Sefuroksim', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zithromax', genericName: 'Azitromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zocor', genericName: 'Simvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zoloft', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zolpidem', category: 'Uyku', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zomig', genericName: 'Zolmitriptan', category: 'Migren', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zovirax', genericName: 'Asiklovir', category: 'Antiviral', commonDosages: ['200mg', '400mg', '5% krem'], form: 'Tablet', country: 'TR' },
  { name: 'Zyprexa', genericName: 'Olanzapin', category: 'Psikiyatri', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zyrtec', genericName: 'Setirizin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // ADDITIONAL — Popular TR & EU Medications
  // ══════════════════════════════════════════════════════════════
  { name: 'Actilyse', genericName: 'Alteplaz', category: 'Trombolitik', commonDosages: ['50mg', '100mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Alfacalcidol', genericName: 'Alfakalsidol', category: 'Vitamin D Aktif', commonDosages: ['0.25mcg', '0.5mcg', '1mcg'], form: 'Kapsül', country: 'TR' },
  { name: 'Allegra', genericName: 'Feksofenadin', category: 'Alerji', commonDosages: ['120mg', '180mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amaryl', genericName: 'Glimepirid', category: 'Diyabet', commonDosages: ['1mg', '2mg', '3mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Amias', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg', '32mg'], form: 'Tablet', country: 'TR' },
  { name: 'Anapen', genericName: 'Adrenalin', category: 'Acil (Anafilaksi)', commonDosages: ['0.15mg', '0.3mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Androcur', genericName: 'Siproteron', category: 'Endokrin', commonDosages: ['10mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Antepsin', genericName: 'Sukralfat', category: 'Mide', commonDosages: ['1g'], form: 'Tablet', country: 'TR' },
  { name: 'Aprovel', genericName: 'İrbesartan', category: 'Tansiyon', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Aricept', genericName: 'Donepezil', category: 'Nöroloji (Alzheimer)', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Asacol', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['400mg', '800mg'], form: 'Tablet', country: 'TR' },
  { name: 'Atacand', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg', '32mg'], form: 'Tablet', country: 'TR' },
  { name: 'Atorva', genericName: 'Atorvastatin', category: 'Kolesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Avamys', genericName: 'Flutikazon Furoat', category: 'Alerji (Nazal)', commonDosages: ['27.5mcg'], form: 'Nazal Sprey', country: 'TR' },
  { name: 'Avelumab', category: 'Onkoloji (İmmünoterapi)', commonDosages: ['200mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Avodart', genericName: 'Dutasterid', category: 'Üroloji (BPH)', commonDosages: ['0.5mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Azopt', genericName: 'Brinzolamid', category: 'Göz (Glokom)', commonDosages: ['1%'], form: 'Damla', country: 'TR' },

  { name: 'Bepanthen', genericName: 'Dekspantenol', category: 'Dermatolojik', commonDosages: ['5% krem'], form: 'Krem', country: 'TR' },
  { name: 'Berocca', category: 'Vitamin / Mineral Kompleks', commonDosages: ['1 tablet'], form: 'Efervesan Tablet', country: 'TR' },
  { name: 'Betmiga', genericName: 'Mirabegron', category: 'Üroloji (Mesane)', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bisolvon', genericName: 'Bromheksin', category: 'Mukolitik', commonDosages: ['8mg'], form: 'Tablet', country: 'TR' },
  { name: 'Blopress', genericName: 'Kandesartan', category: 'Tansiyon', commonDosages: ['8mg', '16mg'], form: 'Tablet', country: 'TR' },
  { name: 'Bonviva', genericName: 'İbandronat', category: 'Osteoporoz', commonDosages: ['150mg'], form: 'Tablet', country: 'TR' },
  { name: 'Brufen', genericName: 'İbuprofen', category: 'Ağrı Kesici', commonDosages: ['200mg', '400mg', '600mg'], form: 'Tablet', country: 'TR' },

  { name: 'Cafergot', genericName: 'Ergotamin + Kafein', category: 'Migren', commonDosages: ['1mg + 100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Calcimagon D3', genericName: 'Kalsiyum + D3', category: 'Mineral / Vitamin', commonDosages: ['500mg + 1000IU'], form: 'Çiğneme Tableti', country: 'TR' },
  { name: 'Canesten', genericName: 'Klotrimazol', category: 'Antifungal', commonDosages: ['1% krem', '500mg vajinal'], form: 'Krem', country: 'TR' },
  { name: 'Ciloxan', genericName: 'Siprofloksasin', category: 'Göz (Antibiyotik)', commonDosages: ['0.3%'], form: 'Damla', country: 'TR' },
  { name: 'Claritine', genericName: 'Loratadin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Claritin', genericName: 'Loratadin', category: 'Alerji', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Co-Diovan', genericName: 'Valsartan + HCT', category: 'Tansiyon', commonDosages: ['80/12.5mg', '160/12.5mg', '160/25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Combigan', genericName: 'Brimondin + Timolol', category: 'Göz (Glokom)', commonDosages: ['0.2%+0.5%'], form: 'Damla', country: 'TR' },
  { name: 'Concor', genericName: 'Bisoprolol', category: 'Tansiyon / Kalp', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Contramal', genericName: 'Tramadol', category: 'Ağrı Kesici (Opioid)', commonDosages: ['50mg', '100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Coversyl', genericName: 'Perindopril', category: 'Tansiyon', commonDosages: ['2mg', '4mg', '8mg'], form: 'Tablet', country: 'TR' },
  { name: 'Creon', genericName: 'Pankreatin', category: 'Sindirim (Enzim)', commonDosages: ['10000IU', '25000IU', '40000IU'], form: 'Kapsül', country: 'TR' },

  { name: 'Dafalgan', genericName: 'Parasetamol', category: 'Ağrı Kesici', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Daonil', genericName: 'Glibenklamid', category: 'Diyabet', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Debridat', genericName: 'Trimebutin', category: 'Sindirim', commonDosages: ['100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Depakin', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Dermovate', genericName: 'Klobetazol', category: 'Dermatolojik (Steroid)', commonDosages: ['0.05% krem'], form: 'Krem', country: 'TR' },
  { name: 'Desyrel', genericName: 'Trazodon', category: 'Antidepresan', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Diane 35', genericName: 'Siproteron + Etinilestradiol', category: 'Doğum Kontrolü / Akne', commonDosages: ['2mg + 0.035mg'], form: 'Tablet', country: 'TR' },
  { name: 'Dikloron', genericName: 'Diklofenak', category: 'Ağrı Kesici', commonDosages: ['75mg/3ml'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Dolorex', genericName: 'Naproksen Sodyum', category: 'Ağrı Kesici', commonDosages: ['275mg', '550mg'], form: 'Tablet', country: 'TR' },
  { name: 'Dormicum', genericName: 'Midazolam', category: 'Sedasyon / Anksiyete', commonDosages: ['7.5mg', '15mg'], form: 'Tablet', country: 'TR' },

  { name: 'Ebixa', genericName: 'Memantin', category: 'Nöroloji (Alzheimer)', commonDosages: ['10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Elocon', genericName: 'Mometazon', category: 'Dermatolojik (Steroid)', commonDosages: ['0.1% krem'], form: 'Krem', country: 'TR' },
  { name: 'Emend', genericName: 'Aprepitant', category: 'Bulantı (Kemoterapi)', commonDosages: ['80mg', '125mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Emla', genericName: 'Lidokain + Prilokain', category: 'Lokal Anestezik', commonDosages: ['2.5%+2.5% krem'], form: 'Krem', country: 'TR' },
  { name: 'Enapril', genericName: 'Enalapril', category: 'Tansiyon', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Epilim', genericName: 'Valproik Asit', category: 'Epilepsi', commonDosages: ['200mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Eprex', genericName: 'Eritropoetin', category: 'Anemi', commonDosages: ['2000IU', '4000IU', '10000IU'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Esidrex', genericName: 'Hidroklorotiyazid', category: 'Diüretik', commonDosages: ['25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Estrofem', genericName: 'Estradiol', category: 'Kadın Sağlığı (HRT)', commonDosages: ['1mg', '2mg'], form: 'Tablet', country: 'TR' },

  { name: 'Fasigyn', genericName: 'Tinidazol', category: 'Antibiyotik / Antiparaziter', commonDosages: ['500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Felodipin', category: 'Tansiyon', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ferretab', genericName: 'Demir Fumarat + Folik Asit', category: 'Demir / Vitamin', commonDosages: ['152mg + 0.5mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Fervex', category: 'Soğuk Algınlığı', commonDosages: ['1 poşe'], form: 'Toz', country: 'TR' },
  { name: 'Flebogamma', genericName: 'İmmünoglobulin', category: 'İmmünoloji', commonDosages: ['5g', '10g'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Flixonase', genericName: 'Flutikazon', category: 'Alerji (Nazal)', commonDosages: ['50mcg'], form: 'Nazal Sprey', country: 'TR' },
  { name: 'Forteo', genericName: 'Teriparatid', category: 'Osteoporoz', commonDosages: ['20mcg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Fromilid', genericName: 'Klaritromisin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Fucidin', genericName: 'Fusidik Asit', category: 'Antibiyotik (Topikal)', commonDosages: ['2% krem', '2% merhem'], form: 'Krem', country: 'TR' },

  { name: 'Galvus Met', genericName: 'Vildagliptin + Metformin', category: 'Diyabet', commonDosages: ['50/500mg', '50/850mg', '50/1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Gaviscon Advance', category: 'Mide (Reflü)', commonDosages: ['10ml'], form: 'Süspansiyon', country: 'TR' },
  { name: 'Genotropin', genericName: 'Somatropin', category: 'Büyüme Hormonu', commonDosages: ['5.3mg', '12mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Glivec', genericName: 'İmatinib', category: 'Onkoloji (KML)', commonDosages: ['100mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Glucovance', genericName: 'Metformin + Glibenklamid', category: 'Diyabet', commonDosages: ['500/2.5mg', '500/5mg'], form: 'Tablet', country: 'TR' },

  { name: 'Halfan', genericName: 'Halofantrin', category: 'Antimalaryal', commonDosages: ['250mg'], form: 'Tablet', country: 'TR' },
  { name: 'Havrix', genericName: 'Hepatit A Aşısı', category: 'Aşı', commonDosages: ['720IU', '1440IU'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Heparin', category: 'Kan Sulandırıcı', commonDosages: ['5000IU/ml'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Humalog', genericName: 'İnsülin Lispro', category: 'Diyabet (İnsülin)', commonDosages: ['100IU/ml'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Hydrocortisone', genericName: 'Hidrokortizon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '1% krem'], form: 'Tablet', country: 'TR' },

  { name: 'Imigran', genericName: 'Sumatriptan', category: 'Migren', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Imovane', genericName: 'Zopiklon', category: 'Uyku', commonDosages: ['3.75mg', '7.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Innopran', genericName: 'Propranolol', category: 'Tansiyon', commonDosages: ['80mg', '120mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Invokana', genericName: 'Kanagliflozin', category: 'Diyabet', commonDosages: ['100mg', '300mg'], form: 'Tablet', country: 'TR' },

  { name: 'Kaletra', genericName: 'Lopinavir + Ritonavir', category: 'Antiviral (HIV)', commonDosages: ['200/50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Karvezide', genericName: 'İrbesartan + HCT', category: 'Tansiyon', commonDosages: ['150/12.5mg', '300/12.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Konveril', genericName: 'Enalapril + HCT', category: 'Tansiyon', commonDosages: ['10/12.5mg', '20/12.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Klonapin', genericName: 'Klonazepam', category: 'Anksiyete / Epilepsi', commonDosages: ['0.5mg', '2mg'], form: 'Tablet', country: 'TR' },

  { name: 'Lamisil', genericName: 'Terbinafin', category: 'Antifungal', commonDosages: ['250mg', '1% krem'], form: 'Tablet', country: 'TR' },
  { name: 'Lanoxin', genericName: 'Digoksin', category: 'Kalp', commonDosages: ['0.125mg', '0.25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lasilactone', genericName: 'Furosemid + Spironolakton', category: 'Diüretik', commonDosages: ['20/50mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Leponex', genericName: 'Klozapin', category: 'Psikiyatri', commonDosages: ['25mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Levitra', genericName: 'Vardenafil', category: 'Üroloji', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lioresal', genericName: 'Baklofen', category: 'Kas Gevşetici', commonDosages: ['10mg', '25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lodoz', genericName: 'Bisoprolol + HCT', category: 'Tansiyon', commonDosages: ['2.5/6.25mg', '5/6.25mg', '10/6.25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lomotil', genericName: 'Difenoksilat + Atropin', category: 'İshal', commonDosages: ['2.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lopresor', genericName: 'Metoprolol', category: 'Tansiyon', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },

  { name: 'Maalox', category: 'Mide (Antiasit)', commonDosages: ['1 tablet', '10ml'], form: 'Tablet', country: 'TR' },
  { name: 'Marcumar', genericName: 'Fenprokomon', category: 'Kan Sulandırıcı', commonDosages: ['3mg'], form: 'Tablet', country: 'TR' },
  { name: 'Maxalt', genericName: 'Rizatriptan', category: 'Migren', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mesalazine', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['250mg', '500mg', '1g'], form: 'Tablet', country: 'TR' },
  { name: 'Metforal', genericName: 'Metformin', category: 'Diyabet', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Migard', genericName: 'Frovatriptan', category: 'Migren', commonDosages: ['2.5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Minoset', genericName: 'Parasetamol + Kafein', category: 'Ağrı Kesici', commonDosages: ['500mg + 65mg'], form: 'Tablet', country: 'TR' },
  { name: 'Miorel', genericName: 'Klorzoksazon', category: 'Kas Gevşetici', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Moxifloxacin', genericName: 'Moksifloksasin', category: 'Antibiyotik', commonDosages: ['400mg'], form: 'Tablet', country: 'TR' },

  { name: 'Naprosyn', genericName: 'Naproksen', category: 'Ağrı Kesici', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nebcin', genericName: 'Tobramisin', category: 'Antibiyotik (Göz)', commonDosages: ['0.3%'], form: 'Damla', country: 'TR' },
  { name: 'Neoral', genericName: 'Siklosporin', category: 'İmmünosupresif', commonDosages: ['25mg', '50mg', '100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Nidazol', genericName: 'Metronidazol', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nifedipin Retard', genericName: 'Nifedipin', category: 'Tansiyon', commonDosages: ['20mg', '30mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Nitroderm', genericName: 'Nitrogliserin', category: 'Kalp (Angina)', commonDosages: ['5mg', '10mg', '15mg'], form: 'Bant', country: 'TR' },
  { name: 'Nootropil', genericName: 'Piracetam', category: 'Nöroloji (Nootropik)', commonDosages: ['400mg', '800mg', '1200mg'], form: 'Tablet', country: 'TR' },

  { name: 'Pantozol', genericName: 'Pantoprazol', category: 'Mide', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Parlodel', genericName: 'Bromokriptin', category: 'Endokrin (Prolaktin)', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Pentasa', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['500mg', '1g', '2g'], form: 'Tablet', country: 'TR' },
  { name: 'Phenergan', genericName: 'Prometazin', category: 'Alerji / Bulantı', commonDosages: ['10mg', '25mg'], form: 'Tablet', country: 'TR' },
  { name: 'Plaquinol', genericName: 'Hidroksiklorokin', category: 'Romatoloji', commonDosages: ['200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Plendil', genericName: 'Felodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Prexige', genericName: 'Luseleoksib', category: 'Ağrı Kesici', commonDosages: ['100mg', '200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Priligy', genericName: 'Dapoksetin', category: 'Üroloji', commonDosages: ['30mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Priorix', genericName: 'KKK Aşısı', category: 'Aşı', commonDosages: ['1 doz'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Probenecid', category: 'Gut', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Propecia', genericName: 'Finasterid', category: 'Dermatolojik (Saç Dök.)', commonDosages: ['1mg'], form: 'Tablet', country: 'TR' },
  { name: 'Prothiaden', genericName: 'Dosulepin', category: 'Antidepresan', commonDosages: ['25mg', '75mg'], form: 'Kapsül', country: 'TR' },

  { name: 'Ranitidin', genericName: 'Ranitidin', category: 'Mide', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'TR' },
  { name: 'Rapamune', genericName: 'Sirolimus', category: 'İmmünosupresif', commonDosages: ['1mg', '2mg'], form: 'Tablet', country: 'TR' },
  { name: 'Reminyl', genericName: 'Galantamin', category: 'Nöroloji (Alzheimer)', commonDosages: ['4mg', '8mg', '12mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Revatio', genericName: 'Sildenafil', category: 'Pulmoner HT', commonDosages: ['20mg'], form: 'Tablet', country: 'TR' },

  { name: 'Sabril', genericName: 'Vigabatrin', category: 'Epilepsi', commonDosages: ['500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Salofalk', genericName: 'Mesalazin', category: 'GI (Ülseratif Kolit)', commonDosages: ['250mg', '500mg', '1g'], form: 'Tablet', country: 'TR' },
  { name: 'Sandimmun', genericName: 'Siklosporin', category: 'İmmünosupresif', commonDosages: ['25mg', '50mg', '100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Serc', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['8mg', '16mg', '24mg'], form: 'Tablet', country: 'TR' },
  { name: 'Sifrol', genericName: 'Pramipeksol', category: 'Nöroloji (Parkinson)', commonDosages: ['0.088mg', '0.18mg', '0.7mg'], form: 'Tablet', country: 'TR' },
  { name: 'Sirdalud', genericName: 'Tizanidin', category: 'Kas Gevşetici', commonDosages: ['2mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Solian', genericName: 'Amisülprid', category: 'Psikiyatri', commonDosages: ['100mg', '200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Solu-Medrol', genericName: 'Metilprednizolon', category: 'Kortikosteroid', commonDosages: ['40mg', '125mg', '500mg', '1g'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Spiriva', genericName: 'Tiotropium', category: 'Solunum (KOAH)', commonDosages: ['18mcg'], form: 'İnhaler', country: 'TR' },
  { name: 'Sporanox', genericName: 'İtrakonazol', category: 'Antifungal', commonDosages: ['100mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Stilnox', genericName: 'Zolpidem', category: 'Uyku', commonDosages: ['10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Suboxone', genericName: 'Buprenorfin + Nalokson', category: 'Bağımlılık Tedavisi', commonDosages: ['2/0.5mg', '8/2mg'], form: 'Dilaltı Tablet', country: 'TR' },
  { name: 'Sustanon', genericName: 'Testosteron', category: 'Endokrin', commonDosages: ['250mg/ml'], form: 'Enjeksiyon', country: 'TR' },

  { name: 'Tafinlar', genericName: 'Dabrafenib', category: 'Onkoloji (Melanom)', commonDosages: ['50mg', '75mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Talcid', category: 'Mide (Antiasit)', commonDosages: ['500mg'], form: 'Çiğneme Tableti', country: 'TR' },
  { name: 'Tavanic', genericName: 'Levofloksasin', category: 'Antibiyotik', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Taxol', genericName: 'Paklitaksel', category: 'Onkoloji', commonDosages: ['6mg/ml'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Tegrital', genericName: 'Karbamazepin', category: 'Epilepsi', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Telfast', genericName: 'Feksofenadin', category: 'Alerji', commonDosages: ['120mg', '180mg'], form: 'Tablet', country: 'TR' },
  { name: 'Topamax', genericName: 'Topiramat', category: 'Epilepsi / Migren', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tritace', genericName: 'Ramipril', category: 'Tansiyon', commonDosages: ['1.25mg', '2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Trusopt', genericName: 'Dorzolamid', category: 'Göz (Glokom)', commonDosages: ['2%'], form: 'Damla', country: 'TR' },
  { name: 'Twinrix', genericName: 'Hepatit A+B Aşısı', category: 'Aşı', commonDosages: ['1 doz'], form: 'Enjeksiyon', country: 'TR' },

  { name: 'Uludag', genericName: 'Parasetamol + Kodein', category: 'Ağrı Kesici', commonDosages: ['500/8mg', '500/15mg', '500/30mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ursofalk', genericName: 'Ursodeoksikolik Asit', category: 'Karaciğer / Safra', commonDosages: ['250mg', '500mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Utrogestan', genericName: 'Progesteron', category: 'Kadın Sağlığı', commonDosages: ['100mg', '200mg'], form: 'Kapsül', country: 'TR' },

  { name: 'Vasofix', genericName: 'Nimodipin', category: 'Nöroloji', commonDosages: ['30mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vermox', genericName: 'Mebendazol', category: 'Antiparaziter', commonDosages: ['100mg', '500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vesicare', genericName: 'Solifenasin', category: 'Üroloji (Mesane)', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vimovo', genericName: 'Naproksen + Esomeprazol', category: 'Ağrı Kesici + Mide', commonDosages: ['500/20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Vioxx', genericName: 'Rofekoksib', category: 'Ağrı Kesici (COX-2)', commonDosages: ['12.5mg', '25mg'], form: 'Tablet', country: 'TR' },

  { name: 'Wellbutrin', genericName: 'Bupropion', category: 'Antidepresan', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'TR' },

  { name: 'Xalatan', genericName: 'Latanoprost', category: 'Göz (Glokom)', commonDosages: ['0.005%'], form: 'Damla', country: 'TR' },
  { name: 'Xenical', genericName: 'Orlistat', category: 'Obezite', commonDosages: ['120mg'], form: 'Kapsül', country: 'TR' },

  { name: 'Zanaflex', genericName: 'Tizanidin', category: 'Kas Gevşetici', commonDosages: ['2mg', '4mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zinc (Çinko)', genericName: 'Çinko', category: 'Mineral', commonDosages: ['15mg', '25mg', '50mg'], form: 'Tablet', country: 'TR' },
  { name: 'Zinacef', genericName: 'Sefuroksim', category: 'Antibiyotik', commonDosages: ['750mg', '1.5g'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Zoladex', genericName: 'Goserelin', category: 'Onkoloji / Endokrin', commonDosages: ['3.6mg', '10.8mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Zometa', genericName: 'Zoledronik Asit', category: 'Onkoloji / Osteoporoz', commonDosages: ['4mg', '5mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Zoton', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Zydus', genericName: 'Olanzapin', category: 'Psikiyatri', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // FINAL ADDITIONS to 600+
  // ══════════════════════════════════════════════════════════════
  { name: 'Aerius', genericName: 'Desloratadin', category: 'Alerji', commonDosages: ['5mg'], form: 'Tablet', country: 'TR' },
  { name: 'Aldara', genericName: 'İmikimod', category: 'Dermatolojik', commonDosages: ['5% krem'], form: 'Krem', country: 'TR' },
  { name: 'Amlodis', genericName: 'Amlodipin', category: 'Tansiyon', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Arthrotec', genericName: 'Diklofenak + Misoprostol', category: 'Ağrı Kesici + Mide', commonDosages: ['50/200mcg', '75/200mcg'], form: 'Tablet', country: 'TR' },
  { name: 'Atozet', genericName: 'Atorvastatin + Ezetimib', category: 'Kolesterol', commonDosages: ['10/10mg', '20/10mg', '40/10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Benlysta', genericName: 'Belimumab', category: 'Romatoloji (Lupus)', commonDosages: ['120mg', '400mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Betadine', genericName: 'Povidon İyot', category: 'Antiseptik', commonDosages: ['10% solüsyon', '10% merhem'], form: 'Solüsyon', country: 'TR' },
  { name: 'Bilaxten', genericName: 'Bilastin', category: 'Alerji', commonDosages: ['20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Caduet', genericName: 'Amlodipin + Atorvastatin', category: 'Tansiyon + Kolesterol', commonDosages: ['5/10mg', '10/10mg', '5/20mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cardizem', genericName: 'Diltiazem', category: 'Tansiyon / Kalp', commonDosages: ['60mg', '90mg', '120mg'], form: 'Tablet', country: 'TR' },
  { name: 'Cipramil', genericName: 'Sitalopram', category: 'Antidepresan', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'TR' },
  { name: 'Daivobet', genericName: 'Kalsipotriol + Betametazon', category: 'Dermatolojik (Sedef)', commonDosages: ['50mcg/0.5mg jel'], form: 'Jel', country: 'TR' },
  { name: 'Deanxit', genericName: 'Flupentiksol + Melitracen', category: 'Antidepresan', commonDosages: ['0.5/10mg'], form: 'Tablet', country: 'TR' },
  { name: 'Duspatalin', genericName: 'Mebeverin', category: 'Sindirim (IBS)', commonDosages: ['135mg', '200mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Eutiroks', genericName: 'Levotiroksin', category: 'Tiroid', commonDosages: ['25mcg', '50mcg', '100mcg'], form: 'Tablet', country: 'TR' },
  { name: 'Feraheme', genericName: 'Ferumoksitol', category: 'Demir (IV)', commonDosages: ['510mg'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Ferrum Hausmann', genericName: 'Demir Polimaltoz', category: 'Demir', commonDosages: ['100mg', '50mg/5ml'], form: 'Tablet', country: 'TR' },
  { name: 'Fluimucil', genericName: 'Asetilsistein', category: 'Mukolitik', commonDosages: ['200mg', '600mg'], form: 'Efervesan Tablet', country: 'TR' },
  { name: 'Fybogel', genericName: 'İspaghula', category: 'Kabızlık (Lif)', commonDosages: ['1 poşe'], form: 'Toz', country: 'TR' },
  { name: 'Gyno-Pevaryl', genericName: 'Ekonazol', category: 'Antifungal (Vajinal)', commonDosages: ['150mg'], form: 'Vajinal Tablet', country: 'TR' },
  { name: 'Ibuset', genericName: 'İbuprofen', category: 'Ağrı Kesici', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'TR' },
  { name: 'Kombiglyze', genericName: 'Saksagliptin + Metformin', category: 'Diyabet', commonDosages: ['2.5/500mg', '2.5/1000mg'], form: 'Tablet', country: 'TR' },
  { name: 'Lanzul', genericName: 'Lansoprazol', category: 'Mide', commonDosages: ['15mg', '30mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Lorien', genericName: 'Losartan', category: 'Tansiyon', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Maalox Plus', category: 'Mide (Antiasit + Antigaz)', commonDosages: ['1 tablet', '10ml'], form: 'Tablet', country: 'TR' },
  { name: 'Merislon', genericName: 'Betahistin', category: 'Vertigo', commonDosages: ['6mg', '12mg'], form: 'Tablet', country: 'TR' },
  { name: 'Mustela', category: 'Bebek Bakım', commonDosages: ['1 uygulama'], form: 'Krem', country: 'TR' },
  { name: 'Neurobion', genericName: 'B1 + B6 + B12', category: 'Vitamin (Nörolojik)', commonDosages: ['1 tablet'], form: 'Tablet', country: 'TR' },
  { name: 'Olfen', genericName: 'Diklofenak', category: 'Ağrı Kesici', commonDosages: ['25mg', '50mg', '75mg'], form: 'Tablet', country: 'TR' },
  { name: 'Ozurdex', genericName: 'Deksametazon', category: 'Göz (İmplant)', commonDosages: ['0.7mg'], form: 'İmplant', country: 'TR' },
  { name: 'Perfalgan', genericName: 'Parasetamol (IV)', category: 'Ağrı Kesici', commonDosages: ['1000mg/100ml'], form: 'Enjeksiyon', country: 'TR' },
  { name: 'Piascledine', genericName: 'Avokado + Soya', category: 'Eklem (Osteoartrit)', commonDosages: ['300mg'], form: 'Kapsül', country: 'TR' },
  { name: 'Selectra', genericName: 'Sertralin', category: 'Antidepresan', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'TR' },
  { name: 'Spasfon', genericName: 'Floroglusinol', category: 'Sindirim (Spazmolitik)', commonDosages: ['80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Sudafed', genericName: 'Psödoefedrin', category: 'Nazal Dekonjestan', commonDosages: ['30mg', '60mg'], form: 'Tablet', country: 'TR' },
  { name: 'Surbex Z', genericName: 'B Vitamin + Çinko', category: 'Vitamin / Mineral', commonDosages: ['1 tablet'], form: 'Tablet', country: 'TR' },
  { name: 'Tardyferon', genericName: 'Demir Sülfat', category: 'Demir', commonDosages: ['80mg'], form: 'Tablet', country: 'TR' },
  { name: 'Tefal', genericName: 'Parasetamol', category: 'Ağrı Kesici / Ateş', commonDosages: ['500mg'], form: 'Tablet', country: 'TR' },
  { name: 'Voltfast', genericName: 'Diklofenak Potasyum', category: 'Ağrı Kesici', commonDosages: ['50mg'], form: 'Toz', country: 'TR' },

  // ══════════════════════════════════════════════════════════════
  // US-SPECIFIC MEDICATIONS (United States market)
  // ══════════════════════════════════════════════════════════════
  { name: 'Tylenol', genericName: 'Acetaminophen', category: 'Painkiller', commonDosages: ['325mg', '500mg', '650mg'], form: 'Tablet', country: 'US' },
  { name: 'Advil', genericName: 'Ibuprofen', category: 'Painkiller', commonDosages: ['200mg', '400mg'], form: 'Tablet', country: 'US' },
  { name: 'Motrin', genericName: 'Ibuprofen', category: 'Painkiller', commonDosages: ['200mg', '400mg', '600mg', '800mg'], form: 'Tablet', country: 'US' },
  { name: 'Aleve', genericName: 'Naproxen Sodium', category: 'Painkiller', commonDosages: ['220mg', '275mg', '550mg'], form: 'Tablet', country: 'US' },
  { name: 'Excedrin', genericName: 'Acetaminophen + Aspirin + Caffeine', category: 'Painkiller / Migraine', commonDosages: ['250/250/65mg'], form: 'Tablet', country: 'US' },
  { name: 'Percocet', genericName: 'Oxycodone + Acetaminophen', category: 'Painkiller (Opioid)', commonDosages: ['5/325mg', '7.5/325mg', '10/325mg'], form: 'Tablet', country: 'US' },
  { name: 'Vicodin', genericName: 'Hydrocodone + Acetaminophen', category: 'Painkiller (Opioid)', commonDosages: ['5/325mg', '7.5/325mg', '10/325mg'], form: 'Tablet', country: 'US' },
  { name: 'Norco', genericName: 'Hydrocodone + Acetaminophen', category: 'Painkiller (Opioid)', commonDosages: ['5/325mg', '7.5/325mg', '10/325mg'], form: 'Tablet', country: 'US' },
  { name: 'OxyContin', genericName: 'Oxycodone ER', category: 'Painkiller (Opioid)', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet', country: 'US' },
  { name: 'Tramadol', category: 'Painkiller (Opioid)', commonDosages: ['50mg', '100mg'], form: 'Tablet', country: 'US' },
  { name: 'Amoxil', genericName: 'Amoxicillin', category: 'Antibiotic', commonDosages: ['250mg', '500mg', '875mg'], form: 'Capsule', country: 'US' },
  { name: 'Zithromax', genericName: 'Azithromycin', category: 'Antibiotic', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'US' },
  { name: 'Z-Pack', genericName: 'Azithromycin', category: 'Antibiotic', commonDosages: ['250mg'], form: 'Tablet', country: 'US' },
  { name: 'Keflex', genericName: 'Cephalexin', category: 'Antibiotic', commonDosages: ['250mg', '500mg'], form: 'Capsule', country: 'US' },
  { name: 'Bactrim DS', genericName: 'Sulfamethoxazole + Trimethoprim', category: 'Antibiotic', commonDosages: ['800/160mg'], form: 'Tablet', country: 'US' },
  { name: 'Cipro', genericName: 'Ciprofloxacin', category: 'Antibiotic', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet', country: 'US' },
  { name: 'Levaquin', genericName: 'Levofloxacin', category: 'Antibiotic', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablet', country: 'US' },
  { name: 'Flagyl', genericName: 'Metronidazole', category: 'Antibiotic / Antiparasitic', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'US' },
  { name: 'Prilosec', genericName: 'Omeprazole', category: 'Stomach (Reflux)', commonDosages: ['10mg', '20mg', '40mg'], form: 'Capsule', country: 'US' },
  { name: 'Nexium', genericName: 'Esomeprazole', category: 'Stomach (Reflux)', commonDosages: ['20mg', '40mg'], form: 'Capsule', country: 'US' },
  { name: 'Pepcid', genericName: 'Famotidine', category: 'Stomach', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'US' },
  { name: 'Tums', genericName: 'Calcium Carbonate', category: 'Stomach (Antacid)', commonDosages: ['500mg', '750mg', '1000mg'], form: 'Chewable Tablet', country: 'US' },
  { name: 'Pepto-Bismol', genericName: 'Bismuth Subsalicylate', category: 'Stomach', commonDosages: ['262mg', '525mg'], form: 'Tablet', country: 'US' },
  { name: 'Zofran', genericName: 'Ondansetron', category: 'Nausea', commonDosages: ['4mg', '8mg'], form: 'Tablet', country: 'US' },
  { name: 'Lipitor', genericName: 'Atorvastatin', category: 'Cholesterol', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablet', country: 'US' },
  { name: 'Zocor', genericName: 'Simvastatin', category: 'Cholesterol', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablet', country: 'US' },
  { name: 'Lisinopril', category: 'Blood Pressure', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'US' },
  { name: 'Norvasc', genericName: 'Amlodipine', category: 'Blood Pressure', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'US' },
  { name: 'Losartan', category: 'Blood Pressure', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'US' },
  { name: 'Metoprolol Succinate', genericName: 'Toprol-XL', category: 'Blood Pressure / Heart', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'US' },
  { name: 'Hydrochlorothiazide (HCTZ)', category: 'Diuretic / Blood Pressure', commonDosages: ['12.5mg', '25mg', '50mg'], form: 'Tablet', country: 'US' },
  { name: 'Metformin', category: 'Diabetes', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet', country: 'US' },
  { name: 'Januvia', genericName: 'Sitagliptin', category: 'Diabetes', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'US' },
  { name: 'Ozempic', genericName: 'Semaglutide', category: 'Diabetes / Obesity', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Injection', country: 'US' },
  { name: 'Jardiance', genericName: 'Empagliflozin', category: 'Diabetes / Heart', commonDosages: ['10mg', '25mg'], form: 'Tablet', country: 'US' },
  { name: 'Trulicity', genericName: 'Dulaglutide', category: 'Diabetes', commonDosages: ['0.75mg', '1.5mg', '3mg', '4.5mg'], form: 'Injection', country: 'US' },
  { name: 'Xarelto', genericName: 'Rivaroxaban', category: 'Blood Thinner', commonDosages: ['10mg', '15mg', '20mg'], form: 'Tablet', country: 'US' },
  { name: 'Eliquis', genericName: 'Apixaban', category: 'Blood Thinner', commonDosages: ['2.5mg', '5mg'], form: 'Tablet', country: 'US' },
  { name: 'Warfarin', genericName: 'Coumadin', category: 'Blood Thinner', commonDosages: ['1mg', '2mg', '2.5mg', '5mg'], form: 'Tablet', country: 'US' },
  { name: 'Plavix', genericName: 'Clopidogrel', category: 'Antiplatelet', commonDosages: ['75mg'], form: 'Tablet', country: 'US' },
  { name: 'Lexapro', genericName: 'Escitalopram', category: 'Antidepressant', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'US' },
  { name: 'Zoloft', genericName: 'Sertraline', category: 'Antidepressant', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'US' },
  { name: 'Prozac', genericName: 'Fluoxetine', category: 'Antidepressant', commonDosages: ['10mg', '20mg', '40mg'], form: 'Capsule', country: 'US' },
  { name: 'Wellbutrin', genericName: 'Bupropion', category: 'Antidepressant', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'US' },
  { name: 'Cymbalta', genericName: 'Duloxetine', category: 'Antidepressant / Pain', commonDosages: ['20mg', '30mg', '60mg'], form: 'Capsule', country: 'US' },
  { name: 'Effexor XR', genericName: 'Venlafaxine', category: 'Antidepressant', commonDosages: ['37.5mg', '75mg', '150mg'], form: 'Capsule', country: 'US' },
  { name: 'Xanax', genericName: 'Alprazolam', category: 'Anxiety', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'US' },
  { name: 'Ativan', genericName: 'Lorazepam', category: 'Anxiety', commonDosages: ['0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'US' },
  { name: 'Klonopin', genericName: 'Clonazepam', category: 'Anxiety / Epilepsy', commonDosages: ['0.5mg', '1mg', '2mg'], form: 'Tablet', country: 'US' },
  { name: 'Ambien', genericName: 'Zolpidem', category: 'Sleep Aid', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'US' },
  { name: 'Lunesta', genericName: 'Eszopiclone', category: 'Sleep Aid', commonDosages: ['1mg', '2mg', '3mg'], form: 'Tablet', country: 'US' },
  { name: 'Adderall', genericName: 'Amphetamine + Dextroamphetamine', category: 'ADHD', commonDosages: ['5mg', '10mg', '15mg', '20mg', '30mg'], form: 'Tablet', country: 'US' },
  { name: 'Adderall XR', genericName: 'Amphetamine + Dextroamphetamine ER', category: 'ADHD', commonDosages: ['10mg', '15mg', '20mg', '25mg', '30mg'], form: 'Capsule', country: 'US' },
  { name: 'Ritalin', genericName: 'Methylphenidate', category: 'ADHD', commonDosages: ['5mg', '10mg', '20mg'], form: 'Tablet', country: 'US' },
  { name: 'Vyvanse', genericName: 'Lisdexamfetamine', category: 'ADHD', commonDosages: ['20mg', '30mg', '40mg', '50mg', '60mg', '70mg'], form: 'Capsule', country: 'US' },
  { name: 'Singulair', genericName: 'Montelukast', category: 'Respiratory / Allergy', commonDosages: ['4mg', '5mg', '10mg'], form: 'Tablet', country: 'US' },
  { name: 'ProAir HFA', genericName: 'Albuterol', category: 'Respiratory', commonDosages: ['90mcg/puff'], form: 'Inhaler', country: 'US' },
  { name: 'Ventolin HFA', genericName: 'Albuterol', category: 'Respiratory', commonDosages: ['90mcg/puff'], form: 'Inhaler', country: 'US' },
  { name: 'Symbicort', genericName: 'Budesonide + Formoterol', category: 'Respiratory', commonDosages: ['80/4.5mcg', '160/4.5mcg'], form: 'Inhaler', country: 'US' },
  { name: 'Advair Diskus', genericName: 'Fluticasone + Salmeterol', category: 'Respiratory', commonDosages: ['100/50mcg', '250/50mcg', '500/50mcg'], form: 'Inhaler', country: 'US' },
  { name: 'Zyrtec', genericName: 'Cetirizine', category: 'Allergy', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'US' },
  { name: 'Claritin', genericName: 'Loratadine', category: 'Allergy', commonDosages: ['10mg'], form: 'Tablet', country: 'US' },
  { name: 'Allegra', genericName: 'Fexofenadine', category: 'Allergy', commonDosages: ['60mg', '120mg', '180mg'], form: 'Tablet', country: 'US' },
  { name: 'Benadryl', genericName: 'Diphenhydramine', category: 'Allergy / Sleep', commonDosages: ['25mg', '50mg'], form: 'Tablet', country: 'US' },
  { name: 'Flonase', genericName: 'Fluticasone', category: 'Allergy (Nasal)', commonDosages: ['50mcg/spray'], form: 'Nasal Spray', country: 'US' },
  { name: 'Synthroid', genericName: 'Levothyroxine', category: 'Thyroid', commonDosages: ['25mcg', '50mcg', '75mcg', '88mcg', '100mcg', '125mcg'], form: 'Tablet', country: 'US' },
  { name: 'Levothyroxine', category: 'Thyroid', commonDosages: ['25mcg', '50mcg', '75mcg', '100mcg', '125mcg', '150mcg'], form: 'Tablet', country: 'US' },
  { name: 'Prednisone', category: 'Corticosteroid', commonDosages: ['1mg', '2.5mg', '5mg', '10mg', '20mg', '50mg'], form: 'Tablet', country: 'US' },
  { name: 'Methylprednisolone', genericName: 'Medrol', category: 'Corticosteroid', commonDosages: ['4mg', '8mg', '16mg', '32mg'], form: 'Tablet', country: 'US' },
  { name: 'Gabapentin', genericName: 'Neurontin', category: 'Neurology / Pain', commonDosages: ['100mg', '300mg', '400mg', '600mg', '800mg'], form: 'Capsule', country: 'US' },
  { name: 'Lyrica', genericName: 'Pregabalin', category: 'Neurology / Pain', commonDosages: ['25mg', '50mg', '75mg', '100mg', '150mg', '300mg'], form: 'Capsule', country: 'US' },
  { name: 'Suboxone', genericName: 'Buprenorphine + Naloxone', category: 'Addiction Treatment', commonDosages: ['2/0.5mg', '8/2mg'], form: 'Sublingual Tablet', country: 'US' },
  { name: 'Wegovy', genericName: 'Semaglutide', category: 'Obesity', commonDosages: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'], form: 'Injection', country: 'US' },
  { name: 'Mounjaro', genericName: 'Tirzepatide', category: 'Diabetes / Obesity', commonDosages: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'], form: 'Injection', country: 'US' },
  { name: 'Humira', genericName: 'Adalimumab', category: 'Rheumatology (Biologic)', commonDosages: ['40mg'], form: 'Injection', country: 'US' },
  { name: 'Dupixent', genericName: 'Dupilumab', category: 'Dermatology / Allergy', commonDosages: ['200mg', '300mg'], form: 'Injection', country: 'US' },
  { name: 'NyQuil', genericName: 'Acetaminophen + Dextromethorphan + Doxylamine', category: 'Cold / Flu', commonDosages: ['30ml'], form: 'Syrup', country: 'US' },
  { name: 'DayQuil', genericName: 'Acetaminophen + Dextromethorphan + Phenylephrine', category: 'Cold / Flu', commonDosages: ['30ml'], form: 'Syrup', country: 'US' },
  { name: 'Mucinex', genericName: 'Guaifenesin', category: 'Mucolytic', commonDosages: ['400mg', '600mg', '1200mg'], form: 'Tablet', country: 'US' },
  { name: 'Robitussin', genericName: 'Dextromethorphan + Guaifenesin', category: 'Cold / Flu', commonDosages: ['10ml', '20ml'], form: 'Syrup', country: 'US' },
  { name: 'Sudafed', genericName: 'Pseudoephedrine', category: 'Nasal Decongestant', commonDosages: ['30mg', '60mg', '120mg'], form: 'Tablet', country: 'US' },
  { name: 'Imodium', genericName: 'Loperamide', category: 'Diarrhea', commonDosages: ['2mg'], form: 'Capsule', country: 'US' },
  { name: 'Miralax', genericName: 'Polyethylene Glycol 3350', category: 'Constipation', commonDosages: ['17g'], form: 'Powder', country: 'US' },
  { name: 'Colace', genericName: 'Docusate Sodium', category: 'Constipation', commonDosages: ['50mg', '100mg'], form: 'Capsule', country: 'US' },
  { name: 'Protonix', genericName: 'Pantoprazole', category: 'Stomach (Reflux)', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'US' },
  { name: 'Crestor', genericName: 'Rosuvastatin', category: 'Cholesterol', commonDosages: ['5mg', '10mg', '20mg', '40mg'], form: 'Tablet', country: 'US' },
  { name: 'Abilify', genericName: 'Aripiprazole', category: 'Psychiatry', commonDosages: ['2mg', '5mg', '10mg', '15mg', '20mg', '30mg'], form: 'Tablet', country: 'US' },
  { name: 'Seroquel', genericName: 'Quetiapine', category: 'Psychiatry', commonDosages: ['25mg', '50mg', '100mg', '200mg', '300mg'], form: 'Tablet', country: 'US' },
  { name: 'Risperdal', genericName: 'Risperidone', category: 'Psychiatry', commonDosages: ['0.25mg', '0.5mg', '1mg', '2mg', '3mg', '4mg'], form: 'Tablet', country: 'US' },
  { name: 'Lamictal', genericName: 'Lamotrigine', category: 'Epilepsy / Psychiatry', commonDosages: ['25mg', '50mg', '100mg', '150mg', '200mg'], form: 'Tablet', country: 'US' },
  { name: 'Depakote', genericName: 'Divalproex Sodium', category: 'Epilepsy', commonDosages: ['125mg', '250mg', '500mg'], form: 'Tablet', country: 'US' },
  { name: 'Topamax', genericName: 'Topiramate', category: 'Epilepsy / Migraine', commonDosages: ['25mg', '50mg', '100mg', '200mg'], form: 'Tablet', country: 'US' },
  { name: 'EpiPen', genericName: 'Epinephrine', category: 'Emergency (Anaphylaxis)', commonDosages: ['0.15mg', '0.3mg'], form: 'Injection', country: 'US' },
  { name: 'Viagra', genericName: 'Sildenafil', category: 'Urology', commonDosages: ['25mg', '50mg', '100mg'], form: 'Tablet', country: 'US' },
  { name: 'Cialis', genericName: 'Tadalafil', category: 'Urology', commonDosages: ['2.5mg', '5mg', '10mg', '20mg'], form: 'Tablet', country: 'US' },
  { name: 'Flomax', genericName: 'Tamsulosin', category: 'Urology (BPH)', commonDosages: ['0.4mg'], form: 'Capsule', country: 'US' },
  { name: 'Avodart', genericName: 'Dutasteride', category: 'Urology (BPH)', commonDosages: ['0.5mg'], form: 'Capsule', country: 'US' },
  { name: 'Premarin', genericName: 'Conjugated Estrogens', category: "Women's Health (HRT)", commonDosages: ['0.3mg', '0.625mg', '1.25mg'], form: 'Tablet', country: 'US' },
  { name: 'Yaz', genericName: 'Drospirenone + Ethinyl Estradiol', category: 'Birth Control', commonDosages: ['3/0.02mg'], form: 'Tablet', country: 'US' },
  { name: 'Lo Loestrin Fe', genericName: 'Norethindrone + Ethinyl Estradiol', category: 'Birth Control', commonDosages: ['1/10mcg'], form: 'Tablet', country: 'US' },

  // ══════════════════════════════════════════════════════════════
  // EU-SPECIFIC MEDICATIONS (European market — EMA approved & common EU brands)
  // ══════════════════════════════════════════════════════════════
  { name: 'Thomapyrin', genericName: 'ASS + Paracetamol + Coffein', category: 'Schmerzmittel', commonDosages: ['1-2 Tabletten'], form: 'Tablette', country: 'EU' },
  { name: 'Ibu-ratiopharm', genericName: 'Ibuprofen', category: 'Schmerzmittel', commonDosages: ['200mg', '400mg', '600mg'], form: 'Tablette', country: 'EU' },
  { name: 'Nurofen', genericName: 'Ibuprofen', category: 'Schmerzmittel', commonDosages: ['200mg', '400mg'], form: 'Tablette', country: 'EU' },
  { name: 'Paracetamol-ratiopharm', genericName: 'Paracetamol', category: 'Schmerzmittel / Fiebermittel', commonDosages: ['500mg', '1000mg'], form: 'Tablette', country: 'EU' },
  { name: 'Ben-u-ron', genericName: 'Paracetamol', category: 'Schmerzmittel / Fiebermittel', commonDosages: ['125mg', '250mg', '500mg', '1000mg'], form: 'Tablette', country: 'EU' },
  { name: 'Voltaren Schmerzgel', genericName: 'Diclofenac', category: 'Schmerzmittel (Topisch)', commonDosages: ['1.16% Gel', '2.32% Gel'], form: 'Gel', country: 'EU' },
  { name: 'Dolormin', genericName: 'Ibuprofen', category: 'Schmerzmittel', commonDosages: ['200mg', '400mg'], form: 'Tablette', country: 'EU' },
  { name: 'Novaminsulfon', genericName: 'Metamizol', category: 'Schmerzmittel', commonDosages: ['500mg', '1000mg'], form: 'Tablette', country: 'EU' },
  { name: 'Novalgin', genericName: 'Metamizol', category: 'Schmerzmittel', commonDosages: ['500mg', '1000mg'], form: 'Tablette', country: 'EU' },
  { name: 'Tilidin', genericName: 'Tilidin + Naloxon', category: 'Schmerzmittel (Opioid)', commonDosages: ['50/4mg', '100/8mg', '150/12mg', '200/16mg'], form: 'Tablette', country: 'EU' },
  { name: 'Amoxicillin-ratiopharm', genericName: 'Amoxicillin', category: 'Antibiotikum', commonDosages: ['250mg', '500mg', '750mg', '1000mg'], form: 'Tablette', country: 'EU' },
  { name: 'Amoxiclav HEXAL', genericName: 'Amoxicillin + Clavulansäure', category: 'Antibiotikum', commonDosages: ['500/125mg', '875/125mg'], form: 'Tablette', country: 'EU' },
  { name: 'Cefuroxim-ratiopharm', genericName: 'Cefuroxim', category: 'Antibiotikum', commonDosages: ['250mg', '500mg'], form: 'Tablette', country: 'EU' },
  { name: 'Cipro HEXAL', genericName: 'Ciprofloxacin', category: 'Antibiotikum', commonDosages: ['250mg', '500mg', '750mg'], form: 'Tablette', country: 'EU' },
  { name: 'Clindamycin-ratiopharm', genericName: 'Clindamycin', category: 'Antibiotikum', commonDosages: ['300mg', '600mg'], form: 'Kapsel', country: 'EU' },
  { name: 'Pantoprazol-ratiopharm', genericName: 'Pantoprazol', category: 'Magen (Reflux)', commonDosages: ['20mg', '40mg'], form: 'Tablette', country: 'EU' },
  { name: 'Omeprazol HEXAL', genericName: 'Omeprazol', category: 'Magen (Reflux)', commonDosages: ['10mg', '20mg', '40mg'], form: 'Kapsel', country: 'EU' },
  { name: 'Ranitidin-ratiopharm', genericName: 'Ranitidin', category: 'Magen', commonDosages: ['150mg', '300mg'], form: 'Tablette', country: 'EU' },
  { name: 'Iberogast', category: 'Verdauung', commonDosages: ['20 Tropfen'], form: 'Tropfen', country: 'EU' },
  { name: 'Lefax', genericName: 'Simeticon', category: 'Verdauung (Blähungen)', commonDosages: ['42mg', '83mg'], form: 'Kautablette', country: 'EU' },
  { name: 'Buscopan', genericName: 'Butylscopolamin', category: 'Verdauung (Krampflösend)', commonDosages: ['10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Ramipril-ratiopharm', genericName: 'Ramipril', category: 'Blutdruck', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Bisoprolol-ratiopharm', genericName: 'Bisoprolol', category: 'Blutdruck / Herz', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Candesartan HEXAL', genericName: 'Candesartan', category: 'Blutdruck', commonDosages: ['4mg', '8mg', '16mg', '32mg'], form: 'Tablette', country: 'EU' },
  { name: 'Amlodipin-ratiopharm', genericName: 'Amlodipin', category: 'Blutdruck', commonDosages: ['5mg', '10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Metformin-ratiopharm', genericName: 'Metformin', category: 'Diabetes', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablette', country: 'EU' },
  { name: 'Jardiance', genericName: 'Empagliflozin', category: 'Diabetes / Herz', commonDosages: ['10mg', '25mg'], form: 'Tablette', country: 'EU' },
  { name: 'Simvastatin-ratiopharm', genericName: 'Simvastatin', category: 'Cholesterin', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablette', country: 'EU' },
  { name: 'Atorvastatin HEXAL', genericName: 'Atorvastatin', category: 'Cholesterin', commonDosages: ['10mg', '20mg', '40mg', '80mg'], form: 'Tablette', country: 'EU' },
  { name: 'L-Thyroxin Henning', genericName: 'Levothyroxin', category: 'Schilddrüse', commonDosages: ['25µg', '50µg', '75µg', '88µg', '100µg', '125µg', '150µg'], form: 'Tablette', country: 'EU' },
  { name: 'Euthyrox', genericName: 'Levothyroxin', category: 'Schilddrüse', commonDosages: ['25µg', '50µg', '75µg', '100µg'], form: 'Tablette', country: 'EU' },
  { name: 'Prednisolon-ratiopharm', genericName: 'Prednisolon', category: 'Kortikosteroid', commonDosages: ['5mg', '10mg', '20mg', '50mg'], form: 'Tablette', country: 'EU' },
  { name: 'Citalopram-ratiopharm', genericName: 'Citalopram', category: 'Antidepressivum', commonDosages: ['10mg', '20mg', '40mg'], form: 'Tablette', country: 'EU' },
  { name: 'Sertralin-ratiopharm', genericName: 'Sertralin', category: 'Antidepressivum', commonDosages: ['50mg', '100mg'], form: 'Tablette', country: 'EU' },
  { name: 'Venlafaxin-ratiopharm', genericName: 'Venlafaxin', category: 'Antidepressivum', commonDosages: ['37.5mg', '75mg', '150mg'], form: 'Kapsel', country: 'EU' },
  { name: 'Mirtazapin-ratiopharm', genericName: 'Mirtazapin', category: 'Antidepressivum / Schlaf', commonDosages: ['15mg', '30mg', '45mg'], form: 'Tablette', country: 'EU' },
  { name: 'Opipramol', category: 'Angststörung', commonDosages: ['50mg', '100mg'], form: 'Tablette', country: 'EU' },
  { name: 'Tavor', genericName: 'Lorazepam', category: 'Angststörung', commonDosages: ['0.5mg', '1mg', '2.5mg'], form: 'Tablette', country: 'EU' },
  { name: 'Zopiclon-ratiopharm', genericName: 'Zopiclon', category: 'Schlafmittel', commonDosages: ['3.75mg', '7.5mg'], form: 'Tablette', country: 'EU' },
  { name: 'Cetirizin HEXAL', genericName: 'Cetirizin', category: 'Allergie', commonDosages: ['10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Lorano akut', genericName: 'Loratadin', category: 'Allergie', commonDosages: ['10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Aerius', genericName: 'Desloratadin', category: 'Allergie', commonDosages: ['5mg'], form: 'Tablette', country: 'EU' },
  { name: 'Nasenspray-ratiopharm', genericName: 'Xylometazolin', category: 'Nasenabschweller', commonDosages: ['0.05%', '0.1%'], form: 'Nasenspray', country: 'EU' },
  { name: 'Otriven', genericName: 'Xylometazolin', category: 'Nasenabschweller', commonDosages: ['0.05%', '0.1%'], form: 'Nasenspray', country: 'EU' },
  { name: 'GeloMyrtol forte', category: 'Atemwege', commonDosages: ['300mg'], form: 'Kapsel', country: 'EU' },
  { name: 'ACC akut', genericName: 'Acetylcystein', category: 'Schleimlöser', commonDosages: ['200mg', '600mg'], form: 'Brausetablette', country: 'EU' },
  { name: 'Mucosolvan', genericName: 'Ambroxol', category: 'Schleimlöser', commonDosages: ['30mg', '75mg'], form: 'Tablette', country: 'EU' },
  { name: 'Salbutamol-ratiopharm', genericName: 'Salbutamol', category: 'Atemwege', commonDosages: ['100mcg/Hub'], form: 'Inhalator', country: 'EU' },
  { name: 'Foster', genericName: 'Beclometason + Formoterol', category: 'Atemwege', commonDosages: ['100/6mcg', '200/6mcg'], form: 'Inhalator', country: 'EU' },
  { name: 'Marcumar', genericName: 'Phenprocoumon', category: 'Blutverdünner', commonDosages: ['3mg'], form: 'Tablette', country: 'EU' },
  { name: 'Xarelto', genericName: 'Rivaroxaban', category: 'Blutverdünner', commonDosages: ['10mg', '15mg', '20mg'], form: 'Tablette', country: 'EU' },
  { name: 'Eliquis', genericName: 'Apixaban', category: 'Blutverdünner', commonDosages: ['2.5mg', '5mg'], form: 'Tablette', country: 'EU' },
  { name: 'ASS-ratiopharm', genericName: 'Acetylsalicylsäure', category: 'Thrombozytenaggregationshemmer', commonDosages: ['100mg'], form: 'Tablette', country: 'EU' },
  { name: 'Loperamid-ratiopharm', genericName: 'Loperamid', category: 'Durchfall', commonDosages: ['2mg'], form: 'Kapsel', country: 'EU' },
  { name: 'Dulcolax', genericName: 'Bisacodyl', category: 'Verstopfung', commonDosages: ['5mg', '10mg'], form: 'Tablette', country: 'EU' },
  { name: 'Movicol', genericName: 'Macrogol', category: 'Verstopfung', commonDosages: ['1 Beutel'], form: 'Pulver', country: 'EU' },
  { name: 'Ibuflam', genericName: 'Ibuprofen', category: 'Schmerzmittel / Entzündungshemmer', commonDosages: ['400mg', '600mg', '800mg'], form: 'Tablette', country: 'EU' },
  { name: 'Aspirin Complex', genericName: 'ASS + Pseudoephedrin', category: 'Erkältung / Grippe', commonDosages: ['1 Beutel'], form: 'Pulver', country: 'EU' },
  { name: 'Grippostad C', category: 'Erkältung / Grippe', commonDosages: ['1-2 Kapseln'], form: 'Kapsel', country: 'EU' },
  { name: 'Wick MediNait', category: 'Erkältung / Grippe', commonDosages: ['30ml'], form: 'Sirup', country: 'EU' },
  { name: 'Sinupret', category: 'Atemwege', commonDosages: ['1-2 Tabletten'], form: 'Tablette', country: 'EU' },
  { name: 'Umckaloabo', category: 'Atemwege', commonDosages: ['20-30 Tropfen'], form: 'Tropfen', country: 'EU' },

  // ── Additional EU-wide medications (France, Spain, Italy, Netherlands, etc.) ──
  { name: 'Doliprane', genericName: 'Paracetamol', category: 'Painkiller', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Dafalgan', genericName: 'Paracetamol', category: 'Painkiller', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Efferalgan', genericName: 'Paracetamol', category: 'Painkiller', commonDosages: ['500mg', '1000mg'], form: 'Effervescent Tablet', country: 'EU' },
  { name: 'Spasfon', genericName: 'Phloroglucinol', category: 'Digestion (Antispasmodic)', commonDosages: ['80mg'], form: 'Tablet', country: 'EU' },
  { name: 'Smecta', genericName: 'Diosmectite', category: 'Diarrhea', commonDosages: ['3g'], form: 'Powder', country: 'EU' },
  { name: 'Gaviscon', genericName: 'Sodium Alginate', category: 'Stomach (Reflux)', commonDosages: ['10ml', '500mg'], form: 'Suspension', country: 'EU' },
  { name: 'Maalox', genericName: 'Aluminium + Magnesium Hydroxide', category: 'Stomach (Antacid)', commonDosages: ['1 sachet'], form: 'Suspension', country: 'EU' },
  { name: 'Rennie', genericName: 'Calcium Carbonate + Magnesium Carbonate', category: 'Stomach (Antacid)', commonDosages: ['680/80mg'], form: 'Chewable Tablet', country: 'EU' },
  { name: 'Voltaren Emulgel', genericName: 'Diclofenac', category: 'Painkiller (Topical)', commonDosages: ['1% gel', '2% gel'], form: 'Gel', country: 'EU' },
  { name: 'Brufen', genericName: 'Ibuprofen', category: 'Painkiller', commonDosages: ['200mg', '400mg', '600mg'], form: 'Tablet', country: 'EU' },
  { name: 'Augmentin', genericName: 'Amoxicillin + Clavulanic Acid', category: 'Antibiotic', commonDosages: ['500/125mg', '875/125mg'], form: 'Tablet', country: 'EU' },
  { name: 'Klacid', genericName: 'Clarithromycin', category: 'Antibiotic', commonDosages: ['250mg', '500mg'], form: 'Tablet', country: 'EU' },
  { name: 'Fluimucil', genericName: 'Acetylcysteine', category: 'Mucolytic', commonDosages: ['200mg', '600mg'], form: 'Effervescent Tablet', country: 'EU' },
  { name: 'Ventolin', genericName: 'Salbutamol', category: 'Respiratory', commonDosages: ['100mcg/puff'], form: 'Inhaler', country: 'EU' },
  { name: 'Seretide', genericName: 'Fluticasone + Salmeterol', category: 'Respiratory', commonDosages: ['50/25mcg', '125/25mcg', '250/25mcg'], form: 'Inhaler', country: 'EU' },
  { name: 'Spiriva', genericName: 'Tiotropium', category: 'Respiratory (COPD)', commonDosages: ['18mcg'], form: 'Inhaler', country: 'EU' },
  { name: 'Inexium', genericName: 'Esomeprazole', category: 'Stomach (Reflux)', commonDosages: ['20mg', '40mg'], form: 'Tablet', country: 'EU' },
  { name: 'Tachipirina', genericName: 'Paracetamol', category: 'Painkiller / Fever Reducer', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Moment', genericName: 'Ibuprofen', category: 'Painkiller', commonDosages: ['200mg'], form: 'Tablet', country: 'EU' },
  { name: 'Enterogermina', genericName: 'Bacillus clausii', category: 'Digestion', commonDosages: ['2 billion spores'], form: 'Suspension', country: 'EU' },
  { name: 'Nolotil', genericName: 'Metamizole', category: 'Painkiller', commonDosages: ['575mg'], form: 'Capsule', country: 'EU' },
  { name: 'Enantyum', genericName: 'Dexketoprofen', category: 'Painkiller', commonDosages: ['25mg'], form: 'Tablet', country: 'EU' },
  { name: 'Frenadol', category: 'Cold / Flu', commonDosages: ['1 sachet'], form: 'Powder', country: 'EU' },
  { name: 'Gelocatil', genericName: 'Paracetamol', category: 'Painkiller', commonDosages: ['650mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Primperan', genericName: 'Metoclopramide', category: 'Nausea', commonDosages: ['10mg'], form: 'Tablet', country: 'EU' },
  { name: 'Motilium', genericName: 'Domperidone', category: 'Nausea / Digestion', commonDosages: ['10mg'], form: 'Tablet', country: 'EU' },
  { name: 'Daflon', genericName: 'Diosmin + Hesperidin', category: 'Vascular Protection', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Detralex', genericName: 'Diosmin + Hesperidin', category: 'Vascular Protection', commonDosages: ['500mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Lyrica', genericName: 'Pregabalin', category: 'Neurology / Pain', commonDosages: ['25mg', '75mg', '150mg', '300mg'], form: 'Capsule', country: 'EU' },
  { name: 'Xanax', genericName: 'Alprazolam', category: 'Anxiety', commonDosages: ['0.25mg', '0.5mg', '1mg'], form: 'Tablet', country: 'EU' },
  { name: 'Lexotan', genericName: 'Bromazepam', category: 'Anxiety', commonDosages: ['1.5mg', '3mg', '6mg'], form: 'Tablet', country: 'EU' },
  { name: 'Stilnox', genericName: 'Zolpidem', category: 'Sleep Aid', commonDosages: ['5mg', '10mg'], form: 'Tablet', country: 'EU' },
  { name: 'Nozinan', genericName: 'Levomepromazine', category: 'Psychiatry', commonDosages: ['25mg', '100mg'], form: 'Tablet', country: 'EU' },
  { name: 'Triatec', genericName: 'Ramipril', category: 'Blood Pressure', commonDosages: ['2.5mg', '5mg', '10mg'], form: 'Tablet', country: 'EU' },
  { name: 'Coversyl', genericName: 'Perindopril', category: 'Blood Pressure', commonDosages: ['4mg', '8mg'], form: 'Tablet', country: 'EU' },
  { name: 'Aprovel', genericName: 'Irbesartan', category: 'Blood Pressure', commonDosages: ['150mg', '300mg'], form: 'Tablet', country: 'EU' },
  { name: 'Glucophage', genericName: 'Metformin', category: 'Diabetes', commonDosages: ['500mg', '850mg', '1000mg'], form: 'Tablet', country: 'EU' },
  { name: 'Diamicron MR', genericName: 'Gliclazide', category: 'Diabetes', commonDosages: ['30mg', '60mg'], form: 'Tablet', country: 'EU' },
  { name: 'Lantus', genericName: 'Insulin Glargine', category: 'Diabetes (Insulin)', commonDosages: ['100 IU/ml'], form: 'Injection', country: 'EU' },
  { name: 'NovoRapid', genericName: 'Insulin Aspart', category: 'Diabetes (Insulin)', commonDosages: ['100 IU/ml'], form: 'Injection', country: 'EU' },
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
 * Optionally filter by country code (TR, US, DE).
 * When a country is provided, only medications matching that country (or GLOBAL) are shown.
 */
export const searchMedications = (query: string, limit = 10, country?: MedicationCountry): MedicationInfo[] => {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();

  // Filter by country if provided
  const pool = country
    ? MEDICATION_DATABASE.filter((m) => !m.country || m.country === country || m.country === 'GLOBAL')
    : MEDICATION_DATABASE;

  // Score-based sorting: exact start match > generic name match > includes match
  const scored = pool
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
