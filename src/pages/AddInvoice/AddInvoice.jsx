import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormContainer = styled.div`
  margin-top: 40px;
  form {
    background-color: ${({ theme }) => theme.cardColor};
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
  }
`;
const AddInvoice = ({ setInvoices, invoices }) => {
  const [counter, setCounter] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) =>
    setInvoices([
      ...invoices,
      {
        ...data,
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        status: 'Pending',
        dateDue: currentDay
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
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('contractor')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('invoicePrice', { required: true })} type="number" />
        {/* errors will return when field validation fails  */}
        {errors.invoicePrice && <span>This field is required</span>}
        <div>
          <button type="submit">Submit</button>
          <button>Draft</button>
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
