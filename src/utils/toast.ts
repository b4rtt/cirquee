import Toast, { ToastShowParams } from 'react-native-toast-message';

export const showToast = (params: ToastShowParams) => {
  Toast.show(params);
};

export const hideToast = () => {
  Toast.hide();
};
