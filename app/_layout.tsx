import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { NotificationService } from '../services/notificationService';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

function StackLayout() {
  const { colors } = useTheme();

  useEffect(() => {
    NotificationService.requestPermissions();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="add-medication" />
      <Stack.Screen name="edit-medication" />
      <Stack.Screen name="all-medications" />
      <Stack.Screen name="calendar" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}
