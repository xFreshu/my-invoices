import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    @media (min-width: 1000px) {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
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
      text-align: center;
      align-items: center;
      margin-left: auto;
      @media (min-width: 1000px) {
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
        }
      }
      span {
        @media (min-width: 1000px) {
          margin-left: 100px;
        }
        text-align: right;
      }
    }
    :nth-child(3) {
      margin-left: 10px;
    }
  }
`;

export const LinkToInvoice = styled(Link)`
  font-size: 1.7rem;
  margin-left: 10px;
  color: ${({ theme }) => theme.fontColor};
`;
