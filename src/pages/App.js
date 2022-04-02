import React, { useState } from 'react';
import Navigation from '../components/molecules/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import AddInvoice from './AddInvoice/AddInvoice';
import ChosenInvoice from './ChosenInvoice/ChosenInvoice';
const DUMMY_DATA = [];

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
        <Route
          path={`/invoice-:invoiceId`}
          element={<ChosenInvoice invoices={invoices} setInvoices={setInvoices} />}
        />
        <Route path="*" element={<h1>Sad</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
