import { Fragment } from 'react';
import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>CStation</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
