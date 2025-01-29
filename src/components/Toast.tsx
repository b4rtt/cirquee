import React from 'react';
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

  tomatoToast: ({ text1 = 'Default Text', ...props }: { text1?: string } & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'tomato' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text1={text1}
    />
  ),
};
