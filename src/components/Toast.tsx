import React from 'react';
import { Text, View } from 'react-native';
import { BaseToast, ErrorToast, BaseToastProps } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  customToast: ({
    text1,
    text2,
    ...props
  }: { text1?: string; text2?: string } & BaseToastProps) => (
    <View
      style={{
        width: '100%',
        backgroundColor: 'tomato',
      }}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  ),
};
