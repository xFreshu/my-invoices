import React from 'react';
import StatusInvoice from '../../atoms/StatusInvoice/StatusInvoice';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LinkToInvoice, StyledInvoiceCard } from './InvoiceCard.styles';
import PropTypes from 'prop-types';

const InvoiceCard = ({ id, invoicePrice, contractor, dateDue, status, onClick }) => {
  return (
    <StyledInvoiceCard key={id} onClick={onClick}>
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
      <LinkToInvoice to={`/invoice-${id}`}>
        <MdKeyboardArrowRight />
      </LinkToInvoice>
    </StyledInvoiceCard>
  );
};

InvoiceCard.propTypes = {
  id: PropTypes.string,
  dateDue: PropTypes.string,
  contractor: PropTypes.string,
  invoicePrice: PropTypes.number,
  status: PropTypes.string,
  onClick: PropTypes.func
};

export default InvoiceCard;
