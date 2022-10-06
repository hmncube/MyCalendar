import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Cood } from '../data/Cood';
import { WeatherData } from '../data/WeatherData';
import { getWeatherData, storeAppearanceMode, getAppearanceMode } from '../util/Repository';
import Geolocation from '@react-native-community/geolocation';
import { Error } from '../data/Error';

export const ThemeContext = createContext();

const getPhoneMode = () => {
  return useColorScheme() === 'dark';
};

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState<Boolean>(true);
  const themeValue = {
    isDarkMode,
  };

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};
