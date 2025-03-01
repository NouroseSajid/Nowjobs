// src/i18n/index.ts

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import all locale files
import en from './locales/en.json';
import fr from './locales/fr.json';
import nl from './locales/nl.json';

// Define supported languages for easy maintenance
export const SUPPORTED_LANGUAGES = ['en', 'fr', 'nl'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Language detector for React Native
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lng: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem('user-language');
      callback(savedLanguage || 'en');
    } catch (error) {
      console.error('Error detecting language:', error);
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async (lng: string) => {
    try {
      await AsyncStorage.setItem('user-language', lng);
    } catch (error) {
      console.error('Error caching language:', error);
    }
  },
};

// Initialize i18next once
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      nl: { translation: nl },
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

/**
 * Changes the application language
 * @param language - The language code to switch to
 * @returns Promise that resolves when language is changed
 */
export const changeLanguage = async (language: SupportedLanguage): Promise<void> => {
  if (SUPPORTED_LANGUAGES.includes(language)) {
    return i18next.changeLanguage(language);
  }
  console.warn(`Language ${language} not supported, falling back to English`);
  return i18next.changeLanguage('en');
};

/**
 * Gets the current language
 * @returns The current language code
 */
export const getCurrentLanguage = (): string => {
  return i18next.language || 'en';
};

export default i18next;