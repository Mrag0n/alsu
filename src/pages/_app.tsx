import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import ErrorBoundary from '@components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import '@styles/reset.css';
import '@styles/globals.css';
import theme from '@theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
