import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Alert,
  Animated,
  Pressable,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Medication, MedicationDose } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';
import { useTheme } from '../contexts/ThemeContext';
import { makeStyles, DRAWER_WIDTH } from '../styles/homeStyles';

export default function HomeScreen() {
  const router = useRouter();
  const { colors, isDark, setMode } = useTheme();
  const styles = makeStyles(colors);

  const [medications, setMedications] = useState<Medication[]>([]);
  const [doses, setDoses] = useState<MedicationDose[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const today = new Date().toISOString().split('T')[0];

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.parallel([
      Animated.timing(drawerAnim, { toValue: 0, duration: 280, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 1, duration: 280, useNativeDriver: true }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(drawerAnim, { toValue: -DRAWER_WIDTH, duration: 250, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start(() => setDrawerOpen(false));
  };

  const loadData = async () => {
    try {
      await NotificationService.requestPermissions();
      const activeMeds = await StorageService.getActiveMedicationsForDate(today);
      setMedications(activeMeds);
      const todayDoses = await StorageService.getDosesForDate(today);
      const allDoses: MedicationDose[] = [];

      for (const med of activeMeds) {
        for (const time of med.times) {
          const existingDose = todayDoses.find(
            (d) => d.medicationId === med.id && d.time === time
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

  useFocusEffect(useCallback(() => { loadData(); }, []));

  const toggleDose = async (dose: MedicationDose) => {
    try {
      const newTakenStatus = !dose.taken;
      await StorageService.markDoseAsTaken(today, dose.medicationId, dose.time, newTakenStatus);
      setDoses(
        doses.map((d) =>
          d.medicationId === dose.medicationId && d.time === dose.time
            ? { ...d, taken: newTakenStatus }
            : d
        )
      );
      // Reload medications to reflect updated stock
      const activeMeds = await StorageService.getActiveMedicationsForDate(today);
      setMedications(activeMeds);
    } catch (error) {
      Alert.alert('Error', 'Failed to update dose status');
    }
  };

  const toggleTheme = () => {
    if (isDark) setMode('light');
    else setMode('dark');
  };

  const navigateTo = (path: string) => {
    closeDrawer();
    setTimeout(() => router.push(path as any), 300);
  };

  const isUpcoming = (time: string): boolean => {
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const doseTime = new Date();
    doseTime.setHours(hours, minutes, 0, 0);
    return doseTime > now;
  };

  const completedCount = doses.filter((d) => d.taken).length;
  const totalCount = doses.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Today</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.allButton} onPress={() => router.push('/all-medications')}>
            <Text style={styles.allButtonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add-medication')}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {totalCount > 0 && (
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{completedCount} of {totalCount} doses taken</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(completedCount / totalCount) * 100}%` }]} />
          </View>
        </View>
      )}

      <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {doses.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>💊</Text>
            <Text style={styles.emptyTitle}>No medications for today</Text>
            <Text style={styles.emptyText}>Tap the + Add button to add your first medication</Text>
          </View>
        ) : (
          doses.map((dose, index) => (
            <TouchableOpacity
              key={`${dose.medicationId}-${dose.time}-${index}`}
              style={[styles.doseCard, dose.taken && styles.doseCardTaken]}
              onPress={() => toggleDose(dose)}
            >
              <View style={styles.doseMain}>
                <View style={styles.checkbox}>
                  {dose.taken && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <View style={styles.doseInfo}>
                  <Text style={[styles.doseName, dose.taken && styles.doseNameTaken]}>{dose.medicationName}</Text>
                  <Text style={styles.doseDosage}>{dose.dosage}</Text>
                </View>
                <View style={styles.doseTimeContainer}>
                  <Text style={[styles.doseTime, isUpcoming(dose.time) && !dose.taken && styles.doseTimeUpcoming]}>{dose.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}

        {medications.length > 0 && (
          <View style={styles.medicationsSection}>
            <Text style={styles.sectionTitle}>Active Medications</Text>
            {medications.map((med) => (
              <View key={med.id} style={styles.medicationCard}>
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationName}>{med.name}</Text>
                  <Text style={styles.medicationDetails}>{med.dosage} • {med.times.length} times daily</Text>
                  {med.stock != null && (
                    <Text style={[
                      styles.medicationDetails,
                      { fontWeight: '600' },
                      med.minStock != null && med.stock <= med.minStock
                        ? { color: colors.danger }
                        : {}
                    ]}>
                      Stock: {med.stock} units{med.minStock != null && med.stock <= med.minStock ? ' ⚠️' : ''}
                    </Text>
                  )}
                  <Text style={styles.medicationDates}>
                    {new Date(med.startDate).toLocaleDateString()} - {new Date(med.endDate).toLocaleDateString()}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => router.push(`/edit-medication?id=${med.id}`)} style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        <View style={{ height: 40 }} />
      </ScrollView>

      {drawerOpen && (
        <Animated.View style={[styles.overlay, { opacity: overlayAnim }]}>
          <Pressable style={StyleSheet.absoluteFill} onPress={closeDrawer} />
        </Animated.View>
      )}

      {drawerOpen && (
        <Animated.View style={[styles.drawer, { transform: [{ translateX: drawerAnim }] }]}>
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerAppName}>💊 MedTracker</Text>
            <Text style={styles.drawerDateDay}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</Text>
            <Text style={styles.drawerDateFull}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
            {totalCount > 0 && (
              <View style={styles.drawerStatsRow}>
                <View style={styles.drawerStatsBadge}>
                  <Text style={styles.drawerStatsText}>{completedCount}/{totalCount} doses today</Text>
                </View>
              </View>
            )}
          </View>
          <ScrollView style={styles.drawerBody}>
            <Text style={styles.drawerSectionLabel}>NAVIGATION</Text>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigateTo('/calendar')}>
              <Text style={styles.drawerItemIcon}>📅</Text>
              <Text style={styles.drawerItemText}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigateTo('/all-medications')}>
              <Text style={styles.drawerItemIcon}>💊</Text>
              <Text style={styles.drawerItemText}>All Medications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigateTo('/add-medication')}>
              <Text style={styles.drawerItemIcon}>➕</Text>
              <Text style={styles.drawerItemText}>Add Medication</Text>
            </TouchableOpacity>
            <View style={styles.drawerDivider} />
            <Text style={styles.drawerSectionLabel}>SETTINGS</Text>
            <TouchableOpacity style={styles.drawerItem} onPress={toggleTheme}>
              <Text style={styles.drawerItemIcon}>{isDark ? '☀️' : '🌙'}</Text>
              <Text style={styles.drawerItemText}>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</Text>
            </TouchableOpacity>
            <View style={styles.drawerDivider} />
            <View style={styles.drawerFooter}>
              <Text style={styles.drawerFooterText}>MedTracker v1.0.0</Text>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
}
