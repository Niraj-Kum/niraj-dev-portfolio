import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const Settings = {
  colors: {
    primary: "#00bfbf",
    secondary: "#db61a2",
    black: "#111111",
    white: "#fafafa",
  },
};

export const primary = `${Settings.colors.primary}`;
export const secondary = `${Settings.colors.secondary}`;
export const black = `${Settings.colors.black}`;
export const white = `${Settings.colors.white}`;

export const LightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: white,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: "Roboto Mono, monospace",
      },
      body1: {
        fontWeight: 500,
        fontFamily: "Roboto Mono, monospace",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            body: {
              color: black,
              backgroundColor: white,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
            "&:hover": {
              backgroundColor: primary,
            },
            transition: "all 0.5s ease",
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "1.25rem",
          },
          primary: {
            color: black,
            backgroundColor: "transparent",
            "&:hover": {
              color: black,
              backgroundColor: primary,
            },
            transition: "all 0.5s ease !important",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: "Roboto Mono, monospace",
            backgroundColor: primary,
            color: black,
            fontSize: 11,
          },
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: black,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: "Roboto Mono, monospace",
      },
      body1: {
        fontWeight: 500,
        fontFamily: "Roboto Mono, monospace",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            body: {
              color: white,
              backgroundColor: black,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            boxShadow:
              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
            "&:hover": {
              backgroundColor: primary,
            },
            transition: "all 0.5s ease",
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "1.25rem",
          },
          primary: {
            color: white,
            backgroundColor: "transparent",
            "&:hover": {
              color: white,
              backgroundColor: primary,
            },
            transition: "all 0.5s ease !important",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: "Roboto Mono, monospace",
            backgroundColor: primary,
            color: white,
            fontSize: 11,
          },
        },
      },
    },
  })
);
