import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 40px;
  form {
    background-color: ${({ theme }) => theme.cardColor};
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    div {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
