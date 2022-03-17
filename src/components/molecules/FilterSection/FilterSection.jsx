import React from 'react';
import { StyledFilterSection } from './FilterSection.styles';
import PropTypes from 'prop-types';

const FilterSection = ({ invoices }) => {
  return (
    <StyledFilterSection>
      <div>
        <span>Invoices</span>
        <span>{invoices.length} invoices</span>
      </div>
      <div>
        <select>
          <option value="MdNightlightRound">Filter</option>
          <option value="Paid">Paid</option>
          <option value="Draft">Draft</option>
          <option value="Pending">Pending</option>
        </select>
        <button>
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
