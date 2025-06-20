import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [locale, setLocale] = useLocalStorage("locale", "en");

  // Tema Değiştir
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Dil değiştir
  const switchLocale = () => setLocale(locale === "en" ? "tr" : "en");

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        locale,
        switchLocale,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
