import React from 'react';
import InvoiceCard from '../../molecules/InvoiceCard/InvoiceCard';
import { StyledInvoicesContainer } from './InvoicesContainer.styles';
import PropTypes from 'prop-types';

const InvoicesContainer = ({ invoices }) => {
  return (
    <StyledInvoicesContainer>
      {invoices.map(({ id, dateDue, invoicePrice, contractor, status }) => (
        <InvoiceCard
          key={id}
          id={id}
          dateDue={dateDue}
          invoicePrice={invoicePrice}
          contractor={contractor}
          status={status}
        />
      ))}
    </StyledInvoicesContainer>
  );
};
InvoicesContainer.propTypes = {
  invoices: PropTypes.array.isRequired
};
export default InvoicesContainer;
