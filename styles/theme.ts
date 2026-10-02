"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#F47B13", // ORANGE
      dark: "#D95D00",
      light: "#FF9A3D",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#17212B", // NAVY
      dark: "#0F171E",
      light: "#283541",
      contrastText: "#FFFFFF",
    },

    info: {
      main: "#A9D9EC", // HELLBLAU
      dark: "#7EBFD8",
      light: "#DDF3FA",
      contrastText: "#17212B",
    },

    warning: {
      main: "#F7B51B", // GELB
      dark: "#D99A00",
      light: "#FFD65A",
      contrastText: "#17212B",
    },

    background: {
      default: "#FFFFFF",
      paper: "#F4F6F7", // HELLGRAU
    },

    text: {
      primary: "#17212B",
      secondary: "#66747D",
    },

    divider: "#DCE3E7",
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: "4rem",
      fontWeight: 800,
      lineHeight: 1.05,
      color: "#17212B",
    },

    h2: {
      fontSize: "2.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      color: "#17212B",
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#17212B",
    },

    h4: {
      fontSize: "1.4rem",
      fontWeight: 700,
      color: "#17212B",
    },

    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.7,
      color: "#17212B",
    },

    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
      color: "#66747D",
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "12px 24px",
          fontWeight: 700,
        },

        containedPrimary: {
          boxShadow: "none",

          "&:hover": {
            backgroundColor: "#D95D00",
            boxShadow: "none",
          },
        },

        containedSecondary: {
          boxShadow: "none",

          "&:hover": {
            backgroundColor: "#283541",
            boxShadow: "none",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #DCE3E7",
          boxShadow: "0 8px 30px rgba(23, 33, 43, 0.08)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
