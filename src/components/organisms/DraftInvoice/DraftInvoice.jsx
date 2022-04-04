import React, { useState } from 'react';
import StatusInvoice from '../../atoms/StatusInvoice/StatusInvoice';
import { StyledLabel } from '../../atoms/Input/Label.styles';
import { StyledInput } from '../../atoms/Input/Input.styles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ActionButton from '../../atoms/ActionButton/ActionButton';
import { ButtonContainer } from '../../../pages/ChosenInvoice/ChosenInvoice.styles';
import { useDispatch } from 'react-redux';
import { deleteInvoice, saveInvoice } from '../../../app/redux/features/invoices/invoicesSlice';
import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
const DraftInvoice = ({ getInvoice, invoiceId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  //Edit invoice
  const onSubmit = (data) => {
    const id = invoiceId;
    setIsEdit(true);
    dispatch(
      saveInvoice({
        id,
        contractor: data.contractor,
        invoicePrice: data.invoicePrice,
        dateDue: data.dateDue
      })
    );
  };
  const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      color: #fff;
      font-size: 1.4rem;
      :hover {
        cursor: pointer;
      }
    }
  `;
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardHeader>
        <StatusInvoice invoiceStatus={getInvoice.status} />
        <div>
          <AiFillEdit onClick={handleIsEdit} />
        </div>
      </CardHeader>
      <StyledLabel>Invoice ID:</StyledLabel>
      <StyledInput defaultValue={getInvoice.id} {...register('id')} disabled={!isEdit} />
      <StyledLabel>Contractor name:</StyledLabel>
      {isEdit ? (
        <StyledInput defaultValue={getInvoice.contractor} {...register('contractor')} />
      ) : (
        <StyledInput defaultValue={getInvoice.contractor} {...register('contractor')} disabled />
      )}
      <StyledLabel>Date due:</StyledLabel>
      {isEdit ? (
        <StyledInput defaultValue={getInvoice.dateDue} {...register('dateDue')} type="date" />
      ) : (
        <StyledInput
          defaultValue={getInvoice.dateDue}
          {...register('dateDue')}
          type="date"
          disabled
        />
      )}

      <StyledLabel>Invoice Price:</StyledLabel>
      {isEdit ? (
        <StyledInput
          type="number"
          defaultValue={getInvoice.invoicePrice}
          {...register('invoicePrice')}
        />
      ) : (
        <StyledInput
          type="number"
          defaultValue={getInvoice.invoicePrice}
          {...register('invoicePrice')}
          disabled
        />
      )}
      <ButtonContainer>
        {!isEdit ? (
          <ActionButton type="submit" name={`Save invoice`} />
        ) : (
          <div onClick={handleIsEdit}>Save</div>
        )}
      </ButtonContainer>
    </form>
  );
};
DraftInvoice.propTypes = {
  getInvoice: PropTypes.object.isRequired,
  invoices: PropTypes.array.isRequired,
  setInvoices: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  handleDeleteInvoice: PropTypes.func,
  invoiceId: PropTypes.string
};
export default DraftInvoice;
