import { createTheme, ThemeOptions } from '@mui/material/styles';
import { config } from '../config/index';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: config.COLORS.primary,
      light: '#66BB6A',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: config.COLORS.secondary,
      light: '#4DB6AC',
      dark: '#00695C',
      contrastText: '#FFFFFF',
    },
    error: {
      main: config.COLORS.error,
      light: '#EF5350',
      dark: '#C62828',
    },
    warning: {
      main: config.COLORS.accent,
      light: '#FFCC02',
      dark: '#F57C00',
    },
    success: {
      main: config.COLORS.success,
      light: '#8BC34A',
      dark: '#689F38',
    },
    background: {
      default: config.COLORS.background,
      paper: '#FFFFFF',
    },
    text: {
      primary: config.COLORS.textPrimary,
      secondary: config.COLORS.textSecondary,
    },
    divider: config.COLORS.divider,
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#26A69A',
      light: '#80CBC4',
      dark: '#00796B',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
});

export default lightTheme;