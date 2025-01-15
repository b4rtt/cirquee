import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View, Text, Button } from 'react-native';

import ZustandTest from '@/components/ZustandTest';
import { fonts } from '@/theme';

const Home = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  setColorScheme('system');

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      className="bg-blue-500 dark:bg-red-500">
      <Text style={{ fontFamily: fonts.openSans.regular }}>Home {colorScheme}</Text>
      <Button title="Go to Index" onPress={() => router.back()} />

      <View style={{ height: 100 }} />

      <ZustandTest />
    </View>
  );
};

export default Home;
