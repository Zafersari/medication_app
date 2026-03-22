import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { NotificationService } from '../services/notificationService';

export default function RootLayout() {
  useEffect(() => {
    // Request notification permissions on app start
    NotificationService.requestPermissions();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#f5f5f5' },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="add-medication" />
      <Stack.Screen name="edit-medication" />
    </Stack>
  );
}
