import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import reducers from './reducers';

export function makeStore(reducer) {
    return configureStore({
        reducer,
    });
}

const store = makeStore(reducers);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
