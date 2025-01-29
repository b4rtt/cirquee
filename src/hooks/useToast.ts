import Toast, { ToastShowParams } from 'react-native-toast-message';

export const useToast = () => {
  const show = (params: ToastShowParams) => {
    Toast.show(params);
  };

  const hide = () => {
    Toast.hide();
  };

  return { show, hide };
};
