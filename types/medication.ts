export interface Medication {
  id: string;
  name: string;
  dosage: string;
  startDate: string; // ISO date string
  endDate?: string; // ISO date string (undefined = ongoing medication)
  times: string[]; // Array of times in HH:MM format
  isAsNeeded?: boolean; // "Any time" / as-needed medication (no specific times)
  createdAt: string;
  stock?: number; // Current stock quantity (e.g. 30)
  minStock?: number; // Minimum stock threshold for low-stock warning (e.g. 5)
  totalDosesTaken?: number; // Number of doses taken so far (for progress tracking)
}

export interface MedicationDose {
  medicationId: string;
  medicationName: string;
  dosage: string;
  time: string; // HH:MM format
  date: string; // ISO date string (YYYY-MM-DD)
  taken: boolean;
}

export interface DailySchedule {
  date: string; // YYYY-MM-DD
  doses: MedicationDose[];
}
