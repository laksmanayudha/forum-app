import React from 'react';
import PropTypes from 'prop-types';

function Input({
  placeholder,
  type,
  onChange,
  value,
}) {
  return (
    <input
      className="form-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => (onChange(e.target.value))}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
