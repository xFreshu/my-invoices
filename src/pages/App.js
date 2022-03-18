import React, { useState } from 'react';
import Navigation from '../components/molecules/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import AddInvoice from './AddInvoice/AddInvoice';
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
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home invoices={invoices} />} />
        <Route
          exact
          path="/add-invoice"
          element={<AddInvoice setInvoices={setInvoices} invoices={invoices} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
