import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/molecules/Navigation/Navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';
import StatusInvoice from '../components/atoms/StatusInvoice/StatusInvoice';
import InvoiceCard from '../components/molecules/InvoiceCard/InvoiceCard';
const DUMMY_DATA = [
  {
    id: 'RT3080',
    dateDue: '19 Aug 2021',
    contractor: 'Jensen Huang',
    invoicePrice: 1800.9,
    status: 'Paid'
  },
  {
    id: 'WW5010',
    dateDue: '20 Aug 2021',
    contractor: 'Alex Grim',
    invoicePrice: 556.0,
    status: 'Draft'
  },
  {
    id: 'SS2120',
    dateDue: '21 Aug 2021',
    contractor: 'Alysa Werner',
    invoicePrice: 14002.33,
    status: 'Pending'
  }
];

const Test = styled.div`
  color: ${({ theme }) => theme.paidColor};
`;
const InvoicesContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  margin-top: 40px;
`;

const App = () => {
  const [invoices, setInvoices] = useState(DUMMY_DATA);
  return (
    <>
      <Navigation />
      <InvoicesContainer>
        {invoices.map(({ id, dateDue, invoicePrice, contractor, status }) => (
          <InvoiceCard
            key={id}
            id={id}
            dateDue={dateDue}
            invoicePrice={invoicePrice}
            contractor={contractor}
            status={status}
          />
        ))}
      </InvoicesContainer>
    </>
  );
};

export default App;
