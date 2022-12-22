import React from 'react';
// import PropTypes from 'prop-types';

function FormSubmit({ children }) {
  return (
    <form className="form">
      { children }
    </form>
  );
}

export default FormSubmit;
