import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from './AddInvoice.styles';
import PropTypes from 'prop-types';

const AddInvoice = ({ setInvoices, invoices }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onDraft = (data) =>
    setInvoices([
      ...invoices,
      {
        ...data,
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        status: 'Draft',
        dateDue: currentDay,
        invoicePrice: +data.invoicePrice
      }
    ]);

  const onSubmit = (data) =>
    setInvoices([
      ...invoices,
      {
        ...data,
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        status: 'Pending',
        dateDue: currentDay,
        invoicePrice: +data.invoicePrice
      }
    ]);

  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const t1 = months[date.getMonth()];
  const currentDay = `${date.getDay()} ${t1} ${date.getFullYear()}`;

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Contractor:</label>
        <input defaultValue="test" {...register('contractor')} />
        <label>Invoice Price:</label>
        <input {...register('invoicePrice', { required: true })} />
        {errors.invoicePrice && <span>This field is required</span>}
        <div>
          <button type="submit">Submit</button>
          <button onClick={handleSubmit(onDraft)}>Draft</button>
        </div>
      </form>
    </FormContainer>
  );
};

AddInvoice.propTypes = {
  setInvoices: PropTypes.func.isRequired,
  invoices: PropTypes.array.isRequired
};

export default AddInvoice;
