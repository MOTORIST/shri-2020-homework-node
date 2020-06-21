import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageDetectorOptions from './language-detector-options';

const languageDetector = new LanguageDetector(null, languageDetectorOptions);

i18n
  .use(languageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    whitelist: ['en', 'ru'],
    preload: ['en', 'ru'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error: Error) => {
    throw error;
  });

export default i18n;
