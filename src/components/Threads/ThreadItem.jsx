import React from 'react';
import PropTypes from 'prop-types';
import { IoTriangleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ThreadCategory from './ThreadCategory';
import ThreadCategoryContainer from './ThreadCategoryContainer';
import { postedAt } from '../../utils';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  user,
  upVotesCount,
  downVotesCount,
  isDownVote,
  isUpVote,
  totalComments,
  truncate,
}) {
  return (
    <article className="thread" key={id}>
      <div className="thread__votes">
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
      </div>
      <div className="thread__data-container">
        <div className="thread__title-desc">
          <h4 className={`${truncate ? 'thread--truncate' : ''}`}>
            <Link to="/">{ title }</Link>
          </h4>
          <div className={`${truncate ? 'thread--truncate' : ''}`}>
            { body }
          </div>
        </div>
        <div className="thread__categories">
          <ThreadCategoryContainer>
            <ThreadCategory label={category} />
          </ThreadCategoryContainer>
        </div>
        <div className="thread__etc">
          <span>
            { postedAt(createdAt) }
            { ' ' }
            by
            { ' ' }
            <span className="username">{ user.name }</span>
            { ' ' }
            -
            { ' ' }
            { totalComments }
            { ' ' }
            comments
          </span>
        </div>
      </div>
    </article>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesCount: PropTypes.number.isRequired,
  downVotesCount: PropTypes.number.isRequired,
  isDownVote: PropTypes.bool.isRequired,
  isUpVote: PropTypes.bool.isRequired,
  totalComments: PropTypes.number.isRequired,
  truncate: PropTypes.bool,
};

ThreadItem.defaultProps = {
  truncate: false,
};

export default ThreadItem;
