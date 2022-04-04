import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.bgColor};
  outline: none;
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 10px;
  :disabled {
    color: rgba(230, 232, 250, 0.3);
  }
`;
