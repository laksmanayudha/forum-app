import React from 'react';
import { IoTriangleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

function Votes({
  upVotesCount,
  downVotesCount,
  isDownVote,
  isUpVote,
  onVotes,
  id,
}) {
  const onVotesChange = (type) => {
    if (!isUpVote && !isDownVote) {
      onVotes(type, id);
      return;
    }
    if (isUpVote && (type === 'downVotes')) {
      onVotes('downVotes', id);
      return;
    }
    if (isDownVote && (type === 'upVotes')) {
      onVotes('upVotes', id);
      return;
    }
    onVotes('neutralVotes', id);
  };

  return (
    <div className="votes">
      <button type="button" className={`votes-container up-votes ${isUpVote ? 'votes--voted' : ''}`} onClick={() => onVotesChange('upVotes')}>
        <IoTriangleOutline />
        <small className="votes-value">{ upVotesCount }</small>
      </button>
      <button type="button" className={`votes-container down-votes ${isDownVote ? 'votes--voted' : ''}`} onClick={() => onVotesChange('downVotes')}>
        <IoTriangleOutline className="down-votes" />
        <small className="votes-value">{ downVotesCount }</small>
      </button>
    </div>
  );
}

Votes.propTypes = {
  upVotesCount: PropTypes.number.isRequired,
  downVotesCount: PropTypes.number.isRequired,
  isDownVote: PropTypes.bool.isRequired,
  isUpVote: PropTypes.bool.isRequired,
  onVotes: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Votes;
