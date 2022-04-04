import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from './AddInvoice.styles';
import PropTypes from 'prop-types';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';
import { StyledInput } from '../../components/atoms/Input/Input.styles';
import { StyledLabel } from '../../components/atoms/Input/Label.styles';
import { useDispatch } from 'react-redux';
import {
  addInvoiceDraft,
  addInvoicePending
} from '../../app/redux/features/invoices/invoicesSlice';

const AddInvoice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const onDraft = (data) => {
    dispatch(addInvoiceDraft({ contractor: data.contractor, invoicePrice: data.invoicePrice }));
    reset();
  };

  const onSubmit = (data) => {
    dispatch(addInvoicePending({ contractor: data.contractor, invoicePrice: data.invoicePrice }));
    reset();
  };

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

export default AddInvoice;
