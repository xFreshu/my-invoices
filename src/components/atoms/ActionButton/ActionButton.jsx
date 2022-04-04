import React from 'react';
import { StyledButton } from './ActionButton.styles';
import PropTypes from 'prop-types';

const ActionButton = ({ name, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ActionButton;
