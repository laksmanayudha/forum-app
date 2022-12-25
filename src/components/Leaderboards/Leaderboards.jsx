import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardItem from './LeaderboardItem';

function Leaderboards({ leaderboards }) {
  return (
    <div className="leaderboards-lists">
      <LeaderboardHeader />
      {leaderboards && leaderboards.map(({ user, score }, index) => (
        <LeaderboardItem
          key={user.id}
          user={user}
          score={score}
          rank={index + 1}
        />
      ))}
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const leaderboardShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

Leaderboards.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
};

export default Leaderboards;
