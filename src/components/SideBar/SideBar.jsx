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

SideBar.propTyeps = {
  logo: PropTypes.string.isRequired,
};

export default SideBar;
