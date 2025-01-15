import '../../global.css';

import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';

import { loadImages, loadFonts } from '@/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): ReactNode {
  const { colorScheme, setColorScheme } = useColorScheme();
  setColorScheme('system');

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
    <>
      <GluestackUIProvider mode={colorScheme}>
        <StatusBar style={colorScheme} />

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
      </GluestackUIProvider>
    </>
  );
}
