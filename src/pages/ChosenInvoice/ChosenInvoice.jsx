import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { ButtonContainer, InvoiceCard } from './ChosenInvoice.styles';
import PropTypes from 'prop-types';
import StatusInvoice from '../../components/atoms/StatusInvoice/StatusInvoice';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';

const ChosenInvoice = ({ invoices, setInvoices }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [savedInvoice, setSavedInvoice] = useState();

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  //Edit invoice
  const onSubmit = (data) => {
    const savedInvoice = { ...data, status: 'Draft', invoicePrice: +data.invoicePrice };
    console.log(savedInvoice);
    const savedID = data.id;
    console.log(invoices.filter((item) => item.id === savedID));
    console.log(savedID);
    const getNewArray = invoices.filter((item) => item.id !== savedID);
    setInvoices([...getNewArray, savedInvoice]);
    navigate(`/`);
  };
  return (
    <InvoiceCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StatusInvoice invoiceStatus={getInvoice.status} />
        <label>Invoice ID:</label>
        <input defaultValue={getInvoice.id} {...register('id')} />
        <label>Contractor name:</label>
        <input
          defaultValue={getInvoice.contractor}
          {...register('contractor')}
          disabled={getInvoice.status !== 'Draft'}
        />
        <label>Date due:</label>
        <input
          defaultValue={getInvoice.dateDue}
          {...register('dateDue')}
          disabled={getInvoice.status !== 'Draft'}
        />
        <label>Invoice Price:</label>
        <input
          defaultValue={getInvoice.invoicePrice}
          {...register('invoicePrice')}
          disabled={getInvoice.status !== 'Draft'}
        />
        <ButtonContainer>
          {getInvoice.status === 'Draft' ? (
            <>
              <ActionButton
                type="submit"
                name="Change status to pending"
                onClick={() => changeStatus(getInvoice.id)}
              />
              <input type="submit" />
            </>
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
      </form>
    </InvoiceCard>
  );
};

ChosenInvoice.propTypes = {
  invoices: PropTypes.array.isRequired,
  setInvoices: PropTypes.func.isRequired
};

export default ChosenInvoice;
