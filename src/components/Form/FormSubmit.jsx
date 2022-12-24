import React from 'react';
import PropTypes from 'prop-types';

function FormSubmit({ label }) {
  return <button className="form-submit" type="button"><h4>{label}</h4></button>;
}

FormSubmit.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormSubmit;
