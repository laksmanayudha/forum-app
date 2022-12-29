import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategory({ label, active }) {
  return (
    <span className={`thread-category ${active ? 'category--active' : ''}`}>
      { label }
    </span>
  );
}

ThreadCategory.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ThreadCategory.defaultProps = {
  active: false,
};

export default ThreadCategory;
