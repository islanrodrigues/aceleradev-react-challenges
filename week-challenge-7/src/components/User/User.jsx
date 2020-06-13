import React from 'react';
import { Link } from 'react-router-dom';

import UserProfileMock from '../../assets/img/black-panther-profile.jpg';

const User = ({ infoUser = {} })  => {
  const {avatar, name, username } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <div className="user"> 
          <Link to="/">
            <div className="user__thumb">
              <img src={UserProfileMock} alt="" />
            </div>
            <span className="user__name">Rei T'Challa</span>
          </Link>
        </div>
      </header>
    </article>
  )
};

export default User;
