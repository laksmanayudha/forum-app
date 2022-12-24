import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function SidebarNavItem({ label, icon, href }) {
  const { pathname } = useLocation();

  return (
    <li className={`sidebar-lists-item ${pathname === href ? 'sidebar--active' : ''}`}>
      <Link to={href}>
        {icon}
        <span className="sidebar-lists-item__label">
          {label}
        </span>
      </Link>
    </li>
  );
}

SidebarNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SidebarNavItem;
