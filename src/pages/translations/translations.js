import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_ES } from './es-ES';
import { TRANSLATIONS_US } from './en-US';

const lng = navigator.language;

i18next.use(initReactI18next).init({
  lng,
  resources: {
    'es-ES': {
      translation: TRANSLATIONS_ES
    },
    'en-US': {
      translation: TRANSLATIONS_US
    },
  }
})