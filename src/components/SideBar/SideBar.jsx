import React from 'react';
import PropTypes from 'prop-types';

function SideBar({ logo, children }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h3>{ logo }</h3>
      </div>
      { children }
    </aside>
  );
}

SideBar.propTypes = {
  logo: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SideBar.defaultProps = {
  children: [],
};

export default SideBar;
