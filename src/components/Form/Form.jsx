import React from 'react';
import PropTypes from 'prop-types';

function FormSubmit({ children, onSubmit }) {
  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      { children }
    </form>
  );
}

FormSubmit.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

FormSubmit.defaultProps = {
  children: [],
};

export default FormSubmit;
