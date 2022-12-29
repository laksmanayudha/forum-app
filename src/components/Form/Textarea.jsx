/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ placeholder, onInput, reference }) {
  return (
    <div
      className="form-input textarea"
      contentEditable
      suppressContentEditableWarning
      placeholder={placeholder}
      onInput={(e) => onInput(e.target.innerHTML)}
      ref={reference}
    />
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  reference: PropTypes.object,
};

export default Textarea;
