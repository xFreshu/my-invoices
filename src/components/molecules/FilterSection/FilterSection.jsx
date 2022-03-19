import React from 'react';
import { StyledFilterSection } from './FilterSection.styles';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const FilterSection = ({ invoices }) => {
  const navigate = useNavigate();
  return (
    <StyledFilterSection>
      <div>
        <span>Invoices</span>
        <span>{invoices.length} invoices</span>
      </div>
      <div>
        <select>
          <option value="MdNightlightRound">Filter your invoice</option>
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
  invoices: PropTypes.array.isRequired
};

export default FilterSection;
