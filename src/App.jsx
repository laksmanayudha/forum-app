import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { IoChatbubblesOutline } from 'react-icons/io5';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import { SideBar, SidebarNavItem, SidebarNavs } from './components/SideBar';
import './styles/app.css';

function App() {
  return (
    <div className="app-container">
      <SideBar logo="ForumApp">
        <SidebarNavs>
          <SidebarNavItem label="Threads" icon={<IoChatbubblesOutline />} href="/threads" />
          <SidebarNavItem label="Leaderboards" icon={<MdOutlineLeaderboard />} href="/leaderboards" />
          <SidebarNavItem label="Search" icon={<FiSearch />} />
          <SidebarNavItem label="Profile" icon={<BiUserCircle />} />
          <SidebarNavItem label="Logout" icon={<FiLogOut />} />
        </SidebarNavs>
      </SideBar>
      <main>
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
        <ThreadsPage />
      </main>
    </div>
  );
}

export default App;
