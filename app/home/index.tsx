import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import ZustandTest from '@/components/ZustandTest';

const Home = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
      <Text>Home</Text>
      <Button title="Go to Index" onPress={() => router.back()} />

      <View style={{ height: 100 }} />

      <ZustandTest />
    </View>
  );
};

export default Home;
