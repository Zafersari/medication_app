import * as Notifications from 'expo-notifications';
import { SchedulableTriggerInputTypes } from 'expo-notifications';
import { Platform } from 'react-native';
import { Medication } from '../types/medication';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export class NotificationService {
  /**
   * Request notification permissions
   */
  static async requestPermissions(): Promise<boolean> {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return false;
    }

    // For Android, set notification channel
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('medication-reminders', {
        name: 'Medication Reminders',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return true;
  }

  /**
   * Schedule notifications for a medication
   */
  static async scheduleMedicationNotifications(medication: Medication): Promise<string[]> {
    const notificationIds: string[] = [];
    const startDate = new Date(medication.startDate);
    const endDate = new Date(medication.endDate);

    // Calculate the number of days in the treatment
    const daysDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    for (let day = 0; day <= daysDifference; day++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + day);

      for (const time of medication.times) {
        const [hours, minutes] = time.split(':').map(Number);
        const scheduledDate = new Date(currentDate);
        scheduledDate.setHours(hours, minutes, 0, 0);

        // Only schedule future notifications
        if (scheduledDate.getTime() > Date.now()) {
          try {
            const notificationId = await Notifications.scheduleNotificationAsync({
              content: {
                title: '💊 Medication Reminder',
                body: `Time to take ${medication.dosage} of ${medication.name}`,
                data: {
                  medicationId: medication.id,
                  medicationName: medication.name,
                  dosage: medication.dosage,
                  time: time,
                },
                sound: true,
                priority: Notifications.AndroidNotificationPriority.HIGH,
              },
              trigger: {
                type: SchedulableTriggerInputTypes.DATE,
                date: scheduledDate,
            },
            });
            notificationIds.push(notificationId);
          } catch (error) {
            console.error('Error scheduling notification:', error);
          }
        }
      }
    }

    return notificationIds;
  }

  /**
   * Cancel all notifications for a specific medication
   */
  static async cancelMedicationNotifications(medicationId: string): Promise<void> {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();

    const notificationsToCancel = scheduledNotifications
      .filter(notification => notification.content.data?.medicationId === medicationId)
      .map(notification => notification.identifier);

    for (const id of notificationsToCancel) {
      await Notifications.cancelScheduledNotificationAsync(id);
    }
  }

  /**
   * Cancel all scheduled notifications
   */
  static async cancelAllNotifications(): Promise<void> {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  /**
   * Get all scheduled notifications
   */
  static async getAllScheduledNotifications(): Promise<Notifications.NotificationRequest[]> {
    return await Notifications.getAllScheduledNotificationsAsync();
  }
}
