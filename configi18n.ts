import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './public/locales/en.json'
import fr from './public/locales/fr.json'
import ar from './public/locales/ar.json'

i18n
  // Enable automatic language detection (runs in browser; keep import/use on client only)
  .use(LanguageDetector)
  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    resources: {
      en: { translation: en as unknown as Record<string, string> },
      fr: { translation: fr as unknown as Record<string, string> },
      ar: { translation: ar as unknown as Record<string, string> },
    },
    // Ensure we detect and cache language in localStorage/cookies if available
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  })

export default i18n
