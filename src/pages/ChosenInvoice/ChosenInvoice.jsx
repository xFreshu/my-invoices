import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StatusInvoice from '../../components/atoms/StatusInvoice/StatusInvoice';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';

const InvoiceCard = styled.div`
  margin: 40px auto;
  width: 90%;
  max-width: 1000px;
  padding: 10px;
  background-color: ${({ theme }) => theme.cardColor};
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ChosenInvoice = ({ invoices }) => {
  const { invoiceId } = useParams();

  //Get chosen invoice using invoiceId params
  const getInvoice = invoices.find((invoice) => invoice.id === invoiceId);

  return (
    <InvoiceCard>
      <StatusInvoice invoiceStatus={getInvoice.status} />
      <label>Invoice ID:</label>
      <input type="text" value={getInvoice.id} />
      <label>Contractor name:</label>
      <input type="text" value={getInvoice.contractor} />
      <label>Date due:</label>
      <input type="text" value={getInvoice.dateDue} />
      <label>Invoice Price:</label>
      <input type="text" value={getInvoice.invoicePrice} />
      <ButtonContainer>
        {getInvoice.status === 'Draft' ? (
          <ActionButton type="submit" name="Change status to pending" />
        ) : getInvoice.status === 'Pending' ? (
          <ActionButton type="submit" name="Change status to Paid" />
        ) : getInvoice.status === 'Paid' ? (
          <ActionButton type="submit" name="Delete invoice" />
        ) : null}
      </ButtonContainer>
    </InvoiceCard>
  );
};

ChosenInvoice.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default ChosenInvoice;
