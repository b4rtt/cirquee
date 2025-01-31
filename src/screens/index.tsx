import { router } from 'expo-router';
import React from 'react';
import { Text, Button, SafeAreaView, View, ScrollView } from 'react-native';

import Logo from '../../assets/images/icons/circus.svg';

import { PushNotifications } from '@/components/PushNotifications';
import User from '@/components/User';
import ZustandExample from '@/components/ZustandExample';
import { useTranslations } from '@/hooks/useTranslations';
import useUser from '@/hooks/useUser';
import useActiveRoute from '@/store/useActiveRoute';
import { isWeb } from '@/utils/deviceInfo';
import { showToast } from '@/utils/toast';

const Home = () => {
  const { t } = useTranslations();
  const { activeRoute } = useActiveRoute();

  const { user } = useUser();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <User />

        {user && (
          <>
            <View className="items-center justify-center mb-4">
              <Text className="text-lg font-bold">Svg example</Text>
              <Logo width={100} height={100} />
            </View>

            <View className="items-center justify-center mb-4 px-4">
              <Text className="text-sm">Translate example: {t('index.example')}</Text>
              <Text className="text-sm mt-2">Active route: {activeRoute}</Text>
            </View>

            <Button title="Open posts" onPress={() => router.push('/posts')} />

            {!isWeb && <PushNotifications />}

            <ZustandExample />

            <Text className="text-lg font-bold mt-4 text-center">Toast example</Text>
            <View className="flex-row justify-center space-x-2">
              <Button
                title="Show success"
                onPress={() => showToast({ text1: 'Title', text2: 'Description', type: 'success' })}
              />
              <Button
                title="Show error"
                onPress={() => showToast({ text1: 'Title', text2: 'Description', type: 'error' })}
              />
              <Button
                title="Show custom"
                onPress={() =>
                  showToast({ text1: 'Title', text2: 'Description', type: 'customToast' })
                }
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
