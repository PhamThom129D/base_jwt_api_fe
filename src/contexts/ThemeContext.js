import React, { createContext, useContext, useState } from 'react';

// Tạo context
const ThemeContext = createContext();

// Custom hook
export const useTheme = () => useContext(ThemeContext);

// Provider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Style sẽ áp dụng cho toàn bộ app
  const style = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#121212',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, style }}>
      {children}
    </ThemeContext.Provider>
  );
};
