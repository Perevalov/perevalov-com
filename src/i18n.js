
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const fallbackLng = ['en']
const availableLanguages = ['en', 'de', 'ru']

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend) // serving translations from /public/locales
    .init({
        debug: false,
        fallbackLng: fallbackLng,
        whitelist: availableLanguages
    })

export default i18n;