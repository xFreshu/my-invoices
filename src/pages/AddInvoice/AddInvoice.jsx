import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from './AddInvoice.styles';
import PropTypes from 'prop-types';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';
import { StyledInput } from '../../components/atoms/Input/Input.styles';
import { StyledLabel } from '../../components/atoms/Input/Label.styles';

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

  const onSubmit = (data) => {
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
    console.log(data);
  };

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
        <StyledLabel>Contractor:</StyledLabel>
        <StyledInput {...register('contractor')} />
        <StyledLabel>Invoice Price:</StyledLabel>
        <StyledInput {...register('invoicePrice')} />
        <div>
          <ActionButton type={`submit`} name={`Submit`} />
          <ActionButton type={`submit`} name={`Draft`} onClick={handleSubmit(onDraft)} />
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
