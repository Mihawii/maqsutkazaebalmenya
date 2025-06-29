import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, TranslationDict } from './translations';

type Language = keyof typeof translations;

interface TranslationContextProps {
  lang: Language;
  t: (key: string) => string;
  switchLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    const value = (translations[lang] as TranslationDict)[key];
    return value || key;
  };

  const switchLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <TranslationContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error('useTranslation must be used within a TranslationProvider');
  return ctx;
}; 