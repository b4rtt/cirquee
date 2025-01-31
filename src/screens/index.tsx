import { router } from 'expo-router';
import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';

import Logo from '../../assets/images/icons/cirquee.svg';

import { PushNotifications } from '@/components/PushNotifications';
import User from '@/components/User';
import { useTranslations } from '@/hooks/useTranslations';
import config from '@/utils/config';

const Home = () => {
  const { t } = useTranslations();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: 100,
      }}>
      <Text>
        {t('home.title')} {config.ENV}
      </Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />

      <Logo width={100} height={100} />

      <PushNotifications />

      <User />
    </SafeAreaView>
  );
};

export default Home;
