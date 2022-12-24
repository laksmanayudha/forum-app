import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ placeholder }) {
  return (
    <div
      className="form-input textarea"
      contentEditable
      suppressContentEditableWarning
      placeholder={placeholder}
    >
      { ' ' }
    </div>
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
