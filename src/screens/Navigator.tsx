import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { loadImages, loadFonts } from '@/theme';

SplashScreen.preventAutoHideAsync();

const Navigator = () => {
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
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Navigator;
