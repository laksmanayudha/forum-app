import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder, type, onChange }) {
  return (
    <input
      className="form-input"
      type={type}
      placeholder={placeholder}
      onChange={(e) => (onChange(e.target.value))}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
