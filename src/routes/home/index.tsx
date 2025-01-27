import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Dialog from '@/components/Dialog';
import ZustandTest from '@/components/ZustandTest';
import ZustandView from '@/components/ZustandView';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { useData } from '@/hooks/useData';
import { fonts } from '@/theme';

const Home = () => {
  const { isLoading, isError, data, error, isRefetching } = useData();

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      className="bg-blue-500 dark:bg-red-500">
      {(isLoading || isRefetching) && <Text>Loading...</Text>}

      {isError && <Text>Error: {error?.message}</Text>}

      {!isLoading && !isError && <Text style={{ fontFamily: fonts.openSans.regular }}>Home</Text>}

      <Image source={{ uri: data?.image_uri }} style={{ width: 100, height: 100 }} />

      <Button title="Go to Index" onPress={() => router.back()} />
      <Avatar size="md">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <AvatarBadge />
      </Avatar>
      <View style={{ height: 100 }} />
      <Dialog />
      <ZustandTest />

      <ZustandView />
    </View>
  );
};

export default Home;
