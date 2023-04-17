import "@/common/styles/globals.css";
import { findTheme, ThemeTypes } from "@/common/theme/customTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
