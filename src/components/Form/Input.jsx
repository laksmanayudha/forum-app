import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder, type }) {
  return <input className="form-input" type={type} placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
