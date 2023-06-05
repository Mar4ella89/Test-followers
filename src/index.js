import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';
// import AuthLayout from 'modules/AuthLayout/AuthLayout';

import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthLayout> */}
        <BrowserRouter basename="/test-followers">
          <App />
        </BrowserRouter>
        {/* </AuthLayout> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
