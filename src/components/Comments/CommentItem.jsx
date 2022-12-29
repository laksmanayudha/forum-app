import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { UserProfile } from '../UserProfile';
import { Votes } from '../Votes';
import { postedAt } from '../../utils';

function CommentItem({
  owner,
  content,
  createdAt,
  upVotesCount,
  downVotesCount,
  isDownVote,
  isUpVote,
}) {
  return (
    <div className="comment">
      <UserProfile {...owner} />
      <div className="comment-body">
        <Votes {...{
          upVotesCount,
          downVotesCount,
          isDownVote,
          isUpVote,
        }}
        />
        <div className="comment-content">
          <div className="content">
            {parser(content)}
          </div>
          <div className="created-at">
            <span>{postedAt(createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
};

CommentItem.propTypes = {
  owner: PropTypes.shape(ownerShape).isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesCount: PropTypes.number.isRequired,
  downVotesCount: PropTypes.number.isRequired,
  isDownVote: PropTypes.bool.isRequired,
  isUpVote: PropTypes.bool.isRequired,
};

export default CommentItem;
