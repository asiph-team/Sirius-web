import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './assets/styles/globalStyle';
import AppProvider from './AppProvider';
import { store } from './redux/store';
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

export default App;