import React from "react";
import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/core";

const App = ({ Component, pageProps, appProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box bg="gray.100">
        <Box maxW="4xl" mx="auto" h="100vh" p={8}>
          <Component {...appProps} {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
