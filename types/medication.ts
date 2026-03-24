export interface Medication {
  id: string;
  name: string;
  dosage: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  times: string[]; // Array of times in HH:MM format
  createdAt: string;
  stock?: number; // Current stock quantity (e.g. 30)
  minStock?: number; // Minimum stock threshold for low-stock warning (e.g. 5)
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
