import styled from 'styled-components';

export const InvoiceCard = styled.div`
  margin: 40px auto;
  width: 90%;
  max-width: 1000px;
  padding: 10px;
  background-color: ${({ theme }) => theme.cardColor};
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
