import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterSection from '../../components/molecules/FilterSection/FilterSection';
import InvoicesContainer from '../../components/organisms/InvoicesContainer/InvoicesContainer';

const Home = ({ invoices }) => {
  const [searchedInvoices, setSearchedInvoices] = useState('');
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

Home.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default Home;
