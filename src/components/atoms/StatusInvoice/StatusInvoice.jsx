import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatusInvoice } from './StatusInvoice.styles';

const StatusInvoice = ({ invoiceStatus }) => {
  return <StyledStatusInvoice value={invoiceStatus}>{invoiceStatus}</StyledStatusInvoice>;
};

StatusInvoice.propTypes = {
  invoiceStatus: PropTypes.string
};

export default StatusInvoice;
