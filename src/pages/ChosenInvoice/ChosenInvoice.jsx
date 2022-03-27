import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InvoiceCard } from './ChosenInvoice.styles';
import PropTypes from 'prop-types';
import DraftInvoice from '../../components/organisms/DraftInvoice/DraftInvoice';
import PendingOrPaidInvoice from '../../components/organisms/PendingOrPaidInvoice/PendingOrPaidInvoice';

const ChosenInvoice = ({ invoices, setInvoices }) => {
  const navigate = useNavigate();
  //Get chosen invoice using invoiceId params
  const { invoiceId } = useParams();
  let getInvoice = invoices.find((invoice) => invoice.id === invoiceId);
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
      {getInvoice.status === 'Draft' ? (
        <DraftInvoice
          getInvoice={getInvoice}
          invoices={invoices}
          navigate={navigate}
          setInvoices={setInvoices}
        />
      ) : (
        <PendingOrPaidInvoice
          getInvoice={getInvoice}
          changeStatus={changeStatus}
          deleteInvoice={deleteInvoice}
        />
      )}
    </InvoiceCard>
  );
};

ChosenInvoice.propTypes = {
  invoices: PropTypes.array.isRequired,
  setInvoices: PropTypes.func.isRequired
};

export default ChosenInvoice;
