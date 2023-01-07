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
  /** Category name of the thread */
  label: PropTypes.string.isRequired,
  /** A function that called when category is clicked */
  action: PropTypes.func,
  /** Indicate that category have been selected */
  active: PropTypes.bool,
};

ThreadCategory.defaultProps = {
  active: false,
  action: () => {},
};

export default ThreadCategory;
