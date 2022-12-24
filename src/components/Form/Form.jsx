import React from 'react';
import PropTypes from 'prop-types';

function FormSubmit({ children }) {
  return (
    <form className="form">
      { children }
    </form>
  );
}

FormSubmit.propTypes = {
  children: PropTypes.node,
};

FormSubmit.defaultProps = {
  children: [],
};

export default FormSubmit;
