import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { MedicationInfo } from '../data/medications';
import { searchMedicationsHybrid } from '../services/medicationSearchService';
import { ThemeColors } from '../contexts/ThemeContext';

interface MedicationAutocompleteProps {
  value: string;
  onChangeText: (text: string) => void;
  onSelectMedication?: (medication: MedicationInfo) => void;
  placeholder?: string;
  colors: ThemeColors;
}

export default function MedicationAutocomplete({
  value,
  onChangeText,
  onSelectMedication,
  placeholder = 'e.g., Amoxicillin',
  colors,
}: MedicationAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<MedicationInfo[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestQuery = useRef<string>('');

  const performSearch = useCallback(async (text: string) => {
    latestQuery.current = text;

    if (text.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const results = await searchMedicationsHybrid(text);

      // Only update if this is still the latest query (avoid stale results)
      if (latestQuery.current === text) {
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
      }
    } catch {
      // Fallback handled inside service
    } finally {
      if (latestQuery.current === text) {
        setLoading(false);
      }
    }
  }, []);

  const handleTextChange = useCallback(
    (text: string) => {
      onChangeText(text);

      // Debounce: wait 300ms after user stops typing
      if (searchTimer.current) clearTimeout(searchTimer.current);
      searchTimer.current = setTimeout(() => performSearch(text), 300);
    },
    [onChangeText, performSearch],
  );

  const handleSelect = useCallback(
    (medication: MedicationInfo) => {
      onChangeText(medication.name);
      setSuggestions([]);
      setShowSuggestions(false);
      Keyboard.dismiss();
      onSelectMedication?.(medication);
    },
    [onChangeText, onSelectMedication],
  );

  const styles = makeStyles(colors);

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={value}
          onChangeText={handleTextChange}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          onFocus={() => {
            if (value.trim().length >= 2) {
              performSearch(value);
            }
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 250);
          }}
        />
        {loading && (
          <ActivityIndicator
            size="small"
            color={colors.primary}
            style={styles.spinner}
          />
        )}
      </View>

      {showSuggestions && (
        <View style={styles.dropdown}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled
            style={styles.list}
          >
            {suggestions.map((item, index) => (
              <TouchableOpacity
                key={`${item.name}-${index}`}
                style={[
                  styles.suggestionRow,
                  index === suggestions.length - 1 && styles.suggestionRowLast,
                ]}
                onPress={() => handleSelect(item)}
                activeOpacity={0.7}
              >
                <View style={styles.suggestionMain}>
                  <Text style={styles.suggestionName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  {item.genericName && item.genericName.toLowerCase() !== item.name.toLowerCase() && (
                    <Text style={styles.genericName} numberOfLines={1}>
                      ({item.genericName})
                    </Text>
                  )}
                  <View style={styles.badges}>
                    <View style={[styles.badge, { backgroundColor: colors.primary + '22' }]}>
                      <Text style={[styles.badgeText, { color: colors.primary }]}>{item.form}</Text>
                    </View>
                    <View style={[styles.badge, { backgroundColor: colors.success + '22' }]}>
                      <Text style={[styles.badgeText, { color: colors.success }]} numberOfLines={1}>
                        {item.category}
                      </Text>
                    </View>
                  </View>
                </View>
                {item.commonDosages[0] !== '—' && (
                  <Text style={styles.dosageHint} numberOfLines={1}>
                    {item.commonDosages.join(', ')}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const makeStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrapper: {
      position: 'relative',
      zIndex: 100,
    },
    inputWrapper: {
      position: 'relative',
      justifyContent: 'center',
    },
    input: {
      backgroundColor: colors.inputBg,
      borderWidth: 1,
      borderColor: colors.borderLight,
      borderRadius: 12,
      padding: 16,
      paddingRight: 44,
      fontSize: 16,
      color: colors.text,
    },
    spinner: {
      position: 'absolute',
      right: 14,
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.borderLight,
      borderTopWidth: 0,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      maxHeight: 260,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
      zIndex: 999,
    },
    list: {
      maxHeight: 260,
    },
    suggestionRow: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    suggestionRowLast: {
      borderBottomWidth: 0,
    },
    suggestionMain: {
      flexDirection: 'column',
      gap: 2,
    },
    suggestionName: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
    },
    genericName: {
      fontSize: 12,
      color: colors.textMuted,
      fontStyle: 'italic',
    },
    badges: {
      flexDirection: 'row',
      gap: 6,
      marginTop: 4,
      flexWrap: 'wrap',
    },
    badge: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 6,
    },
    badgeText: {
      fontSize: 11,
      fontWeight: '600',
    },
    dosageHint: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 4,
    },
  });
