import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = {
    darkMode,
    toggle: () => setDarkMode(prev => !prev),
    style: {
      backgroundColor: darkMode ? '#121212' : '#f5f5f5',
      color: darkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '1rem',
      transition: 'all 0.3s ease'
    }
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
