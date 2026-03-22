import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Alert,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Medication, MedicationDose } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';

export default function HomeScreen() {
  const router = useRouter();
  const [medications, setMedications] = useState<Medication[]>([]);
  const [doses, setDoses] = useState<MedicationDose[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const loadData = async () => {
    try {
      // Request notification permissions
      await NotificationService.requestPermissions();

      // Get active medications for today
      const activeMeds = await StorageService.getActiveMedicationsForDate(today);
      setMedications(activeMeds);

      // Get doses for today
      const todayDoses = await StorageService.getDosesForDate(today);

      // Build complete dose list for today
      const allDoses: MedicationDose[] = [];

      for (const med of activeMeds) {
        for (const time of med.times) {
          const existingDose = todayDoses.find(
            d => d.medicationId === med.id && d.time === time
          );

          if (existingDose) {
            allDoses.push(existingDose);
          } else {
            allDoses.push({
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

      // Sort by time
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

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const toggleDose = async (dose: MedicationDose) => {
    try {
      const newTakenStatus = !dose.taken;
      await StorageService.markDoseAsTaken(
        today,
        dose.medicationId,
        dose.time,
        newTakenStatus
      );

      // Update local state
      setDoses(doses.map(d =>
        d.medicationId === dose.medicationId && d.time === dose.time
          ? { ...d, taken: newTakenStatus }
          : d
      ));
    } catch (error) {
      Alert.alert('Error', 'Failed to update dose status');
    }
  };

  const deleteMedication = async (medication: Medication) => {
    Alert.alert(
      'Delete Medication',
      `Are you sure you want to delete ${medication.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await StorageService.deleteMedication(medication.id);
              await NotificationService.cancelMedicationNotifications(medication.id);
              await loadData();
            } catch (error) {
              Alert.alert('Error', 'Failed to delete medication');
            }
          },
        },
      ]
    );
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isUpcoming = (time: string): boolean => {
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const doseTime = new Date();
    doseTime.setHours(hours, minutes, 0, 0);
    return doseTime > now;
  };

  const completedCount = doses.filter(d => d.taken).length;
  const totalCount = doses.length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Today's Medications</Text>
          <Text style={styles.headerDate}>{formatDate(today)}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/add-medication')}
        >
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Summary */}
      {totalCount > 0 && (
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {completedCount} of {totalCount} doses taken
          </Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${(completedCount / totalCount) * 100}%` },
              ]}
            />
          </View>
        </View>
      )}

      {/* Dose List */}
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {doses.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>💊</Text>
            <Text style={styles.emptyTitle}>No medications for today</Text>
            <Text style={styles.emptyText}>
              Tap the + Add button to add your first medication
            </Text>
          </View>
        ) : (
          doses.map((dose, index) => (
            <TouchableOpacity
              key={`${dose.medicationId}-${dose.time}-${index}`}
              style={[
                styles.doseCard,
                dose.taken && styles.doseCardTaken,
              ]}
              onPress={() => toggleDose(dose)}
            >
              <View style={styles.doseMain}>
                <View style={styles.checkbox}>
                  {dose.taken && <Text style={styles.checkmark}>✓</Text>}
                </View>

                <View style={styles.doseInfo}>
                  <Text
                    style={[
                      styles.doseName,
                      dose.taken && styles.doseNameTaken,
                    ]}
                  >
                    {dose.medicationName}
                  </Text>
                  <Text style={styles.doseDosage}>{dose.dosage}</Text>
                </View>

                <View style={styles.doseTimeContainer}>
                  <Text
                    style={[
                      styles.doseTime,
                      isUpcoming(dose.time) && !dose.taken && styles.doseTimeUpcoming,
                    ]}
                  >
                    {dose.time}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}

        {/* Active Medications List */}
        {medications.length > 0 && (
          <View style={styles.medicationsSection}>
            <Text style={styles.sectionTitle}>Active Medications</Text>
            {medications.map((med) => (
              <View key={med.id} style={styles.medicationCard}>
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationName}>{med.name}</Text>
                  <Text style={styles.medicationDetails}>
                    {med.dosage} • {med.times.length} times daily
                  </Text>
                  <Text style={styles.medicationDates}>
                    {new Date(med.startDate).toLocaleDateString()} -{' '}
                    {new Date(med.endDate).toLocaleDateString()}
                  </Text>
                </View>
                <View style={styles.cardActions}>
                  <TouchableOpacity
                    onPress={() => router.push(`/edit-medication?id=${med.id}`)}
                    style={styles.editButton}
                  >
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => deleteMedication(med)}
                    style={styles.deleteButton}
                  >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  progressContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 1,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 4,
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  doseCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  doseCardTaken: {
    backgroundColor: '#f0f9f4',
    borderColor: '#34C759',
  },
  doseMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkmark: {
    fontSize: 18,
    color: '#34C759',
    fontWeight: 'bold',
  },
  doseInfo: {
    flex: 1,
  },
  doseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  doseNameTaken: {
    color: '#999',
  },
  doseDosage: {
    fontSize: 14,
    color: '#666',
  },
  doseTimeContainer: {
    alignItems: 'flex-end',
  },
  doseTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  doseTimeUpcoming: {
    color: '#007AFF',
  },
  medicationsSection: {
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  medicationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  medicationDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  medicationDates: {
    fontSize: 12,
    color: '#999',
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#007AFF',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#ff3b30',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
