import Head from 'next/head';
import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

import { Layout } from 'components';
import { AppProviders } from '../providers/AppProviders';
import { createEmotionCache } from 'utils';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { ...pageProps },
  } = props;

  return (
    <AppProviders emotionCache={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Wyszukiwarka piw</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
