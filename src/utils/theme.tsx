import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { rgba } from '../utils/style';

// Font stacks
const fontStack: string[] = [
  'Gotham',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'San Francisco',
  'Roboto',
  'Segoe UI',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'sans-serif',
];

export const monoFontStack: string[] = [
  'SFMono Regular',
  'Roboto Mono',
  'Consolas',
  'Liberation Mono',
  'Menlo',
  'Courier',
  'monospace',
];

// Spacing
const spacingGutter = 20;
export const spacingOuter = {
  desktop: 60,
  tablet: 40,
  mobile: 20,
};

// Media breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 696,
    md: 1024,
    lg: 1280,
    xl: 1600,
  },
};

// Base styles
export const base = {
  curveFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  clipPath: (size = 8) =>
    `polygon(0 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%)`,
  maxWidthDesktop: 1100,
  maxWidthLaptop: 1000,
};

// Dark Theme
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: 'rgba(17, 17, 17, 1)',
      paper: 'rgba(26, 26, 26, 1)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    primary: {
      main: 'rgba(0, 229, 255, 1)',
    },
    secondary: {
      main: 'rgba(0, 229, 255, 1)',
    },
  },
  typography: {
    fontFamily: fontStack.join(', '),
    h1: { color: 'rgba(255, 255, 255, 1)' },
    h2: { color: 'rgba(255, 255, 255, 1)' },
    body1: { color: 'rgba(255, 255, 255, 1)' },
  },
  shape: {
    borderRadius: 8, // Example for clipPath
  },
  breakpoints,
  spacing: (factor: number) => `${factor * spacingGutter}px`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

// Light Theme
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: 'rgba(242, 242, 242, 1)',
      paper: 'rgba(255, 255, 255, 1)',
    },
    text: {
      primary: rgba('rgba(0, 0, 0, 1)', 0.8),
      secondary: rgba('rgba(0, 0, 0, 1)', 0.8),
    },
    primary: {
      main: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      main: 'rgba(0, 229, 255, 1)',
    },
  },
  typography: {
    fontFamily: fontStack.join(', '),
    h1: { color: 'rgba(0, 0, 0, 1)' },
    h2: { color: 'rgba(0, 0, 0, 1)' },
    body1: { color: rgba('rgba(0, 0, 0, 1)', 0.8) },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints,
  spacing: (factor: number) => `${factor * spacingGutter}px`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

// Create MUI Themes
const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

export const theme: {[key: string]: ThemeOptions} = {dark: darkTheme, light: lightTheme}