import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Default from '@/layouts/default';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Ricardo Meneses Morales</title>
      </Head>
      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  );
}