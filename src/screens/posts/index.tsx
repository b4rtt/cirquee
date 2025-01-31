import { router } from 'expo-router';
import React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { usePosts } from '@/hooks/usePosts';

const Posts = () => {
  const { dataPosts } = usePosts();

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <FlatList
        data={dataPosts}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-4 border-b border-gray-200"
            onPress={() => router.push(`/posts/${item.id}`)}>
            <Text className="text-lg font-bold mb-2">{item.title}</Text>
            <Text className="text-gray-600">{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Posts;
