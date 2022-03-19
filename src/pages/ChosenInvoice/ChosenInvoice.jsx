import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ButtonContainer, InvoiceCard } from './ChosenInvoice.styles';
import PropTypes from 'prop-types';
import StatusInvoice from '../../components/atoms/StatusInvoice/StatusInvoice';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';

const ChosenInvoice = ({ invoices, setInvoices }) => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  //Get chosen invoice using invoiceId params
  const getInvoice = invoices.find((invoice) => invoice.id === invoiceId);
  //Change Status/Delete invoice
  const changeStatus = (id) => {
    const getNewArray = invoices.map((item) => {
      if (item.id === id) {
        item.status === 'Draft'
          ? (getInvoice.status = 'Pending')
          : item.status === 'Pending'
          ? (getInvoice.status = 'Paid')
          : null;
      }
      return item;
    });
    setInvoices(getNewArray);
  };

  //Delete invoice
  const deleteInvoice = (id) => {
    const getNewArray = invoices.filter((item) => item.id !== id);
    setInvoices(getNewArray);
    navigate('/');
  };

  return (
    <InvoiceCard>
      <StatusInvoice invoiceStatus={getInvoice.status} />
      <label>Invoice ID:</label>
      <input type="text" defaultValue={getInvoice.id} />
      <label>Contractor name:</label>
      <input type="text" defaultValue={getInvoice.contractor} disabled />
      <label>Date due:</label>
      <input type="text" defaultValue={getInvoice.dateDue} disabled />
      <label>Invoice Price:</label>
      <input type="text" defaultValue={getInvoice.invoicePrice} disabled />
      <ButtonContainer>
        {getInvoice.status === 'Draft' ? (
          <ActionButton
            type="submit"
            name="Change status to pending"
            onClick={() => changeStatus(getInvoice.id)}
          />
        ) : getInvoice.status === 'Pending' ? (
          <ActionButton
            type="submit"
            name="Change status to Paid"
            onClick={() => changeStatus(getInvoice.id)}
          />
        ) : getInvoice.status === 'Paid' ? (
          <ActionButton
            type="submit"
            name="Delete invoice"
            onClick={() => deleteInvoice(getInvoice.id)}
          />
        ) : null}
      </ButtonContainer>
    </InvoiceCard>
  );
};

ChosenInvoice.propTypes = {
  invoices: PropTypes.array.isRequired,
  setInvoices: PropTypes.func.isRequired
};

export default ChosenInvoice;
