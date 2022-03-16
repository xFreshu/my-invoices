import styled from 'styled-components';

export const NavigationBar = styled.nav`
  background-color: ${({ theme }) => theme.cardColor};
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    li {
      :nth-child(2) {
        margin-left: auto;
        fill: ${({ theme }) => theme.cardColor};
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        filter: invert(6%) sepia(5%) saturate(6989%) hue-rotate(195deg) brightness(100%)
          contrast(93%);
      }
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin: 0 20px;
      }
    }
  }
`;
