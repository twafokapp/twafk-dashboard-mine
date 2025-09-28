import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '@/lib/i18n.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* The Provider makes this brain accessible to every component. Without it, no component can access or change the application's state (like the user's login status) */}
    <Provider store={store}>
      {/* This component works with redux-persist. Its job is to pause the rendering of your app until the "persisted" state (your auth slice from localStorage) has been retrieved and loaded back into the Redux store. Without it, if you refresh the page while logged in, the app would briefly think you're logged out, potentially redirecting you to the login page before quickly logging you back in, causing a jarring flicker. */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
