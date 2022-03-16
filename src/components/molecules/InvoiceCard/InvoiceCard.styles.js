import styled from 'styled-components';

export const StyledInvoiceCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.cardColor};
  width: 90%;
  max-width: 1000px;
  margin-top: 40px;
  padding: 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor};
  div {
    display: flex;
    flex-direction: column;
    :nth-child(1) {
      span {
        :nth-child(1) {
          font-weight: 700;
          :first-letter {
            color: ${({ theme }) => theme.iconColor};
            font-weight: 700;
            margin-right: 5px;
          }
        }
        :nth-child(2) {
          color: ${({ theme }) => theme.iconColor};
        }
        :nth-child(3) {
          font-weight: 700;
        }
      }
    }
    :nth-child(2) {
      margin-left: auto;
      text-align: center;
      span {
        text-align: right;
      }
    }
    :nth-child(3) {
      margin-left: 10px;
    }
  }
`;
