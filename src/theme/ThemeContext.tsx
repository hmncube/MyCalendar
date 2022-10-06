import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { getTheme } from './ThemeColors.ts';
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const theme = getTheme('dark'); //TODO read value from db and use
  const themeValue = {
    theme,
  };

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};
