import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, Image, SafeAreaView } from 'react-native';

import User from '@/components/User';
import ZustandTest from '@/components/ZustandTest';
import ZustandView from '@/components/ZustandView';
import { useData } from '@/hooks/useData';
import useActiveRoute from '@/store/useActiveRoute';
import { fonts } from '@/theme';
import { showToast } from '@/utils/toast';

const Home = () => {
  const { isLoading, isError, data, error, isRefetching } = useData();
  const { activeRoute } = useActiveRoute();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      className="bg-blue-100 dark:bg-red-500">
      {(isLoading || isRefetching) && <Text>Loading...</Text>}

      {isError && <Text>Error: {error?.message}</Text>}

      {!isLoading && !isError && <Text style={{ fontFamily: fonts.openSans.regular }}>Home</Text>}

      <Image source={{ uri: data?.image_uri }} style={{ width: 100, height: 100 }} />

      <Button title="Go to Index" onPress={() => router.back()} />

      <Text>{activeRoute}</Text>

      <Button
        title="Show"
        onPress={() => showToast({ text1: 'Title', text2: 'Description', type: 'customToast' })}
      />

      <View style={{ height: 100 }} />
      <ZustandTest />

      <ZustandView />

      <User />
    </SafeAreaView>
  );
};

export default Home;
