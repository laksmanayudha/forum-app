import React from 'react';
import withSidebar from '../components/hoc/withSidebar';
import { Leaderboards } from '../components/Leaderboards';
// import PropTypes from 'prop-types';
import '../styles/pages/leaderboards-page.css';

function LeaderboardPage() {
  const leaderboards = [
    {
      user: {
        id: 'users-1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://ui-avatars.com/api/?name=LaksmanaYudha&background=random',
      },
      score: 10,
    },
    {
      user: {
        id: 'users-2',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Santhi&background=random',
      },
      score: 5,
    },
    {
      user: {
        id: 'users-3',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Santhi&background=random',
      },
      score: 5,
    },
    {
      user: {
        id: 'users-4',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Santhi&background=random',
      },
      score: 5,
    },
    {
      user: {
        id: 'users-5',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Santhi&background=random',
      },
      score: 5,
    },
    {
      user: {
        id: 'users-6',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Santhi&background=random',
      },
      score: 5,
    },
  ];

  return (
    <section className="leaderboard-page page--aside">
      <Leaderboards leaderboards={leaderboards} />
    </section>
  );
}

export default withSidebar(LeaderboardPage);
