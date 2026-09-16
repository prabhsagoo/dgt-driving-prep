'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

export type Language = 'es' | 'en' | 'ca';

export interface LanguageContextType {
  language: Language;
  setLanguage: (newLang: Language) => void;
  isLoaded: boolean;
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Disables automatic link preload tags to silence the browser warning
});

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'novadgt_preferred_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [isLoaded, setIsLoaded] = useState(false);

  // Read saved language as soon as the client mounts
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'es' || saved === 'en' || saved === 'ca')) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore errors in environments where localStorage is blocked
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore write errors
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoaded }}>
      {/* 
        Rendering children immediately keeps SSR intact, 
        while language updates instantly as soon as mounted.
      */}
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}