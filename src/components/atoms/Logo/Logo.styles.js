import styled from 'styled-components';

export const StyledLogo = styled.div`
  position: relative;
  background-color: #9377ff;
  width: 64px;
  height: 64px;
  border-radius: 0 10px 10px 0;
  :before {
    content: '';
    display: flex;
    background-color: ${({ theme }) => theme.specialColor};
    height: 32px;
    border-bottom-right-radius: 20px;
  }
  :after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    content: '';
    display: flex;
    width: 32px;
    height: 32px;
    background-color: #fff;
  }
`;
