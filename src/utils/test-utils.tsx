import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

import { makeStore } from '@store/store';
import reducers from '@store/reducers';

const AllTheProviders = ({
    children,
    pageProps: { session, ...pageProps },
}) => {
    const store = makeStore(reducers);
    return (
        <SessionProvider session={session}>
            <Provider store={store}>{children}</Provider>
        </SessionProvider>
    );
};

const customRender = (ui, options?) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export { user };

// override render method
export { customRender as render };
