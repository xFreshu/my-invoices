import styled from 'styled-components';

export const StyledStatusInvoice = styled.div`
  display: flex;
  color: ${({ value }) => {
    if (value === 'Paid') return `#41C6A7`;
    if (value === 'Draft') return `#E6E8FA`;
    if (value === 'Pending') return `#E39028`;
    return '#000000';
  }};
  background-color: ${({ value }) => {
    if (value === 'Paid') return `rgba(65, 198, 167, 0.3)`;
    if (value === 'Draft') return `rgba(230, 232, 250, 0.3)`;
    if (value === 'Pending') return `rgba(227, 144, 40, 0.3)`;
    return '#000000';
  }};
  width: 90px;
  font-weight: 700;
  padding: 5px 0;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
`;
