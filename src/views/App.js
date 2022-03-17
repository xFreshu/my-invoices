import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/molecules/Navigation/Navigation';
import InvoicesContainer from '../components/organisms/InvoicesContainer/InvoicesContainer';
import FilterSection from '../components/molecules/FilterSection/FilterSection';

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

const App = () => {
  const [invoices, setInvoices] = useState(DUMMY_DATA);
  return (
    <>
      <Navigation />
      <FilterSection invoices={invoices} />
      <InvoicesContainer invoices={invoices} />
    </>
  );
};

export default App;
