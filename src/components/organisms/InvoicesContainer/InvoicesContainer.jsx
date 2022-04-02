import React from 'react';
import InvoiceCard from '../../molecules/InvoiceCard/InvoiceCard';
import { StyledInvoicesContainer } from './InvoicesContainer.styles';
import { useSelector } from 'react-redux';

const InvoicesContainer = () => {
  const invoices = useSelector((state) => state);
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

export default InvoicesContainer;
