import React from 'react';
// import PropTypes from 'prop-types';

function SidebarNavs({ children }) {
  return (
    <nav className="sidebar-navs">
      <ul className="sidebar-lists">
        { children }
      </ul>
    </nav>
  );
}

export default SidebarNavs;
