import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import '@styles/tailwind.css';
import theme from '@styles/theme';

import store from '@store/store';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <ChakraProvider resetCSS theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </Provider>
        </SessionProvider>
    );
}
export default MyApp;
