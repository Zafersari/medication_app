import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@theme_preference';

export const lightColors = {
  background: '#f5f5f5',
  card: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  textMuted: '#999999',
  border: '#eeeeee',
  borderLight: '#dddddd',
  primary: '#007AFF',
  success: '#34C759',
  danger: '#ff3b30',
  progressBg: '#e0e0e0',
  doseCardBorder: '#e0e0e0',
  doseCardTakenBg: '#f0f9f4',
  doseCardTakenBorder: '#34C759',
  inputBg: '#ffffff',
  chipBg: '#f0f0f0',
  tabInactiveBg: '#f0f0f0',
  tabInactiveText: '#666666',
  headerBg: '#ffffff',
};

export const darkColors = {
  background: '#121212',
  card: '#1e1e1e',
  text: '#e0e0e0',
  textSecondary: '#a0a0a0',
  textMuted: '#707070',
  border: '#2c2c2c',
  borderLight: '#3a3a3a',
  primary: '#0a84ff',
  success: '#30d158',
  danger: '#ff453a',
  progressBg: '#3a3a3a',
  doseCardBorder: '#3a3a3a',
  doseCardTakenBg: '#1a2e1a',
  doseCardTakenBorder: '#30d158',
  inputBg: '#2c2c2c',
  chipBg: '#2c2c2c',
  tabInactiveBg: '#2c2c2c',
  tabInactiveText: '#a0a0a0',
  headerBg: '#1e1e1e',
};

export type ThemeColors = typeof lightColors;
export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  colors: ThemeColors;
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  colors: lightColors,
  mode: 'system',
  isDark: false,
  setMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>('system');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((saved) => {
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        setModeState(saved);
      }
      setLoaded(true);
    });
  }, []);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    AsyncStorage.setItem(THEME_KEY, newMode);
  };

  const isDark =
    mode === 'dark' || (mode === 'system' && (systemScheme === 'dark' || systemScheme === null));

  const colors = isDark ? darkColors : lightColors;

  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={{ colors, mode, isDark, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
