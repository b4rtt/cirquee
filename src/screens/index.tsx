import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import Logo from '../../assets/images/icons/test.svg';

import { PushNotifications } from '@/components/PushNotifications';
import User from '@/components/User';
import { useTranslations } from '@/hooks/useTranslations';

const Home = () => {
  const { t } = useTranslations();
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <Text>{t('home.title')}</Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />

      <Logo width={100} height={100} />

      <PushNotifications />

      <User />
    </View>
  );
};

export default Home;
