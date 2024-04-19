import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import ErrorBoundary from '@components/ErrorBoundary'; // Import the custom error boundary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
