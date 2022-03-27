import React from 'react';
import StatusInvoice from '../../atoms/StatusInvoice/StatusInvoice';
import { StyledLabel } from '../../atoms/Input/Label.styles';
import { StyledInput } from '../../atoms/Input/Input.styles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ActionButton from '../../atoms/ActionButton/ActionButton';
import { ButtonContainer } from '../../../pages/ChosenInvoice/ChosenInvoice.styles';

const DraftInvoice = ({ getInvoice, invoices, setInvoices, navigate }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  //Edit invoice
  const onSubmit = (data) => {
    const day = new Date();
    const newDate = data.dateDue;

    console.log(newDate);
    const savedInvoice = { ...data, status: 'Pending', invoicePrice: +data.invoicePrice };
    console.log(savedInvoice);
    const savedID = data.id;
    console.log(invoices.filter((item) => item.id === savedID));
    console.log(savedID);
    const getNewArray = invoices.filter((item) => item.id !== savedID);
    setInvoices([...getNewArray, savedInvoice]);
    navigate(`/`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StatusInvoice invoiceStatus={getInvoice.status} />
      <StyledLabel>Invoice ID:</StyledLabel>
      <StyledInput defaultValue={getInvoice.id} {...register('id')} />
      <StyledLabel>Contractor name:</StyledLabel>
      <StyledInput
        defaultValue={getInvoice.contractor}
        {...register('contractor')}
        disabled={getInvoice.status !== 'Draft'}
      />
      <StyledLabel>Date due:</StyledLabel>
      <StyledInput
        defaultValue={getInvoice.dateDue}
        {...register('dateDue')}
        disabled={getInvoice.status !== 'Draft'}
      />
      <StyledLabel>Invoice Price:</StyledLabel>
      <StyledInput
        defaultValue={getInvoice.invoicePrice}
        {...register('invoicePrice')}
        disabled={getInvoice.status !== 'Draft'}
      />
      <ButtonContainer>
        <ActionButton type="submit" name={`Save invoice`} />
      </ButtonContainer>
    </form>
  );
};
DraftInvoice.propTypes = {
  getInvoice: PropTypes.object.isRequired,
  invoices: PropTypes.array.isRequired,
  setInvoices: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired
};
export default DraftInvoice;
