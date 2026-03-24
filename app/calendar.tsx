import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Medication, MedicationDose } from '../types/medication';
import { StorageService } from '../services/storageService';
import { useTheme } from '../contexts/ThemeContext';
import { makeStyles } from '../styles/calendarStyles';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function CalendarScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [selectedDayDoses, setSelectedDayDoses] = useState<MedicationDose[]>([]);
  const [doseDataMap, setDoseDataMap] = useState<Record<string, { total: number; taken: number }>>({});

  const loadData = async () => {
    try {
      const allMeds = await StorageService.getMedications();
      setMedications(allMeds);
      await buildMonthData(currentMonth, allMeds);
    } catch (error) { console.error('Error loading data:', error); }
  };

  const buildMonthData = async (month: Date, meds: Medication[]) => {
    const year = month.getFullYear();
    const m = month.getMonth();
    const daysInMonth = new Date(year, m + 1, 0).getDate();
    const map: Record<string, { total: number; taken: number }> = {};

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dateObj = new Date(dateStr); dateObj.setHours(12, 0, 0, 0);
      let totalDoses = 0;
      for (const med of meds) {
        const start = new Date(med.startDate); start.setHours(0, 0, 0, 0);
        if (dateObj < start) continue;
        if (med.endDate) {
          const end = new Date(med.endDate); end.setHours(23, 59, 59, 999);
          if (dateObj > end) continue;
        }
        totalDoses += med.isAsNeeded ? 1 : med.times.length;
      }
      if (totalDoses > 0) {
        const doses = await StorageService.getDosesForDate(dateStr);
        map[dateStr] = { total: totalDoses, taken: doses.filter((d) => d.taken).length };
      }
    }
    setDoseDataMap(map);
  };

  useFocusEffect(useCallback(() => { loadData(); }, [currentMonth]));

  const loadSelectedDay = async (dateStr: string) => {
    setSelectedDate(dateStr);
    const doses = await StorageService.getDosesForDate(dateStr);
    const dateObj = new Date(dateStr); dateObj.setHours(12, 0, 0, 0);

    const activeMeds = medications.filter((med) => {
      const start = new Date(med.startDate); start.setHours(0, 0, 0, 0);
      if (dateObj < start) return false;
      if (!med.endDate) return true;
      const end = new Date(med.endDate); end.setHours(23, 59, 59, 999);
      return dateObj <= end;
    });

    const allDoses: MedicationDose[] = [];
    for (const med of activeMeds) {
      if (med.isAsNeeded) {
        const existing = doses.find((d) => d.medicationId === med.id && d.time === 'Any Time');
        allDoses.push(existing || { medicationId: med.id, medicationName: med.name, dosage: med.dosage, time: 'Any Time', date: dateStr, taken: false });
      } else {
        for (const time of med.times) {
          const existing = doses.find((d) => d.medicationId === med.id && d.time === time);
          allDoses.push(existing || { medicationId: med.id, medicationName: med.name, dosage: med.dosage, time, date: dateStr, taken: false });
        }
      }
    }
    allDoses.sort((a, b) => a.time.localeCompare(b.time));
    setSelectedDayDoses(allDoses);
  };

  const prevMonth = () => { const p = new Date(currentMonth); p.setMonth(p.getMonth() - 1); setCurrentMonth(p); setSelectedDate(null); setSelectedDayDoses([]); };
  const nextMonth = () => { const n = new Date(currentMonth); n.setMonth(n.getMonth() + 1); setCurrentMonth(n); setSelectedDate(null); setSelectedDayDoses([]); };

  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    let startDay = new Date(year, month, 1).getDay() - 1;
    if (startDay < 0) startDay = 6;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: (number | null)[] = [];
    for (let i = 0; i < startDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    while (days.length % 7 !== 0) days.push(null);
    return days;
  };

  const getDateStr = (day: number) => {
    const m = currentMonth.getMonth() + 1;
    return `${currentMonth.getFullYear()}-${String(m).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const days = getCalendarDays();

  const getDotColor = (dateStr: string) => {
    const data = doseDataMap[dateStr];
    if (!data) return null;
    if (data.taken === data.total) return colors.success;
    if (data.taken > 0) return '#FFA500';
    return colors.danger;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.monthNav}>
        <TouchableOpacity onPress={prevMonth} style={styles.navButton}><Text style={styles.navButtonText}>◀</Text></TouchableOpacity>
        <Text style={styles.monthTitle}>{MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}</Text>
        <TouchableOpacity onPress={nextMonth} style={styles.navButton}><Text style={styles.navButtonText}>▶</Text></TouchableOpacity>
      </View>

      <View style={styles.dayHeaders}>
        {DAYS.map((d) => <Text key={d} style={styles.dayHeaderText}>{d}</Text>)}
      </View>

      <View style={styles.calendarGrid}>
        {days.map((day, index) => {
          if (day === null) return <View key={index} style={styles.dayCell} />;
          const dateStr = getDateStr(day);
          const isToday = dateStr === todayStr;
          const isSelected = dateStr === selectedDate;
          const dotColor = getDotColor(dateStr);
          return (
            <TouchableOpacity key={index} style={[styles.dayCell, isToday && styles.dayCellToday, isSelected && styles.dayCellSelected]} onPress={() => loadSelectedDay(dateStr)}>
              <Text style={[styles.dayText, isToday && styles.dayTextToday, isSelected && styles.dayTextSelected]}>{day}</Text>
              {dotColor && <View style={[styles.dot, { backgroundColor: dotColor }]} />}
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.legend}>
        <View style={styles.legendItem}><View style={[styles.legendDot, { backgroundColor: colors.success }]} /><Text style={styles.legendText}>All taken</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendDot, { backgroundColor: '#FFA500' }]} /><Text style={styles.legendText}>Partial</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendDot, { backgroundColor: colors.danger }]} /><Text style={styles.legendText}>Missed</Text></View>
      </View>

      <ScrollView style={styles.detailScroll}>
        {selectedDate ? (
          selectedDayDoses.length > 0 ? (
            <>
              <Text style={styles.detailTitle}>
                {new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </Text>
              {selectedDayDoses.map((dose, i) => (
                <View key={i} style={[styles.doseRow, dose.taken && styles.doseRowTaken]}>
                  <View style={styles.doseLeft}>
                    <Text style={[styles.doseCheck, { color: dose.taken ? colors.success : colors.textMuted }]}>{dose.taken ? '✓' : '○'}</Text>
                    <View>
                      <Text style={styles.doseName}>{dose.medicationName}</Text>
                      <Text style={styles.doseDosage}>{dose.dosage}</Text>
                    </View>
                  </View>
                  <Text style={styles.doseTime}>{dose.time}</Text>
                </View>
              ))}
            </>
          ) : <Text style={styles.noDataText}>No medications for this day</Text>
        ) : <Text style={styles.noDataText}>Tap a day to see details</Text>}
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}
