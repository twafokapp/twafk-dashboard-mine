import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './authSlice';

// you told redux-persist to take your combined reducers (the auth slice and the api slice) and wrap them with persistence logic.
//ou whitelisted the auth slice, meaning it's the only piece of state that will be saved to localStorage.
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // We only want to persist the 'auth' slice
};

// Combine all your reducers here
{
  /* This is the magic of RTK Query. It's a powerful piece of software that manages all your API requests. It handles caching, loading states, error states, and re-fetching data automatically. Without it, RTK Query would not work, and you'd have to write manual fetch calls and manage loading/error states yourself. */
}
const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types from redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production', // Enable devtools only in development
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
