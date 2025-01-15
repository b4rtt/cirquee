import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <Text>Index</Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />
    </View>
  );
};

export default Home;
