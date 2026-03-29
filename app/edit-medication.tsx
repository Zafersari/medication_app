import React, { useState, useEffect } from 'react';
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
import { useRouter, useLocalSearchParams } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Medication } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { tr } from '../utils/i18n';
import { makeStyles } from '../styles/medicationFormStyles';
import MedicationAutocomplete from '../components/MedicationAutocomplete';

export default function EditMedicationScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { colors, isDark } = useTheme();
  const { lang } = useLanguage();
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
  const [originalMedication, setOriginalMedication] = useState<Medication | null>(null);

  useEffect(() => { if (id) loadMedication(id); }, [id]);

  const loadMedication = async (medicationId: string) => {
    const med = await StorageService.getMedicationById(medicationId);
    if (med) {
      setOriginalMedication(med);
      setName(med.name);
      setDosage(med.dosage);
      setStartDate(new Date(med.startDate));
      setIsOngoing(!med.endDate);
      if (med.endDate) setEndDate(new Date(med.endDate));
      setIsAsNeeded(!!med.isAsNeeded);
      setTimes(med.times);
      setStock(med.stock != null ? med.stock.toString() : '');
      setMinStock(med.minStock != null ? med.minStock.toString() : '');
    } else {
      Alert.alert(tr('error', lang), tr('medication_not_found', lang));
      router.back();
    }
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(
      lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : 'en-US',
      { year: 'numeric', month: 'short', day: 'numeric' }
    );
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

  const handleSave = async () => {
    if (!name.trim()) { Alert.alert(tr('error', lang), tr('enter_name', lang)); return; }
    if (!dosage.trim()) { Alert.alert(tr('error', lang), tr('enter_dosage', lang)); return; }
    if (!isAsNeeded && times.length === 0) { Alert.alert(tr('error', lang), tr('add_one_time', lang)); return; }
    if (!isOngoing && endDate < startDate) { Alert.alert(tr('error', lang), tr('end_after_start', lang)); return; }
    if (!originalMedication) return;

    try {
      const updated: Medication = {
        ...originalMedication,
        name: name.trim(),
        dosage: dosage.trim(),
        startDate: startDate.toISOString(),
        endDate: isOngoing ? undefined : endDate.toISOString(),
        times: isAsNeeded ? [] : times,
        isAsNeeded: isAsNeeded || undefined,
        stock: stock.trim() ? parseInt(stock.trim(), 10) : undefined,
        minStock: minStock.trim() ? parseInt(minStock.trim(), 10) : undefined,
      };
      await StorageService.updateMedication(updated);
      await NotificationService.cancelMedicationNotifications(updated.id);
      const hasPermission = await NotificationService.requestPermissions();
      if (hasPermission) await NotificationService.scheduleMedicationNotifications(updated);
      Alert.alert(tr('success', lang), tr('medication_updated', lang), [{ text: tr('ok', lang), onPress: () => router.back() }]);
    } catch (error) {
      Alert.alert(tr('error', lang), tr('update_failed', lang));
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
                <Text style={[styles.modalButtonText, { color: colors.textSecondary }]}>{tr('cancel', lang)}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onConfirm} style={styles.modalButtonConfirm}>
                <Text style={[styles.modalButtonText, { color: colors.primary, fontWeight: '600' }]}>{tr('confirm', lang)}</Text>
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
        <Text style={styles.title}>{tr('edit_medication', lang)}</Text>

        <View style={[styles.inputGroup, { zIndex: 100 }]}>
          <Text style={styles.label}>{tr('medication_name', lang)}</Text>
          <MedicationAutocomplete
            value={name}
            onChangeText={setName}
            placeholder={tr('medication_name_placeholder', lang)}
            colors={colors}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{tr('dosage', lang)}</Text>
          <TextInput style={styles.input} value={dosage} onChangeText={setDosage} placeholder={tr('dosage_placeholder', lang)} placeholderTextColor={colors.textMuted} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{tr('total_stock', lang)}</Text>
          <TextInput style={styles.input} value={stock} onChangeText={setStock} placeholder={tr('eg_30', lang)} placeholderTextColor={colors.textMuted} keyboardType="numeric" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{tr('low_stock_threshold', lang)}</Text>
          <TextInput style={styles.input} value={minStock} onChangeText={setMinStock} placeholder={tr('eg_5', lang)} placeholderTextColor={colors.textMuted} keyboardType="numeric" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>{tr('start_date', lang)}</Text>
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
            <Text style={styles.label}>{tr('ongoing_medication', lang)}</Text>
            <Switch value={isOngoing} onValueChange={setIsOngoing} trackColor={{ false: colors.borderLight, true: colors.primary }} />
          </View>
        </View>

        {!isOngoing && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{tr('end_date', lang)}</Text>
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
            <Text style={styles.label}>{tr('any_time', lang)}</Text>
            <Switch value={isAsNeeded} onValueChange={setIsAsNeeded} trackColor={{ false: colors.borderLight, true: colors.primary }} />
          </View>
        </View>

        {!isAsNeeded && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{tr('daily_times', lang)}</Text>
            <TouchableOpacity style={styles.addTimeButton} onPress={handleAddTime}>
              <Text style={styles.addTimeButtonText}>{tr('add_time', lang)}</Text>
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
                    <Text style={[styles.modalButtonText, { color: colors.textSecondary }]}>{tr('cancel', lang)}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={confirmTime} style={styles.modalButtonConfirm}>
                    <Text style={[styles.modalButtonText, { color: colors.primary, fontWeight: '600' }]}>{tr('add', lang)}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>{tr('cancel', lang)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButtonBlue} onPress={handleSave}>
            <Text style={styles.saveButtonText}>{tr('save_changes', lang)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
