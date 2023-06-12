'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './light-theme';
import { Theme } from '@mui/material/styles';

interface ThemeProps {
  theme: Theme;
  children: React.ReactNode;
}

export const Provider: React.FC<ThemeProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
