import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import useStore, { StoreState } from '../../src/store/useStore';

const Home = () => {
  const count = useStore((state: StoreState) => state.count);
  const increase = useStore((state: StoreState) => state.increase);
  const decrease = useStore((state: StoreState) => state.decrease);
  const reset = useStore((state: StoreState) => state.reset);

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
      <Text>Home</Text>
      <Button title="Go to Index" onPress={() => router.back()} />

      <View style={{ height: 100 }} />

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Count: {count}</Text>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

export default Home;
