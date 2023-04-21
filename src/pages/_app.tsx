import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { wrapper } from '@/modules/core/store';
import { useEffect } from 'react';
import { enableDarkMode, enableLightMode } from '@/modules/darkMode';
import storage from '@/lib/storage';

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

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
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
