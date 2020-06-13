import React from 'react';

import './UserProfile.scss';

import UserProfileMock from '../../assets/img/black-panther-profile.jpg';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container"> 
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={UserProfileMock} alt="" />
            </div>
            <p className="user__name">
              Rei T'Challa
              <span>{`@${"tchalla"}`}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
