import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Medication } from '../types/medication';
import { StorageService } from '../services/storageService';
import { NotificationService } from '../services/notificationService';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { tr } from '../utils/i18n';
import { makeStyles } from '../styles/allMedicationsStyles';
import { MedicationProgress } from '../components/MedicationProgress';

type Tab = 'active' | 'upcoming' | 'past';

export default function AllMedicationsScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { lang } = useLanguage();
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
      case 'active': return tr('no_active_medications', lang);
      case 'upcoming': return tr('no_upcoming_medications', lang);
      case 'past': return tr('no_past_medications', lang);
    }
  };

  const deleteMedication = async (medication: Medication) => {
    Alert.alert(
      tr('delete_medication', lang),
      tr('delete_confirm', lang, medication.name),
      [
        { text: tr('cancel', lang), style: 'cancel' },
        {
          text: tr('delete', lang), style: 'destructive',
          onPress: async () => {
            try {
              await StorageService.deleteMedication(medication.id);
              await NotificationService.cancelMedicationNotifications(medication.id);
              await loadData();
            } catch (error) { Alert.alert(tr('error', lang), tr('failed_delete', lang)); }
          },
        },
      ]
    );
  };

  const deleteAllMedications = () => {
    const medsToDelete = getFilteredMeds();
    if (medsToDelete.length === 0) return;

    const translateTab = activeTab === 'active' 
      ? tr('active', lang).toLowerCase() 
      : activeTab === 'upcoming' 
        ? tr('upcoming', lang).toLowerCase() 
        : tr('past', lang).toLowerCase();

    Alert.alert(
      tr('delete_all', lang),
      tr('delete_all_confirm', lang, translateTab),
      [
        { text: tr('cancel', lang), style: 'cancel' },
        {
          text: tr('delete', lang), style: 'destructive',
          onPress: async () => {
            try {
              for (const med of medsToDelete) {
                await StorageService.deleteMedication(med.id);
                await NotificationService.cancelMedicationNotifications(med.id);
              }
              await loadData();
            } catch (error) { Alert.alert(tr('error', lang), tr('failed_delete', lang)); }
          },
        },
      ]
    );
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : 'en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }
    );
  };

  const filteredMeds = getFilteredMeds();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{tr('back', lang)}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{tr('all_medications', lang)}</Text>
        {filteredMeds.length > 0 ? (
          <TouchableOpacity onPress={deleteAllMedications} style={styles.headerSpacer}>
            <Text style={{ color: colors.danger, fontSize: 14, fontWeight: '600', textAlign: 'right' }}>
              🗑️
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.headerSpacer} />
        )}
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, activeTab === 'active' && styles.tabActive]} onPress={() => setActiveTab('active')}>
          <Text style={[styles.tabText, activeTab === 'active' && styles.tabTextActive]}>
            {tr('active', lang)} ({activeMeds.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'upcoming' && styles.tabUpcoming]} onPress={() => setActiveTab('upcoming')}>
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.tabTextActive]}>
            {tr('upcoming', lang)} ({upcomingMeds.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'past' && styles.tabPast]} onPress={() => setActiveTab('past')}>
          <Text style={[styles.tabText, activeTab === 'past' && styles.tabTextActive]}>
            {tr('past', lang)} ({pastMeds.length})
          </Text>
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
                    {tr('stock', lang)}: {med.stock} {tr('units', lang)}{med.minStock != null && med.stock <= med.minStock ? ' ⚠️' : ''}
                  </Text>
                )}
                <Text style={styles.medicationDates}>
                  {formatDate(med.startDate)} — {med.endDate ? formatDate(med.endDate) : tr('ongoing', lang)}
                </Text>
                <View style={styles.timesRow}>
                  {med.isAsNeeded ? (
                    <View style={styles.timeChip}><Text style={styles.timeChipText}>{tr('as_needed', lang)}</Text></View>
                  ) : (
                    med.times.map((time, index) => (
                      <View key={index} style={styles.timeChip}><Text style={styles.timeChipText}>{time}</Text></View>
                    ))
                  )}
                </View>
                <MedicationProgress medication={med} />
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity onPress={() => router.push(`/edit-medication?id=${med.id}`)} style={styles.editButton}>
                  <Text style={styles.editButtonText}>{tr('edit', lang)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteMedication(med)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>{tr('delete', lang)}</Text>
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
