import React from 'react';
import { IoTriangleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

function Votes({
  upVotesCount,
  downVotesCount,
  isDownVote,
  isUpVote,
}) {
  return (
    <div className="votes">
      <div className={`votes-container up-votes ${isUpVote ? 'votes--voted' : ''}`}>
        <IoTriangleOutline />
        <small className="votes-value">{ upVotesCount }</small>
      </div>
      <div className={`votes-container down-votes ${isDownVote ? 'votes--voted' : ''}`}>
        <IoTriangleOutline className="down-votes" />
        <small className="votes-value">{ downVotesCount }</small>
      </div>
    </div>
  );
}

Votes.propTypes = {
  upVotesCount: PropTypes.number.isRequired,
  downVotesCount: PropTypes.number.isRequired,
  isDownVote: PropTypes.bool.isRequired,
  isUpVote: PropTypes.bool.isRequired,
};

export default Votes;
