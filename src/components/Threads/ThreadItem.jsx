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
  /** The identifier of the thread */
  id: PropTypes.string.isRequired,
  /** The Title of the thread */
  title: PropTypes.string.isRequired,
  /** The Body of the thread */
  body: PropTypes.string.isRequired,
  /** The Category of the thread */
  category: PropTypes.string.isRequired,
  /** The time of the thread was created */
  createdAt: PropTypes.string.isRequired,
  /** The user details of the thread */
  user: PropTypes.shape(userShape).isRequired,
  /** The total of up-vote of the thread */
  upVotesCount: PropTypes.number.isRequired,
  /** The total of down-vote of the thread */
  downVotesCount: PropTypes.number.isRequired,
  /** The indication of the thread should display with down-vote actived */
  isDownVote: PropTypes.bool.isRequired,
  /** The indication of the thread should display with up-vote actived */
  isUpVote: PropTypes.bool.isRequired,
  /** The total comments of the thread */
  totalComments: PropTypes.number.isRequired,
  /** A function that called when user clicked the vote button  */
  onVotes: PropTypes.func.isRequired,
  /** Indicate that thread body and title should truncate when it overflow */
  truncate: PropTypes.bool,
  /** Url to detail page */
  detailPage: PropTypes.string,
};

ThreadItem.defaultProps = {
  truncate: false,
  detailPage: '',
};

export default ThreadItem;
