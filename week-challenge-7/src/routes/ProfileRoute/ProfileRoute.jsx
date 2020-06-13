import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false),
    2000);
  });

  return (
    <div data-testid="profile-route">
      <UserProfile />
      {
        loading ? 
          <Loading />
        : 
        <UserPosts />
      }
    </div>
  );
};

export default ProfileRoute;
