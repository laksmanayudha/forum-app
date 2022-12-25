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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
};

export default UserProfile;
