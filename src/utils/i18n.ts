import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../i18n/locales/en';
import vie from '../i18n/locales/vie';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vie: {
        translation: vie,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'vie',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;