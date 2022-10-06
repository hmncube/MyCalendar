export const ThemeColors = {
  primary: { light: '#6200EE', dark: '#BB86FC' },
  primaryVariant: { light: '#3700B3', dark: '#3700B3' },
  secondary: { light: '#03DAC6', dark: '#13713D' },
  background: { light: '#FFFFFF', dark: '#121212' },
  surface: { light: '#FDFCFC', dark: '#262626' },
  error: { light: '#B00020', dark: '#CF6679' },
  onPrimary: { light: '#FFFFFF', dark: '#000000' },
  onSecondary: { light: '#000000', dark: '#000000' },
  onBackground: { light: '#000000', dark: '#FFFFFF' },
  onSurface: { light: '#000000', dark: '#FFFFFF' },
  onError: { light: '#FFFFFF', dark: '#000000' },
};

export const getTheme = (mode: string) => {
  let Theme = {};
  for (let key in ThemeColors) {
    Theme[key] = ThemeColors[key][mode];
  }
  return Theme;
};
