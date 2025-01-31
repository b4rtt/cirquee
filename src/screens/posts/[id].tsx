import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, SafeAreaView, ScrollView, View } from 'react-native';

import { usePosts } from '@/hooks/usePosts';

const Posts = () => {
  const { id } = useLocalSearchParams();

  const { dataPosts } = usePosts();

  const post = dataPosts?.find(post => post.id === Number(id));

  return (
    <SafeAreaView className="flex-1 items-center">
      <ScrollView className="w-full">
        <View className="p-4">
          <Text className="text-lg font-bold">{post?.title}</Text>
          <Text className="text-gray-600 mt-2">{post?.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;
