import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.specialColor};
  background-color: transparent;
  font-weight: 700;
  border: solid 1px ${({ theme }) => theme.specialColor};
  width: 100px;
  padding: 7px 5px;
  border-radius: 10px;
  margin-top: 20px;
  transition: 0.7s;
  :hover {
    background-color: ${({ theme }) => theme.specialColor};
    color: ${({ theme }) => theme.bgColor};
    cursor: pointer;
  }
`;
