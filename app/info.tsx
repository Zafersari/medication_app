import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme, ThemeColors } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { tr } from '../utils/i18n';

interface FAQItemProps {
  question: string;
  answer: string;
  colors: ThemeColors;
}

function FAQItem({ question, answer, colors }: FAQItemProps) {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggle = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={toggle}
      style={[styles(colors).faqItem, expanded && styles(colors).faqItemExpanded]}
    >
      <View style={styles(colors).faqHeader}>
        <Text style={styles(colors).faqQuestion}>{question}</Text>
        <Text style={styles(colors).faqChevron}>{expanded ? '▲' : '▼'}</Text>
      </View>
      {expanded && (
        <Text style={styles(colors).faqAnswer}>{answer}</Text>
      )}
    </TouchableOpacity>
  );
}

export default function InfoScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { lang } = useLanguage();
  const s = styles(colors);

  const faqItems = [
    { q: tr('faq_q1', lang), a: tr('faq_a1', lang) },
    { q: tr('faq_q2', lang), a: tr('faq_a2', lang) },
    { q: tr('faq_q3', lang), a: tr('faq_a3', lang) },
    { q: tr('faq_q4', lang), a: tr('faq_a4', lang) },
    { q: tr('faq_q5', lang), a: tr('faq_a5', lang) },
  ];

  return (
    <View style={s.container}>
      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()} style={s.backButton}>
          <Text style={s.backText}>{tr('back', lang)}</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>{tr('info_and_help', lang)}</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView style={s.scrollView} showsVerticalScrollIndicator={false}>
        {/* App Icon & Version */}
        <View style={s.appBanner}>
          <Text style={s.appIcon}>💊</Text>
          <Text style={s.appName}>MedTracker</Text>
          <Text style={s.appVersion}>v1.0.0</Text>
        </View>

        {/* About */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{tr('about_title', lang)}</Text>
          <Text style={s.sectionBody}>{tr('about_description', lang)}</Text>
        </View>

        {/* Features */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{tr('features_title', lang)}</Text>
          {[1, 2, 3, 4, 5].map((i) => (
            <View key={i} style={s.featureRow}>
              <Text style={s.featureBullet}>
                {i === 1 ? '💊' : i === 2 ? '🔔' : i === 3 ? '📅' : i === 4 ? '🌍' : '📦'}
              </Text>
              <Text style={s.featureText}>{tr(`feature_${i}`, lang)}</Text>
            </View>
          ))}
        </View>

        {/* Privacy & Security */}
        <View style={s.section}>
          <View style={s.privacyHeader}>
            <Text style={s.privacyIcon}>🔒</Text>
            <Text style={s.sectionTitle}>{tr('privacy_title', lang)}</Text>
          </View>
          <Text style={s.sectionBody}>{tr('privacy_description', lang)}</Text>
        </View>

        {/* FAQ */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{tr('faq_title', lang)}</Text>
          <View style={s.faqList}>
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.q}
                answer={item.a}
                colors={colors}
              />
            ))}
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 60,
      paddingBottom: 16,
      paddingHorizontal: 20,
      backgroundColor: colors.card,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    backButton: {
      width: 60,
    },
    backText: {
      fontSize: 16,
      color: colors.primary,
      fontWeight: '600',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
    },
    scrollView: {
      flex: 1,
    },
    appBanner: {
      alignItems: 'center',
      paddingVertical: 32,
      backgroundColor: colors.card,
      marginBottom: 12,
    },
    appIcon: {
      fontSize: 56,
      marginBottom: 8,
    },
    appName: {
      fontSize: 24,
      fontWeight: '800',
      color: colors.text,
      letterSpacing: 0.5,
    },
    appVersion: {
      fontSize: 14,
      color: colors.textMuted,
      marginTop: 4,
    },
    section: {
      backgroundColor: colors.card,
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: 16,
      padding: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 12,
    },
    sectionBody: {
      fontSize: 15,
      lineHeight: 23,
      color: colors.textSecondary,
    },
    featureRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 12,
      gap: 12,
    },
    featureBullet: {
      fontSize: 20,
      marginTop: 0,
    },
    featureText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 21,
      color: colors.textSecondary,
    },
    privacyHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 0,
    },
    privacyIcon: {
      fontSize: 20,
    },
    faqList: {
      gap: 8,
    },
    faqItem: {
      backgroundColor: colors.inputBg,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.borderLight,
    },
    faqItemExpanded: {
      borderColor: colors.primary + '44',
      backgroundColor: colors.primary + '08',
    },
    faqHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12,
    },
    faqQuestion: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
      lineHeight: 22,
    },
    faqChevron: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 4,
    },
    faqAnswer: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.textSecondary,
      marginTop: 12,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: colors.borderLight,
    },
  });
