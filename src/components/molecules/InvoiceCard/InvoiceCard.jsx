import React from 'react';
import StatusInvoice from '../../atoms/StatusInvoice/StatusInvoice';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { StyledInvoiceCard } from './InvoiceCard.styles';
import PropTypes from 'prop-types';

const InvoiceCard = ({ id, invoicePrice, contractor, dateDue, status }) => {
  return (
    <StyledInvoiceCard key={id}>
      <div>
        <span>
          <b>#</b>
          {id}
        </span>
        <span>Due {dateDue}</span>
        <span>{invoicePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
      </div>
      <div>
        <span>{contractor}</span>
        <StatusInvoice invoiceStatus={status} />
      </div>
      <div>
        <MdKeyboardArrowRight />
      </div>
    </StyledInvoiceCard>
  );
};

InvoiceCard.propTypes = {
  id: PropTypes.string.isRequired,
  dateDue: PropTypes.string.isRequired,
  contractor: PropTypes.string.isRequired,
  invoicePrice: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

export default InvoiceCard;