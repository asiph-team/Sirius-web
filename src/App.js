import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './assets/styles/globalStyle';
import AppProvider from './AppProvider';
import { store } from './redux/store';
import Boot from './redux/boot';
import Routes from './router';

const App = () => (
    <Provider store={store}>
        <AppProvider>
            <>
                <GlobalStyles />
                <Routes />
            </>
        </AppProvider>
    </Provider>
);
Boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;