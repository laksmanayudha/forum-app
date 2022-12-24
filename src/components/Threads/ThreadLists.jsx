import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadLists({ threads }) {
  return (
    <div className="thread-lists">
      {threads.map((thread) => (<ThreadItem {...thread} key={thread.id} />))}
    </div>
  );
}

const threadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  upVotesCount: PropTypes.number.isRequired,
  downVotesCount: PropTypes.number.isRequired,
  isDownVote: PropTypes.bool.isRequired,
  isUpVote: PropTypes.bool.isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadLists.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
};

export default ThreadLists;
