import React from 'react';

function LeaderboardHeader() {
  return (
    <div className="leaderboard leaderboard--header">
      <div className="leaderboard__rank">
        <h4>Rank</h4>
      </div>
      <div className="leaderboard__user-profile">
        <h4>User</h4>
      </div>
      <div className="leaderboard__score">
        <h4>Score</h4>
      </div>
    </div>
  );
}

export default LeaderboardHeader;
