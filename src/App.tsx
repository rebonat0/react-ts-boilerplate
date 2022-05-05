import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from 'react-redux';

import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import AppRoutes from './routes';
import { store } from './store';
import { getPersistor } from '@rematch/persist';

const persistor = getPersistor();

function App() {

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeConfig>
          <GlobalStyles />
          <AppRoutes />
          <ToastContainer />
        </ThemeConfig>
      </Provider>
    </PersistGate>
  );
}

export default App;
