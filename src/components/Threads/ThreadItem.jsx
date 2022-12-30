import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import ThreadCategory from './ThreadCategory';
import ThreadCategoryContainer from './ThreadCategoryContainer';
import { postedAt } from '../../utils';
import { Votes } from '../Votes';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  user: { name },
  upVotesCount,
  downVotesCount,
  isDownVote,
  isUpVote,
  totalComments,
  truncate,
  detailPage,
  onVotes,
}) {
  return (
    <article className="thread" key={id}>
      <div className="thread__votes">
        <Votes
          upVotesCount={upVotesCount}
          downVotesCount={downVotesCount}
          isDownVote={isDownVote}
          isUpVote={isUpVote}
          onVotes={onVotes}
          id={id}
        />
      </div>
      <div className="thread__data-container">
        <div className="thread__title-desc">
          <h4 className={`${truncate ? 'thread--truncate' : ''}`}>
            <Link to={detailPage}>{ title }</Link>
          </h4>
          <div className={`${truncate ? 'thread--truncate' : ''}`}>
            { parser(body) }
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
            <span className="username">{ name }</span>
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
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
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
  onVotes: PropTypes.func.isRequired,
  truncate: PropTypes.bool,
  detailPage: PropTypes.string,
};

ThreadItem.defaultProps = {
  truncate: false,
  detailPage: '',
};

export default ThreadItem;
