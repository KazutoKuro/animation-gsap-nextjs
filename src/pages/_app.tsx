import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "~/lib/fonts";
import { Layout, LayoutSetup } from "~/plugins/LayoutSetup";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#f7fafc",
      secondary: "#1a202c",
    },
  },
  fonts: {
    heading: fonts.primaryFont.style.fontFamily,
    body: fonts.secondaryFont.style.fontFamily,
  },
});

export default function App({
  Component,
  pageProps: { layout, ...pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutSetup layout={layout as Layout}>
        <Component {...pageProps} />
      </LayoutSetup>
    </ChakraProvider>
  );
}
