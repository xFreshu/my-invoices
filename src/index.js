import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { GlobalStyles } from './assets/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';
import store from './app/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
