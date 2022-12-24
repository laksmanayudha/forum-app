import React from 'react';
import PropTypes from 'prop-types';

function FormContainer({ children }) {
  return (
    <div className="form-container">
      { children }
    </div>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node,
};

FormContainer.defaultProps = {
  children: [],
};

export default FormContainer;
