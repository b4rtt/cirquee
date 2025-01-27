import { Text } from 'react-native';

import useStore, { StoreState } from '../../src/store/useStore';

const ZustandView = () => {
  const count = useStore((state: StoreState) => state.count);
  return (
    <>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Test: {count}</Text>
    </>
  );
};

export default ZustandView;
