import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ placeholder, onInput }) {
  return (
    <div
      className="form-input textarea"
      contentEditable
      suppressContentEditableWarning
      placeholder={placeholder}
      onInput={(e) => onInput(e.target.innerHTML)}
    >
      { ' ' }
    </div>
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default Textarea;
