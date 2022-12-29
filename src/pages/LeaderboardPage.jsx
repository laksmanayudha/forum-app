import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withSidebar from '../hoc/withSidebar';
import { Leaderboards } from '../components/Leaderboards';
// import PropTypes from 'prop-types';
import '../styles/pages/leaderboards-page.css';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const { leaderboards } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <section className="leaderboard-page page--aside">
      <Leaderboards leaderboards={leaderboards} />
    </section>
  );
}

export default withSidebar(LeaderboardPage);
