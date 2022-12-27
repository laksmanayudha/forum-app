import React from 'react';
import PropTypes from 'prop-types';

function CommentsBranch({ children }) {
  return (
    <div className="comments-branch">
      {children}
    </div>
  );
}

CommentsBranch.defaultProps = {
  children: [],
};

CommentsBranch.propTypes = {
  children: PropTypes.node,
};

export default CommentsBranch;
