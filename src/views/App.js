import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import styled from 'styled-components';

const Test = styled.div`
  color: ${({ theme }) => theme.paidColor};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Test>Hello</Test>
    </ThemeProvider>
  );
};

export default App;
