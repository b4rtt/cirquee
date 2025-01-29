import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const envConfig: ExpoConfig = {
    ...config,
    scheme: process.env.EXPO_PUBLIC_SCHEME ?? '',
    slug: process.env.EXPO_PUBLIC_SLUG ?? '',
    name: process.env.EXPO_PUBLIC_NAME ?? '',
    icon:
      process.env.NODE_ENV === 'development'
        ? './assets/images/icon-dev.png'
        : './assets/images/icon.png',
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
      googleServicesFile:
        process.env.NODE_ENV === 'development'
          ? './.firebase/GoogleService-Info-dev.plist'
          : './.firebase/GoogleService-Info.plist',
    },
    splash: {
      ...config.splash,
      image:
        process.env.NODE_ENV === 'development'
          ? './assets/images/splash-icon-dev.png'
          : './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    android: {
      ...config.android,
      package: process.env.EXPO_PUBLIC_IOS_ANDROID_PACKAGE,
      adaptiveIcon: {
        foregroundImage:
          process.env.NODE_ENV === 'development'
            ? './assets/images/adaptive-icon-dev.png'
            : './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      googleServicesFile:
        process.env.NODE_ENV === 'development'
          ? './.firebase/google-services-dev.json'
          : './.firebase/google-services.json',
    },
    web: {
      ...config.web,
      favicon:
        process.env.NODE_ENV === 'development'
          ? './assets/images/favicon-dev.png'
          : './assets/images/favicon.png',
      bundler: 'metro',
    },
    updates: {
      url: `https://u.expo.dev/${process.env.EXPO_PUBLIC_PROJECT_ID}`,
    },
    extra: {
      ...config.extra,
      eas: { projectId: process.env.EXPO_PUBLIC_PROJECT_ID },
      ENV: process.env.EXPO_PUBLIC_ENV,
      API_URL: process.env.EXPO_PUBLIC_API_URL,
      DEFAULT_LOCALE: process.env.EXPO_PUBLIC_DEFAULT_LOCALE,
    },
  };
  return envConfig;
};
