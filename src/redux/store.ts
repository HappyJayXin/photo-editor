import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

// import getConfig from 'next/config';
// import logger from 'redux-logger';

import commonReducer from '@/redux/slice/commonSlice';

import type { Middleware } from 'redux';
import type { PreloadedState } from '@reduxjs/toolkit';

const getDefaultMiddlewareOptions = {
  serializableCheck: false,
};

const rootReducer = combineReducers({
  common: commonReducer,
});

const makeStore = (preloadedState?: PreloadedState<RootState>) => {
  const otherMiddleware: Middleware[] = [];

  // const { publicRuntimeConfig } = getConfig();
  // const isDev = publicRuntimeConfig.NODE_ENV !== 'production';
  // if (isDev) {
  //   otherMiddleware.push(logger);
  // }

  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (gDM) => [
      ...gDM(getDefaultMiddlewareOptions),
      ...otherMiddleware,
    ],
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<T = Promise<void>> = ThunkAction<
  T,
  RootState,
  null,
  Action<string>
>;
