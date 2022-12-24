import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryContainer({ children }) {
  return (
    <div className="thread-categories-container">
      { children }
    </div>
  );
}

ThreadCategoryContainer.propTypes = {
  children: PropTypes.node,
};

ThreadCategoryContainer.defaultProps = {
  children: [],
};

export default ThreadCategoryContainer;
