import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Medication } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';
import { useTheme } from '../contexts/ThemeContext';
import { makeStyles } from '../styles/allMedicationsStyles';

type Tab = 'active' | 'upcoming' | 'past';

export default function AllMedicationsScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const [medications, setMedications] = useState<Medication[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('active');

  const loadData = async () => {
    try {
      const allMeds = await StorageService.getMedications();
      setMedications(allMeds);
    } catch (error) {
      console.error('Error loading medications:', error);
    }
  };

  useFocusEffect(useCallback(() => { loadData(); }, []));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const activeMeds = medications.filter((med) => {
    const start = new Date(med.startDate); start.setHours(0, 0, 0, 0);
    if (today < start) return false;
    if (!med.endDate) return true;
    const end = new Date(med.endDate); end.setHours(23, 59, 59, 999);
    return today <= end;
  });

  const upcomingMeds = medications.filter((med) => {
    const start = new Date(med.startDate); start.setHours(0, 0, 0, 0);
    return start > today;
  });

  const pastMeds = medications.filter((med) => {
    if (!med.endDate) return false;
    const end = new Date(med.endDate); end.setHours(23, 59, 59, 999);
    return end < today;
  });

  const getFilteredMeds = () => {
    switch (activeTab) {
      case 'active': return activeMeds;
      case 'upcoming': return upcomingMeds;
      case 'past': return pastMeds;
    }
  };

  const getEmptyMessage = () => {
    switch (activeTab) {
      case 'active': return 'No active medications today';
      case 'upcoming': return 'No upcoming medications';
      case 'past': return 'No past medications';
    }
  };

  const deleteMedication = async (medication: Medication) => {
    Alert.alert('Delete Medication', `Are you sure you want to delete ${medication.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive',
        onPress: async () => {
          try {
            await StorageService.deleteMedication(medication.id);
            await NotificationService.cancelMedicationNotifications(medication.id);
            await loadData();
          } catch (error) { Alert.alert('Error', 'Failed to delete medication'); }
        },
      },
    ]);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const filteredMeds = getFilteredMeds();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Medications</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, activeTab === 'active' && styles.tabActive]} onPress={() => setActiveTab('active')}>
          <Text style={[styles.tabText, activeTab === 'active' && styles.tabTextActive]}>Active ({activeMeds.length})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'upcoming' && styles.tabUpcoming]} onPress={() => setActiveTab('upcoming')}>
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.tabTextActive]}>Upcoming ({upcomingMeds.length})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'past' && styles.tabPast]} onPress={() => setActiveTab('past')}>
          <Text style={[styles.tabText, activeTab === 'past' && styles.tabTextActive]}>Past ({pastMeds.length})</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {filteredMeds.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>{activeTab === 'active' ? '💊' : activeTab === 'upcoming' ? '📅' : '📋'}</Text>
            <Text style={styles.emptyText}>{getEmptyMessage()}</Text>
          </View>
        ) : (
          filteredMeds.map((med) => (
            <View key={med.id} style={styles.medicationCard}>
              <View style={styles.medicationInfo}>
                <Text style={styles.medicationName}>{med.name}</Text>
                <Text style={styles.medicationDosage}>{med.dosage}</Text>
                {med.stock != null && (
                  <Text style={[
                    styles.medicationDates,
                    { fontWeight: '600' },
                    med.minStock != null && med.stock <= med.minStock
                      ? { color: colors.danger }
                      : {}
                  ]}>
                    Stock: {med.stock} units{med.minStock != null && med.stock <= med.minStock ? ' ⚠️' : ''}
                  </Text>
                )}
                <Text style={styles.medicationDates}>{formatDate(med.startDate)} — {med.endDate ? formatDate(med.endDate) : 'Ongoing'}</Text>
                <View style={styles.timesRow}>
                  {med.isAsNeeded ? (
                    <View style={styles.timeChip}><Text style={styles.timeChipText}>As needed</Text></View>
                  ) : (
                    med.times.map((time, index) => (
                      <View key={index} style={styles.timeChip}><Text style={styles.timeChipText}>{time}</Text></View>
                    ))
                  )}
                </View>
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity onPress={() => router.push(`/edit-medication?id=${med.id}`)} style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteMedication(med)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}
