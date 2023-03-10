import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ avatar, name, email }) {
  return (
    <div className="profile">
      <img src={avatar} alt="profile" />
      <div className="profile-body">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

UserProfile.defaultProps = {
  email: '',
};

UserProfile.propTypes = {
  /** User profile image */
  avatar: PropTypes.string.isRequired,
  /** User's name */
  name: PropTypes.string.isRequired,
  /** User's email */
  email: PropTypes.string,
};

export default UserProfile;
