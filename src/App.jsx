import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import CreateThreadPage from './pages/CreateThreadPage';
import LeaderboardPage from './pages/LeaderboardPage';
import NotFoundPage from './pages/NotFoundPage';
import ThreadDetail from './pages/ThreadDetail';
import './styles/app.css';

function App() {
  return (
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
          <Route path="thread/:id" element={<ThreadDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
