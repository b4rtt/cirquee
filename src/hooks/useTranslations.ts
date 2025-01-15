import { useLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import cs from '../locales/cs.json';
import en from '../locales/en.json';

const i18n = new I18n(
  {
    cs,
    en,
  },
  { defaultLocale: 'cs', enableFallback: true },
);

export const useTranslations = () => {
  const languageCode = useLocales()[0].languageCode ?? 'cs';
  i18n.locale = languageCode;

  const t = (path: string) => {
    return i18n.t(path);
  };

  return { t };
};
