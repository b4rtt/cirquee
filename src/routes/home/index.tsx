import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import Dialog from '@/components/DIalog';
import ZustandTest from '@/components/ZustandTest';
import { fonts } from '@/theme';

const Home = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      className="bg-blue-500 dark:bg-red-500">
      <Text style={{ fontFamily: fonts.openSans.regular }}>Home </Text>
      <Button title="Go to Index" onPress={() => router.back()} />

      <View style={{ height: 100 }} />
      <Dialog />
      <ZustandTest />
    </View>
  );
};

export default Home;
