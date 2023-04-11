import "@/common/styles/globals.css";
import { findTheme, ThemeTypes } from "@/common/theme/customTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
