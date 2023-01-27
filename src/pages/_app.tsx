import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../store";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </Provider>
  );
}
