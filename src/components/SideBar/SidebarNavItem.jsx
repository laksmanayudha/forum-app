import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function SidebarNavItem({
  label,
  icon,
  href,
  children,
  action,
}) {
  const { pathname } = useLocation();

  return (
    <li className={`sidebar-lists-item ${pathname === href ? 'sidebar--active' : ''}`}>
      <Link to={href} onClick={action}>
        {icon}
        <span className="sidebar-lists-item__label">
          {label}
        </span>
        {children}
      </Link>
    </li>
  );
}

SidebarNavItem.defaultProps = {
  children: [],
  href: '',
  action: () => {},
};

SidebarNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.node,
};

export default SidebarNavItem;
