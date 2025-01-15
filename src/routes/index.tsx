import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import { useTranslations } from '@/hooks/useTranslations';

const Home = () => {
  const { t } = useTranslations();
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <Text>{t('home.title')}</Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />
    </View>
  );
};

export default Home;
