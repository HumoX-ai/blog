import "@/styles/globals.css";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@emotion/react";
import theme from "@/helper/theme";
import { CssBaseline } from "@mui/material";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
