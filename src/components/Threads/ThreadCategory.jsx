import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategory({ label, active, action }) {
  return (
    <button
      className={`thread-category ${active ? 'category--active' : ''}`}
      type="button"
      onClick={() => action(active, label)}
    >
      { label }
    </button>
  );
}

ThreadCategory.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
  active: PropTypes.bool,
};

ThreadCategory.defaultProps = {
  active: false,
  action: () => {},
};

export default ThreadCategory;
