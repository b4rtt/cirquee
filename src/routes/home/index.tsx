import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { fetchData } from '@/api/fetchData';
import Dialog from '@/components/Dialog';
import ZustandTest from '@/components/ZustandTest';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus';
import { fonts } from '@/theme';

const Home = () => {
  const { isPending, isError, data, error, refetch, isRefetching } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchData,
  });

  useRefreshOnFocus(refetch);

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      className="bg-blue-500 dark:bg-red-500">
      {(isPending || isRefetching) && <Text>Loading...</Text>}

      {isError && <Text>Error: {error?.message}</Text>}

      {!isPending && !isError && <Text style={{ fontFamily: fonts.openSans.regular }}>Home</Text>}

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
    </View>
  );
};

export default Home;
