import React, { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Alsu</title>
      <meta name="description" content="Welcome to my Next.js app!" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
