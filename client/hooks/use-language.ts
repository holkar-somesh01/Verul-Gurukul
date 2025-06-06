'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '@/lib/constants';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  // Initialize language from localStorage or default to browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const toggleLanguage = () => {
    const currentLng = i18n.language;
    const newLng = currentLng === 'en' ? 'mr' : 'en';
    changeLanguage(newLng);
  };

  const getCurrentLanguageName = () => {
    const currentLng = i18n.language;
    const language = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLng);
    return language?.nativeName || 'English';
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    toggleLanguage,
    getCurrentLanguageName,
    t,
    supportedLanguages: SUPPORTED_LANGUAGES
  };
};

export default useLanguage;