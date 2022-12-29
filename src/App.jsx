import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import CreateThreadPage from './pages/CreateThreadPage';
import LeaderboardPage from './pages/LeaderboardPage';
import NotFoundPage from './pages/NotFoundPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import './styles/app.css';
import { Loading } from './components/Loading';
import { asyncPreloadProccess } from './states/isPreload/action';

function App() {
  const { isPreload } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProccess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<ThreadsPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="leaderboards" element={<LeaderboardPage />} />
            <Route path="threads" element={<ThreadsPage />}>
              <Route path="new" element={<CreateThreadPage />} />
            </Route>
            <Route path="thread/:threadId" element={<ThreadDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
