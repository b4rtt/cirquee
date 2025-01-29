import '../../global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';

import { toastConfig } from '@/components/Toast';
import { loadImages, loadFonts } from '@/theme';
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout(): ReactNode {
  const { colorScheme, setColorScheme } = useColorScheme();
  setColorScheme('system');

  const top = useSafeAreaInsets().top;

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
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode={colorScheme}>
        <StatusBar style={colorScheme} />

        <Text style={{ marginTop: 100 }}>{JSON.stringify(colorScheme)}</Text>

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
        <Toast config={toastConfig} topOffset={top} />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
