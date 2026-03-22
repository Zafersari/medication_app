import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Medication } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';

export default function EditMedicationScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [times, setTimes] = useState<string[]>([]);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [pendingTime, setPendingTime] = useState(new Date());
  const [originalMedication, setOriginalMedication] = useState<Medication | null>(null);

  useEffect(() => {
    if (id) {
      loadMedication(id);
    }
  }, [id]);

  const loadMedication = async (medicationId: string) => {
    const med = await StorageService.getMedicationById(medicationId);
    if (med) {
      setOriginalMedication(med);
      setName(med.name);
      setDosage(med.dosage);
      setStartDate(new Date(med.startDate));
      setEndDate(new Date(med.endDate));
      setTimes(med.times);
    } else {
      Alert.alert('Error', 'Medication not found');
      router.back();
    }
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleAddTime = () => {
    setPendingTime(new Date());
    setShowTimePicker(true);
  };

  const addTimeToList = (date: Date) => {
    const timeString = formatTime(date);
    if (!times.includes(timeString)) {
      setTimes(prev => [...prev, timeString].sort());
    }
  };

  const onTimeChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
      if (event.type === 'set' && selectedDate) {
        addTimeToList(selectedDate);
      }
    } else {
      if (selectedDate) {
        setPendingTime(selectedDate);
      }
      if (event.type === 'dismissed') {
        setShowTimePicker(false);
      }
    }
  };

  const confirmTime = () => {
    addTimeToList(pendingTime);
    setShowTimePicker(false);
  };

  const removeTime = (timeToRemove: string) => {
    setTimes(times.filter(t => t !== timeToRemove));
  };

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter medication name');
      return;
    }
    if (!dosage.trim()) {
      Alert.alert('Error', 'Please enter dosage');
      return;
    }
    if (times.length === 0) {
      Alert.alert('Error', 'Please add at least one time');
      return;
    }
    if (endDate < startDate) {
      Alert.alert('Error', 'End date must be after start date');
      return;
    }
    if (!originalMedication) return;

    try {
      const updated: Medication = {
        ...originalMedication,
        name: name.trim(),
        dosage: dosage.trim(),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        times,
      };

      await StorageService.updateMedication(updated);

      // Cancel old notifications and reschedule
      await NotificationService.cancelMedicationNotifications(updated.id);
      const hasPermission = await NotificationService.requestPermissions();
      if (hasPermission) {
        await NotificationService.scheduleMedicationNotifications(updated);
      }

      Alert.alert('Success', 'Medication updated successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to update medication');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Edit Medication</Text>

        {/* Medication Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Medication Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="e.g., Amoxicillin"
            placeholderTextColor="#999"
          />
        </View>

        {/* Dosage */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dosage</Text>
          <TextInput
            style={styles.input}
            value={dosage}
            onChangeText={setDosage}
            placeholder="e.g., 2 pills, 500mg"
            placeholderTextColor="#999"
          />
        </View>

        {/* Start Date */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowStartPicker(true)}
          >
            <Text style={styles.dateButtonText}>{formatDate(startDate)}</Text>
          </TouchableOpacity>
          {showStartPicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                if (Platform.OS === 'android') {
                  setShowStartPicker(false);
                }
                if (event.type === 'set' && date) {
                  setStartDate(date);
                  if (Platform.OS === 'ios') {
                    setShowStartPicker(false);
                  }
                } else if (event.type === 'dismissed') {
                  setShowStartPicker(false);
                }
              }}
            />
          )}
        </View>

        {/* End Date */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>End Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowEndPicker(true)}
          >
            <Text style={styles.dateButtonText}>{formatDate(endDate)}</Text>
          </TouchableOpacity>
          {showEndPicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display="default"
              minimumDate={startDate}
              onChange={(event, date) => {
                if (Platform.OS === 'android') {
                  setShowEndPicker(false);
                }
                if (event.type === 'set' && date) {
                  setEndDate(date);
                  if (Platform.OS === 'ios') {
                    setShowEndPicker(false);
                  }
                } else if (event.type === 'dismissed') {
                  setShowEndPicker(false);
                }
              }}
            />
          )}
        </View>

        {/* Times */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Daily Times</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddTime}>
            <Text style={styles.addButtonText}>+ Add Time</Text>
          </TouchableOpacity>

          {times.map((time, index) => (
            <View key={index} style={styles.timeChip}>
              <Text style={styles.timeChipText}>{time}</Text>
              <TouchableOpacity onPress={() => removeTime(time)}>
                <Text style={styles.removeButton}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}

          {showTimePicker && (
            <View>
              <DateTimePicker
                value={pendingTime}
                mode="time"
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onTimeChange}
              />
              {Platform.OS === 'ios' && (
                <View style={styles.timePickerButtons}>
                  <TouchableOpacity
                    style={styles.cancelTimeButton}
                    onPress={() => setShowTimePicker(false)}
                  >
                    <Text style={styles.cancelTimeButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.confirmTimeButton}
                    onPress={confirmTime}
                  >
                    <Text style={styles.confirmTimeButtonText}>Add</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
  dateButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  timeChipText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    fontSize: 20,
    color: '#ff3b30',
    fontWeight: 'bold',
  },
  timePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cancelTimeButton: {
    padding: 10,
  },
  cancelTimeButtonText: {
    fontSize: 16,
    color: '#666',
  },
  confirmTimeButton: {
    padding: 10,
  },
  confirmTimeButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 30,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#007AFF',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
