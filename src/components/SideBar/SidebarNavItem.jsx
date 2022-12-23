import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function SidebarNavItem({ label, icon, href }) {
  const { pathname } = useLocation();

  return (
    <li className={`sidebar-lists-item ${pathname === href ? 'sidebar--active' : ''}`}>
      <Link to={href}>
        <h4>
          { icon }
          <span className="sidebar-lists-item__label">{ label }</span>
        </h4>
      </Link>
    </li>
  );
}

SidebarNavItem.propTyeps = {
  label: PropTypes.string.isRequired,
};

export default SidebarNavItem;
