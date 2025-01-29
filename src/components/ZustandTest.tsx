import React from 'react';
import { Button, Text } from 'react-native';

import useStore, { StoreState } from '../../src/store/useStore';

const ZustandTest = () => {
  const count = useStore((state: StoreState) => state.count);
  const increase = useStore((state: StoreState) => state.increase);
  const decrease = useStore((state: StoreState) => state.decrease);
  const reset = useStore((state: StoreState) => state.reset);
  return (
    <>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Count: {count}</Text>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="Reset" onPress={reset} />
    </>
  );
};

export default ZustandTest;
