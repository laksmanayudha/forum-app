import React from 'react';
import PropTypes from 'prop-types';
import { UserProfile } from '../UserProfile';

function LeaderboardItem({
  rank,
  user,
  score,
}) {
  const rankBackground = ['first', 'second', 'third'];
  return (
    <div className={`leaderboard ${rankBackground[rank]}`}>
      <div className="leaderboard__rank">
        <h4>{rank}</h4>
      </div>
      <div className="leaderboard__user-profile">
        <UserProfile {...user} />
      </div>
      <div className="leaderboard__score">
        <h4>{score}</h4>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default LeaderboardItem;
