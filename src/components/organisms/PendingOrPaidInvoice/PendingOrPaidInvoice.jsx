import React from 'react';
import StatusInvoice from '../../atoms/StatusInvoice/StatusInvoice';
import { StyledLabel } from '../../atoms/Input/Label.styles';
import { StyledInput } from '../../atoms/Input/Input.styles';
import PropTypes from 'prop-types';
import ActionButton from '../../atoms/ActionButton/ActionButton';
import { ButtonContainer } from '../../../pages/ChosenInvoice/ChosenInvoice.styles';

const PendingOrPaidInvoice = ({ getInvoice, changeStatus, deleteInvoice }) => {
  return (
    <>
      <StatusInvoice invoiceStatus={getInvoice.status} />
      <StyledLabel>Invoice ID:</StyledLabel>
      <StyledInput defaultValue={getInvoice.id} />
      <StyledLabel>Contractor name:</StyledLabel>
      <StyledInput defaultValue={getInvoice.contractor} disabled={getInvoice.status !== 'Draft'} />
      <StyledLabel>Date due:</StyledLabel>
      <StyledInput defaultValue={getInvoice.dateDue} disabled={getInvoice.status !== 'Draft'} />
      <StyledLabel>Invoice Price:</StyledLabel>
      <StyledInput
        defaultValue={getInvoice.invoicePrice}
        disabled={getInvoice.status !== 'Draft'}
      />
      <ButtonContainer>
        {getInvoice.status === 'Pending' ? (
          <ActionButton
            type="submit"
            name="Change status to Paid"
            onClick={() => changeStatus(getInvoice.id)}
          />
        ) : (
          <ActionButton
            type="submit"
            name="Delete invoice"
            onClick={() => deleteInvoice(getInvoice.id)}
          />
        )}
      </ButtonContainer>
    </>
  );
};

PendingOrPaidInvoice.propTypes = {
  getInvoice: PropTypes.object.isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteInvoice: PropTypes.func.isRequired
};
export default PendingOrPaidInvoice;
