import styled from 'styled-components';

export const StyledFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0;
  max-width: 1000px;
  width: 90%;
  div {
    :nth-child(1) {
      display: flex;
      flex-direction: column;
      span {
        :nth-child(1) {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${({ theme }) => theme.fontColor};
        }
        :nth-child(2) {
          color: ${({ theme }) => theme.iconColor};
        }
      }
    }
    :nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      select {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.fontColor};
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        margin-right: 20px;
        option {
          background-color: ${({ theme }) => theme.cardColor};
          padding: 10px;
          display: inline-block;
        }
      }
      button {
        background-color: ${({ theme }) => theme.specialColor};
        width: 120px;
        height: 50px;
        border-radius: 20px;
        border: none;
        font-weight: 700;
        color: ${({ theme }) => theme.fontColor};
        display: flex;
        align-items: center;
        span {
          margin-right: 10px;
        }
        b {
          display: inline-block;
          line-height: 40px;
          background-color: #fff;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          font-weight: 700;
          color: ${({ theme }) => theme.specialColor};
          font-size: 1.2rem;
          text-align: center;
          margin: 0 10px 0 10px;
        }
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
