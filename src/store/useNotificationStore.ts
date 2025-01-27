import * as Notifications from 'expo-notifications';
import { create } from 'zustand';

export const useNotificationStore = create<{
  expoPushToken: string;
  notification: Notifications.Notification | undefined;
  setExpoPushToken: (token: string) => void;
  setNotification: (notification: Notifications.Notification | undefined) => void;
}>(set => ({
  expoPushToken: '',
  notification: undefined,
  setExpoPushToken: (token: string) => set({ expoPushToken: token }),
  setNotification: (notification: Notifications.Notification | undefined) => set({ notification }),
}));
