import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/molecules/Navigation/Navigation';

const Test = styled.div`
  color: ${({ theme }) => theme.paidColor};
`;

const App = () => {
  return (
    <>
      <Navigation />
      <Test>Test</Test>
    </>
  );
};

export default App;
