import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { wrapper } from '@/modules/core/store';
import { useEffect } from 'react';
import { enableDarkMode, enableLightMode } from '@/modules/darkMode';
import storage from '@/lib/storage';
import { QueryClient } from '@tanstack/query-core';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GetServerSideProps } from 'next';

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const queryClient = new QueryClient();

  useEffect(() => {
    const theme = storage.getItem('theme');
    if (!theme) return;
    if (theme === 'dark') {
      store.dispatch(enableDarkMode());
    } else {
      store.dispatch(enableLightMode());
    }
    document.body.dataset.theme = theme;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <GlobalStyle />
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
