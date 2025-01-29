import { useLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import cs from '../locales/cs.json';
import en from '../locales/en.json';

import { DEFAULT_LOCALE } from '@/utils/config';

const i18n = new I18n(
  {
    cs,
    en,
  },
  DEFAULT_LOCALE,
);

export const useTranslations = () => {
  const languageCode = useLocales()[0].languageCode ?? DEFAULT_LOCALE;
  i18n.locale = languageCode;

  const t = (path: string) => {
    return i18n.t(path);
  };

  return { t };
};
