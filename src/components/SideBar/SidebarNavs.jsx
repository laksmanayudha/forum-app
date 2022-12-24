import React from 'react';
import PropTypes from 'prop-types';

function SidebarNavs({ children }) {
  return (
    <nav className="sidebar-navs">
      <ul className="sidebar-lists">
        { children }
      </ul>
    </nav>
  );
}

SidebarNavs.propTypes = {
  children: PropTypes.node,
};

SidebarNavs.defaultProps = {
  children: [],
};

export default SidebarNavs;
