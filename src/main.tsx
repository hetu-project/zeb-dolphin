import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './App.css'
import router from './router.tsx';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { RouterProvider } from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import { persistor, store } from '@/redux/store'
import { ChakraBaseProvider, extendBaseTheme, theme } from '@chakra-ui/react';
const extendTheme = extendBaseTheme({
  components: {
    Modal: theme.components.Modal,
    Tabs: theme.components.Tabs,
    Alert: theme.components.Alert,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraBaseProvider theme={extendTheme} resetCSS={false}>
          <RouterProvider router={router} />
        </ChakraBaseProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
)
