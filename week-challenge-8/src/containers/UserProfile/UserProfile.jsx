import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container"> 
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {
                avatar.length > 0 ? 
                  <img src={avatar} alt="" />
                :
                  <img src="https://www.kindpng.com/picc/m/34-349852_whatsapp-icons-png-stuck-out-tongue-winking-eye.png" alt="" />
              }
            </div>

            {
              name ?
                <p className="user__name">
                  {name}
                  <span>{`@${username}`}</span>
                </p>
              :
                <p className="user__name inexistent__user">
                  Usuário inexistente
                  <span>@</span>
                </p>
            }
           
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
