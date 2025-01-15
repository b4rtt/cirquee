import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
      <Text>Home</Text>
      <Button title="Go to Index" onPress={() => router.push('/')} />
    </View>
  );
};

export default Home;
