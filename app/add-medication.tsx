import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  Switch,
  Modal,
} from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Medication } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';
import { useTheme } from '../contexts/ThemeContext';
import { makeStyles } from '../styles/medicationFormStyles';
import MedicationAutocomplete from '../components/MedicationAutocomplete';
import { MedicationInfo } from '../data/medications';

export default function AddMedicationScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const styles = makeStyles(colors);

  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [times, setTimes] = useState<string[]>([]);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [pendingTime, setPendingTime] = useState(new Date());
  const [pendingStartDate, setPendingStartDate] = useState(new Date());
  const [pendingEndDate, setPendingEndDate] = useState(new Date());
  const [isOngoing, setIsOngoing] = useState(false);
  const [isAsNeeded, setIsAsNeeded] = useState(false);
  const [stock, setStock] = useState('');
  const [minStock, setMinStock] = useState('');
  const [selectedMedInfo, setSelectedMedInfo] = useState<MedicationInfo | null>(null);

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleAddTime = () => { setPendingTime(new Date()); setShowTimePicker(true); };

  const addTimeToList = (date: Date) => {
    const timeString = formatTime(date);
    if (!times.includes(timeString)) setTimes((prev) => [...prev, timeString].sort());
  };

  const onTimeChange = (_event: any, selectedDate?: Date) => {
    if (selectedDate) setPendingTime(selectedDate);
  };

  const confirmTime = () => { addTimeToList(pendingTime); setShowTimePicker(false); };
  const removeTime = (t: string) => setTimes(times.filter((x) => x !== t));

  const openStartPicker = () => { setPendingStartDate(startDate); setShowStartPicker(true); };
  const confirmStartDate = () => { setStartDate(pendingStartDate); setShowStartPicker(false); };
  const openEndPicker = () => { setPendingEndDate(endDate); setShowEndPicker(true); };
  const confirmEndDate = () => { setEndDate(pendingEndDate); setShowEndPicker(false); };

  const handleMedicationSelected = (medInfo: MedicationInfo) => {
    setSelectedMedInfo(medInfo);
    // If dosage is empty, suggest the first common dosage
    if (!dosage.trim() && medInfo.commonDosages.length > 0) {
      setDosage(medInfo.commonDosages[0]);
    }
  };

  const handleSave = async () => {
    if (!name.trim()) { Alert.alert('Error', 'Please enter medication name'); return; }
    if (!dosage.trim()) { Alert.alert('Error', 'Please enter dosage'); return; }
    if (!isAsNeeded && times.length === 0) { Alert.alert('Error', 'Please add at least one time'); return; }
    if (!isOngoing && endDate < startDate) { Alert.alert('Error', 'End date must be after start date'); return; }

    try {
      const medication: Medication = {
        id: Date.now().toString(),
        name: name.trim(),
        dosage: dosage.trim(),
        startDate: startDate.toISOString(),
        ...(!isOngoing ? { endDate: endDate.toISOString() } : {}),
        times: isAsNeeded ? [] : times,
        ...(isAsNeeded ? { isAsNeeded: true } : {}),
        createdAt: new Date().toISOString(),
        ...(stock.trim() ? { stock: parseInt(stock.trim(), 10) } : {}),
        ...(minStock.trim() ? { minStock: parseInt(minStock.trim(), 10) } : {}),
      };
      await StorageService.saveMedication(medication);
      const hasPermission = await NotificationService.requestPermissions();
      if (hasPermission) await NotificationService.scheduleMedicationNotifications(medication);
      else Alert.alert('Notifications Disabled', 'Please enable notifications to receive medication reminders');
      Alert.alert('Success', 'Medication added successfully', [{ text: 'OK', onPress: () => router.back() }]);
    } catch (error) {
      Alert.alert('Error', 'Failed to save medication');
      console.error(error);
    }
  };

  const pickerTextColor = isDark ? '#ffffff' : '#000000';

  const renderDatePickerModal = (
    visible: boolean,
    value: Date,
    onValueChange: (date: Date) => void,
    onConfirm: () => void,
    onCancel: () => void,
    minimumDate?: Date,
  ) => {
    if (Platform.OS === 'android' && visible) {
      return (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          minimumDate={minimumDate}
          onChange={(event, date) => {
            if (event.type === 'dismissed') { onCancel(); return; }
            if (date) { onValueChange(date); }
            onConfirm();
          }}
        />
      );
    }
    return (
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <DateTimePicker
              value={value}
              mode="date"
              display="spinner"
              minimumDate={minimumDate}
              textColor={pickerTextColor}
              onChange={(_event, date) => { if (date) onValueChange(date); }}
              style={{ height: 200 }}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={onCancel} style={styles.modalButtonCancel}>
                <Text style={[styles.modalButtonText, { color: colors.textSecondary }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onConfirm} style={styles.modalButtonConfirm}>
                <Text style={[styles.modalButtonText, { color: colors.primary, fontWeight: '600' }]}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.content}>
        <Text style={styles.title}>Add Medication</Text>

        {/* Medication Name with Autocomplete */}
        <View style={[styles.inputGroup, { zIndex: 100 }]}>
          <Text style={styles.label}>Medication Name</Text>
          <MedicationAutocomplete
            value={name}
            onChangeText={(text) => {
              setName(text);
              // Clear selected info if user changes the name manually
              if (selectedMedInfo && text !== selectedMedInfo.name) {
                setSelectedMedInfo(null);
              }
            }}
            onSelectMedication={handleMedicationSelected}
            placeholder="e.g., Amoxicillin"
            colors={colors}
          />
          {selectedMedInfo && (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
              gap: 6,
              flexWrap: 'wrap',
            }}>
              <View style={{
                backgroundColor: colors.primary + '18',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 8,
              }}>
                <Text style={{ fontSize: 12, color: colors.primary, fontWeight: '600' }}>
                  {selectedMedInfo.form}
                </Text>
              </View>
              <View style={{
                backgroundColor: colors.success + '18',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 8,
              }}>
                <Text style={{ fontSize: 12, color: colors.success, fontWeight: '600' }}>
                  {selectedMedInfo.category}
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Dosage — with quick-pick chips if a medication is selected */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dosage</Text>
          <TextInput style={styles.input} value={dosage} onChangeText={setDosage} placeholder="e.g., 2 pills, 500mg" placeholderTextColor={colors.textMuted} />
          {selectedMedInfo && selectedMedInfo.commonDosages.length > 0 && (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {selectedMedInfo.commonDosages.map((d) => (
                <TouchableOpacity
                  key={d}
                  onPress={() => setDosage(d)}
                  style={{
                    backgroundColor: dosage === d ? colors.primary : colors.chipBg,
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                  }}
                >
                  <Text style={{
                    fontSize: 13,
                    fontWeight: '600',
                    color: dosage === d ? '#fff' : colors.text,
                  }}>
                    {d}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Total Stock (Units)</Text>
          <TextInput style={styles.input} value={stock} onChangeText={setStock} placeholder="e.g., 30" placeholderTextColor={colors.textMuted} keyboardType="numeric" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Low Stock Warning Threshold</Text>
          <TextInput style={styles.input} value={minStock} onChangeText={setMinStock} placeholder="e.g., 5" placeholderTextColor={colors.textMuted} keyboardType="numeric" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity style={styles.dateButton} onPress={openStartPicker}>
            <Text style={styles.dateButtonText}>{formatDate(startDate)}</Text>
          </TouchableOpacity>
        </View>

        {renderDatePickerModal(
          showStartPicker, pendingStartDate,
          (date) => setPendingStartDate(date),
          confirmStartDate,
          () => setShowStartPicker(false),
        )}

        <View style={styles.inputGroup}>
          <View style={styles.switchRow}>
            <Text style={styles.label}>Ongoing medication (No end date)</Text>
            <Switch value={isOngoing} onValueChange={setIsOngoing} trackColor={{ false: colors.borderLight, true: colors.primary }} />
          </View>
        </View>

        {!isOngoing && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>End Date</Text>
            <TouchableOpacity style={styles.dateButton} onPress={openEndPicker}>
              <Text style={styles.dateButtonText}>{formatDate(endDate)}</Text>
            </TouchableOpacity>
          </View>
        )}

        {renderDatePickerModal(
          showEndPicker, pendingEndDate,
          (date) => setPendingEndDate(date),
          confirmEndDate,
          () => setShowEndPicker(false),
          startDate,
        )}

        <View style={styles.inputGroup}>
          <View style={styles.switchRow}>
            <Text style={styles.label}>Any time / As needed</Text>
            <Switch value={isAsNeeded} onValueChange={setIsAsNeeded} trackColor={{ false: colors.borderLight, true: colors.primary }} />
          </View>
        </View>

        {!isAsNeeded && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Daily Times</Text>
            <TouchableOpacity style={styles.addTimeButton} onPress={handleAddTime}>
              <Text style={styles.addTimeButtonText}>+ Add Time</Text>
            </TouchableOpacity>
            {times.map((time, index) => (
              <View key={index} style={styles.timeChip}>
                <Text style={styles.timeChipText}>{time}</Text>
                <TouchableOpacity onPress={() => removeTime(time)}>
                  <Text style={styles.removeButton}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {/* Time Picker Modal */}
        {Platform.OS === 'android' && showTimePicker && (
          <DateTimePicker
            value={pendingTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
              setShowTimePicker(false);
              if (event.type === 'set' && date) addTimeToList(date);
            }}
          />
        )}
        {Platform.OS === 'ios' && (
          <Modal visible={showTimePicker} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
                <DateTimePicker
                  value={pendingTime}
                  mode="time"
                  is24Hour={true}
                  display="spinner"
                  textColor={pickerTextColor}
                  onChange={onTimeChange}
                  style={{ height: 200 }}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={() => setShowTimePicker(false)} style={styles.modalButtonCancel}>
                    <Text style={[styles.modalButtonText, { color: colors.textSecondary }]}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={confirmTime} style={styles.modalButtonConfirm}>
                    <Text style={[styles.modalButtonText, { color: colors.primary, fontWeight: '600' }]}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Medication</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
