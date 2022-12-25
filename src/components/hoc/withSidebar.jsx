import React from 'react';
// import { BiUserCircle } from 'react-icons/bi';
// import { FiSearch } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { SideBar, SidebarNavItem, SidebarNavs } from '../SideBar';

function withSidebar(Component) {
  return function withSidebarComponent(props) {
    return (
      <>
        <SideBar logo="ForumApp">
          <SidebarNavs>
            <SidebarNavItem label="Threads" icon={<IoChatbubblesOutline />} href="/threads" />
            <SidebarNavItem label="Leaderboards" icon={<MdOutlineLeaderboard />} href="/leaderboards" />
            {/* <SidebarNavItem label="Search" icon={<FiSearch />} href="/" /> */}
            {/* <SidebarNavItem label="Profile" icon={<BiUserCircle />} href="/" /> */}
            <SidebarNavItem label="Logout" icon={<FiLogOut />} href="/" />
          </SidebarNavs>
        </SideBar>
        <Component {...props} />
      </>
    );
  };
}

export default withSidebar;
