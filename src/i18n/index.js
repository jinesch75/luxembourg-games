import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en.json'
import fr from './fr.json'
import de from './de.json'
import lb from './lb.json'
import pt from './pt.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      lb: { translation: lb },
      pt: { translation: pt }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de', 'lb', 'pt'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'letz-lang'
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

export const LANGUAGES = [
  { code: 'en', label: 'English',       flag: '🇬🇧' },
  { code: 'fr', label: 'Français',      flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch',       flag: '🇩🇪' },
  { code: 'lb', label: 'Lëtzebuergesch', flag: '🇱🇺' },
  { code: 'pt', label: 'Português',     flag: '🇵🇹' }
]
