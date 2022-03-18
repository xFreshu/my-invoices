import React from 'react';
import PropTypes from 'prop-types';
import FilterSection from '../../components/molecules/FilterSection/FilterSection';
import InvoicesContainer from '../../components/organisms/InvoicesContainer/InvoicesContainer';

const Home = ({ invoices }) => {
  return (
    <>
      <FilterSection invoices={invoices} />
      <InvoicesContainer invoices={invoices} />
    </>
  );
};

Home.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default Home;
