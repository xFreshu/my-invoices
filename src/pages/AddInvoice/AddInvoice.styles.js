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
    input {
      background-color: transparent;
      border: none;
      border-bottom: solid 2px ${({ theme }) => theme.bgColor};
      outline: none;
      color: ${({ theme }) => theme.fontColor};
      margin-bottom: 10px;
    }
    label {
      color: ${({ theme }) => theme.fontColor};
      margin: 10px 0;
    }
    div {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
