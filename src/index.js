import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { GlobalStyles } from './assets/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
