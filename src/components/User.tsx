import React from 'react';
import { View, Text, Button } from 'react-native';

import useUser from '@/hooks/useUser';

const User: React.FC = () => {
  const { user, clearUser, login } = useUser();

  return (
    <View className="pt-4 pb-4 justify-center items-center">
      {user ? <Text>Welcome, {user.name}!</Text> : <Text>User is not logged in</Text>}
      {user ? (
        <Button title="Logout" onPress={clearUser} />
      ) : (
        <Button title="Login" onPress={login} />
      )}
    </View>
  );
};

export default User;
