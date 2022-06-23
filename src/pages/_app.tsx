import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import AuthProvider from '../components/Helpers/AuthProvider/AuthProvider';
import { ToastProvider } from 'react-toast-notifications';
import { ToastContainer } from '../components/Helpers/ToastContainer';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastProvider placement="top-right" components={{ ToastContainer }}>
          <Head>
            <title>CStation</title>
          </Head>
          <Component {...pageProps} />
        </ToastProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position="top-left" />
    </QueryClientProvider>
  );
}

export default MyApp;
