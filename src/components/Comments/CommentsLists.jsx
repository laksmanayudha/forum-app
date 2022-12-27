import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentsLists({ comments }) {
  return (
    <div className="comments-lists">
      {comments.map((comment) => (
        <CommentItem {...comment} key={comment.id} />
      ))}
    </div>
  );
}

const ownerShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
};

const commentShape = {
  owner: PropTypes.shape(ownerShape).isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

CommentsLists.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

export default CommentsLists;
