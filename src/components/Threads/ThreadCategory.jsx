import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategory({ label, isActive }) {
  return (
    <span className={`thread-category ${isActive ? 'category--active' : ''}`}>
      { label }
    </span>
  );
}

ThreadCategory.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ThreadCategory;
