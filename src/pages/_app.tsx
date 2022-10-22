import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';

import theme from '@/helpers/theme';
import { store } from '@/redux/store';
import GlobalStyle from '@/styles/globalStyle';
import { ToastProvider } from '@/components/Toast';
import { DialogProvider } from '@/components/Dialog';
import { ModalProvider } from '@/components/Modal';
import WindowWidth from '@/modules/Common/WindowWidth';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>
        <DialogProvider>
          <ModalProvider>
            <WindowWidth />
            <Component {...pageProps} />
          </ModalProvider>
        </DialogProvider>
      </ToastProvider>
    </ThemeProvider>
  </Provider>
);

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

export default appWithTranslation(MyApp);
