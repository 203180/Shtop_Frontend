import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // load translations using http backend
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{lng}}.json', // path to translation files
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language if translation not found
        interpolation: {
            escapeValue: false, // not needed for React
        },
        react: {
            useSuspense: false, // set to true if you're using react 16.8+ and want to use hooks
        },
    });

export default i18n;