import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { ScreenType } from "./screen";
import { lightTypographyOptions, darkTypographyOptions } from "./typography";

export const darkTheme = createTheme({
  typography: darkTypographyOptions,
  breakpoints: {
    values: {
      xs: 0,
      sm: ScreenType.sm + 1,
      md: ScreenType.md + 1,
      lg: ScreenType.lg + 1,
      xl: ScreenType.xl + 1,
    },
  },
  palette: {
    background: {
      default: "#000",
    },
    primary: {
      main: "#fff",
    },
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: "32px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeMedium: {
          padding: "11px 34px",
          borderRadius: "12px",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  ...darkTheme,
  typography: lightTypographyOptions,
  palette: {
    background: {
      default: "#fff",
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const findTheme = (theme: ThemeTypes) => {
  switch (theme) {
    case ThemeTypes.Light:
      return responsiveFontSizes(lightTheme);

    default:
      return responsiveFontSizes(darkTheme);
  }
};
