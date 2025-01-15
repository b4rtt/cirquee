import { Stack, SplashScreen } from 'expo-router';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { loadImages, loadFonts } from '@/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): ReactNode {
  useEffect(() => {
    const preload = async () => {
      try {
        await Promise.all([loadImages(), loadFonts()]);

        await SplashScreen.hideAsync();
      } catch (err) {
        console.log('[##] preload error:', err);
      }
    };

    preload();
  }, []);

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Expo Router',
          animation: 'none',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Home',
          animation: 'none',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
