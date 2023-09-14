import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#007acc',
        },
        divider: '#e0e0e0',
        text: {
          primary: '#212121',
          secondary: '#757575',
          link: '#0000aa',
          error: '#ff0000',
        },
        background: {
          default: '#f6f7f9',
          paper: '#ffffff',
          dark: '#757575',
          footer: '#333',
        },
        search: {
          bg: '#f6f7f9',
          placeholder: '#757575',
        },
      }
      : {
        primary: {
          main: '#149eca',
        },
        divider: '#343a46',
        text: {
          primary: '#f6f7f9',
          secondary: '#757575',
          link: '#1597c1',
          error: '#ff0000',
        },
        background: {
          default: '#23272f',
          paper: '#333a45',
          dark: '#16181d',
          footer: '#16181d',
        },
        search: {
          bg: '#333a45',
          placeholder: '#333a45',
        },
      }),
  },
});

export const lightModeTheme = createTheme(getDesignTokens('light'));
export const darkModeTheme = createTheme(getDesignTokens('dark'));
