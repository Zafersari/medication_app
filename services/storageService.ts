import AsyncStorage from '@react-native-async-storage/async-storage';
import { Medication, MedicationDose } from '../types/medication';

const MEDICATIONS_KEY = '@medications';
const DOSES_KEY = '@doses';

export class StorageService {
  /**
   * Get all medications
   */
  static async getMedications(): Promise<Medication[]> {
    try {
      const data = await AsyncStorage.getItem(MEDICATIONS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting medications:', error);
      return [];
    }
  }

  /**
   * Save a new medication
   */
  static async saveMedication(medication: Medication): Promise<void> {
    try {
      const medications = await this.getMedications();
      medications.push(medication);
      await AsyncStorage.setItem(MEDICATIONS_KEY, JSON.stringify(medications));
    } catch (error) {
      console.error('Error saving medication:', error);
      throw error;
    }
  }

  /**
   * Update an existing medication
   */
  static async updateMedication(medication: Medication): Promise<void> {
    try {
      const medications = await this.getMedications();
      const index = medications.findIndex(m => m.id === medication.id);
      if (index !== -1) {
        medications[index] = medication;
        await AsyncStorage.setItem(MEDICATIONS_KEY, JSON.stringify(medications));
      }
    } catch (error) {
      console.error('Error updating medication:', error);
      throw error;
    }
  }

  /**
   * Delete a medication
   */
  static async deleteMedication(medicationId: string): Promise<void> {
    try {
      const medications = await this.getMedications();
      const filtered = medications.filter(m => m.id !== medicationId);
      await AsyncStorage.setItem(MEDICATIONS_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error deleting medication:', error);
      throw error;
    }
  }

  /**
   * Get medication by ID
   */
  static async getMedicationById(id: string): Promise<Medication | null> {
    try {
      const medications = await this.getMedications();
      return medications.find(m => m.id === id) || null;
    } catch (error) {
      console.error('Error getting medication by ID:', error);
      return null;
    }
  }

  /**
   * Get doses for a specific date
   */
  static async getDosesForDate(date: string): Promise<MedicationDose[]> {
    try {
      const key = `${DOSES_KEY}_${date}`;
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting doses for date:', error);
      return [];
    }
  }

  /**
   * Mark a dose as taken
   */
  static async markDoseAsTaken(
    date: string,
    medicationId: string,
    time: string,
    taken: boolean
  ): Promise<void> {
    try {
      const key = `${DOSES_KEY}_${date}`;
      const doses = await this.getDosesForDate(date);

      const doseIndex = doses.findIndex(
        d => d.medicationId === medicationId && d.time === time
      );

      if (doseIndex !== -1) {
        doses[doseIndex].taken = taken;
      } else {
        // Create new dose record if it doesn't exist
        const medication = await this.getMedicationById(medicationId);
        if (medication) {
          doses.push({
            medicationId,
            medicationName: medication.name,
            dosage: medication.dosage,
            time,
            date,
            taken,
          });
        }
      }

      await AsyncStorage.setItem(key, JSON.stringify(doses));
    } catch (error) {
      console.error('Error marking dose as taken:', error);
      throw error;
    }
  }

  /**
   * Get active medications for a specific date
   */
  static async getActiveMedicationsForDate(date: string): Promise<Medication[]> {
    try {
      const medications = await this.getMedications();
      const targetDate = new Date(date);

      return medications.filter(med => {
        const startDate = new Date(med.startDate);
        const endDate = new Date(med.endDate);
        return targetDate >= startDate && targetDate <= endDate;
      });
    } catch (error) {
      console.error('Error getting active medications:', error);
      return [];
    }
  }

  /**
   * Clear all data (for testing/reset)
   */
  static async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  }
}
