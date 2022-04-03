import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InvoiceCard } from './ChosenInvoice.styles';
import DraftInvoice from '../../components/organisms/DraftInvoice/DraftInvoice';
import PendingOrPaidInvoice from '../../components/organisms/PendingOrPaidInvoice/PendingOrPaidInvoice';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeStatusOfInvoice,
  deleteInvoice
} from '../../app/redux/features/invoices/invoicesSlice';

const ChosenInvoice = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state);
  const setInvoices = () => {};
  const navigate = useNavigate();
  //Get chosen invoice using invoiceId params
  const { invoiceId } = useParams();
  let getInvoice = invoices.find((invoice) => invoice.id === invoiceId);
  //Change Status/Delete invoice
  const changeStatus = (id) => {
    dispatch(changeStatusOfInvoice({ id: id }));
  };

  //Delete invoice
  const handleDeleteInvoice = (id) => {
    dispatch(deleteInvoice({ id }));
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
          handleDeleteInvoice={handleDeleteInvoice}
          invoiceId={invoiceId}
        />
      ) : (
        <PendingOrPaidInvoice
          getInvoice={getInvoice}
          changeStatus={changeStatus}
          deleteInvoice={handleDeleteInvoice}
        />
      )}
    </InvoiceCard>
  );
};

export default ChosenInvoice;
