import React from 'react';
import { Button, Text, View } from 'react-native';

import useStore, { StoreState } from '../../src/store/useStore';

const ZustandExample = () => {
  const count = useStore((state: StoreState) => state.count);
  const increase = useStore((state: StoreState) => state.increase);
  const decrease = useStore((state: StoreState) => state.decrease);
  const reset = useStore((state: StoreState) => state.reset);
  return (
    <View className="flex flex-col items-center space-y-4 mt-4">
      <Text className="text-lg font-bold mb-2">Zustand example</Text>
      <Text className="text-sm">Count: {count}</Text>
      <View className="flex flex-row space-x-2">
        <Button title="Increase" onPress={increase} />
        <Button title="Decrease" onPress={decrease} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};

export default ZustandExample;
