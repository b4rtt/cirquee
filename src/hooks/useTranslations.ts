import Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import cs from '../locales/cs.json';
import en from '../locales/en.json';

const languageCode = Localization?.getLocales?.()[0]?.languageCode ?? 'cs';

const i18n = new I18n(
  {
    cs,
    en,
  },
  { defaultLocale: 'cs', enableFallback: true },
);
i18n.locale = languageCode;

export const useTranslations = () => {
  const t = (path: string) => {
    return i18n.t(path);
  };

  return { t };
};
