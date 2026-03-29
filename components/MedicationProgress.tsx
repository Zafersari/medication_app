import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Medication } from '../types/medication';
import { tr } from '../utils/i18n';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  medication: Medication;
}

export const MedicationProgress: React.FC<Props> = ({ medication }) => {
  const { colors } = useTheme();
  const { lang } = useLanguage();

  if (!medication.endDate || medication.isAsNeeded || medication.times.length === 0) {
    return null;
  }

  // Calculate total doses
  const start = new Date(medication.startDate);
  start.setHours(0, 0, 0, 0);
  const end = new Date(medication.endDate);
  end.setHours(0, 0, 0, 0);
  
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const totalDosesToTake = diffDays * medication.times.length;
  
  if (totalDosesToTake <= 0) return null;

  const taken = Math.min(totalDosesToTake, medication.totalDosesTaken || 0);
  const percentage = Math.min(100, Math.round((taken / totalDosesToTake) * 100));

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <Text style={[styles.text, { color: colors.textSecondary }]}>
          {tr('medication_progress_doses', lang, taken, totalDosesToTake)}
        </Text>
        <Text style={[styles.percentage, { color: colors.primary }]}>
          {tr('completed_percent', lang, percentage)}
        </Text>
      </View>
      <View style={[styles.barContainer, { backgroundColor: colors.border }]}>
        <View style={[styles.barFill, { backgroundColor: colors.primary, width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
  percentage: {
    fontSize: 12,
    fontWeight: '700',
  },
  barContainer: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 3,
  },
});
