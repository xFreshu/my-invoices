import React from 'react';
import { StyledFilterSection } from './FilterSection.styles';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const FilterSection = ({ invoices, setSearchedInvoices, searchedInvoices }) => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setSearchedInvoices(e.target.value);
  };

  return (
    <StyledFilterSection>
      <div>
        <span>Invoices</span>
        <span>{invoices.length} invoices</span>
      </div>
      <div>
        <select value={searchedInvoices} onChange={handleSelect}>
          <option value="">Filter your invoice</option>
          <option value="Paid">Paid</option>
          <option value="Draft">Draft</option>
          <option value="Pending">Pending</option>
        </select>
        <button onClick={() => navigate('/add-invoice')}>
          <b>+</b>
          <span>New</span>
        </button>
      </div>
    </StyledFilterSection>
  );
};

FilterSection.propTypes = {
  invoices: PropTypes.array.isRequired,
  setSearchedInvoices: PropTypes.func,
  searchedInvoices: PropTypes.string
};

export default FilterSection;
