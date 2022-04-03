import React, { useState } from 'react';
import Navigation from '../components/molecules/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import AddInvoice from './AddInvoice/AddInvoice';
import ChosenInvoice from './ChosenInvoice/ChosenInvoice';
import { useSelector } from 'react-redux';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-invoice" element={<AddInvoice />} />
        <Route path={`/invoice-:invoiceId`} element={<ChosenInvoice />} />
        <Route path="*" element={<h1>Sad</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
