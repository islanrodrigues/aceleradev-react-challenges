import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ infoUser = {} })  => {
  const {avatar, name, username } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <div className="user"> 
          <Link to={`users/${username}`}>
            <div className="user__thumb">
              {
                avatar ?
                  <img src={avatar} alt={name} />
                : 
                  <img src="https://www.kindpng.com/picc/m/34-349852_whatsapp-icons-png-stuck-out-tongue-winking-eye.png" alt="" />
              }
            </div>
            <span className="user__name">{username}</span>
          </Link>
        </div>
      </header>
    </article>
  )
};

export default User;
