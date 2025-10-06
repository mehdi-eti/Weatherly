
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import type { Theme, Language, User, AppContextType } from '../types';
import { getTranslator } from '../lib/i18n';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((name: string) => {
    setUser({ name });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const t = useMemo(() => getTranslator(language), [language]);

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    language,
    setLanguage,
    user,
    login,
    logout,
    t,
  }), [theme, language, user, login, logout, t]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
