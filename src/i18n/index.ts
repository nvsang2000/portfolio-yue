import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import vie from './locales/vie';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: vie,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;