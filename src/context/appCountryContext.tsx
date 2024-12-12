import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  continent: string | null;
  setContinent: React.Dispatch<React.SetStateAction<string | null>>;
  country: string | null;
  setCountry: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light'); 
  const [continent, setContinent] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ theme, setTheme, continent, setContinent, country, setCountry }}>{children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
