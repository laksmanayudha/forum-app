import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BiUserCircle } from 'react-icons/bi';
import {
  FiLogOut,
  // FiSearch,
} from 'react-icons/fi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { SideBar, SidebarNavItem, SidebarNavs } from '../components/SideBar';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function withSidebar(Component) {
  return function withSidebarComponent(props) {
    const { authUser } = useSelector((states) => states);
    const dispatch = useDispatch();
    return (
      <>
        <SideBar logo="ForumApp">
          <SidebarNavs>
            <SidebarNavItem label="Threads" icon={<IoChatbubblesOutline />} href="/threads" />
            <SidebarNavItem label="Leaderboards" icon={<MdOutlineLeaderboard />} href="/leaderboards" />
            {/* <SidebarNavItem label="Search" icon={<FiSearch />} href="/" /> */}
            {/* <SidebarNavItem label="Profile" icon={<BiUserCircle />} href="/" /> */}
            {authUser
              && (
                <SidebarNavItem
                  label="Logout"
                  icon={<FiLogOut />}
                  action={() => {
                    dispatch(asyncUnsetAuthUser());
                  }}
                />
              )}
          </SidebarNavs>
        </SideBar>
        <Component {...props} />
      </>
    );
  };
}

export default withSidebar;
