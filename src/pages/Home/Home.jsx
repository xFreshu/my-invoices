import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterSection from '../../components/molecules/FilterSection/FilterSection';
import InvoicesContainer from '../../components/organisms/InvoicesContainer/InvoicesContainer';
import { useSelector } from 'react-redux';

const Home = () => {
  const [searchedInvoices, setSearchedInvoices] = useState('');
  const invoices = useSelector((state) => state);
  const filteredInvoice = invoices.filter((item) =>
    item.status.toLowerCase().includes(searchedInvoices.toLocaleLowerCase())
  );
  return (
    <>
      <FilterSection
        invoices={invoices}
        setSearchedInvoices={setSearchedInvoices}
        searchedInvoices={searchedInvoices}
      />
      <InvoicesContainer invoices={filteredInvoice} />
    </>
  );
};

export default Home;
