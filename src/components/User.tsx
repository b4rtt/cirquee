import React from 'react';
import { View, Text, Button } from 'react-native';

import useUser from '@/hooks/useUser';

const User: React.FC = () => {
  const { user, clearUser } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? <Text>Welcome, {user.name}!</Text> : <Text>Loading user data...</Text>}
      <Button title="Clear User" onPress={clearUser} />
    </View>
  );
};

export default User;
