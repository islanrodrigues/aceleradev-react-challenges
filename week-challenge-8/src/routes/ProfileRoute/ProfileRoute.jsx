import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';
import Loading from '../../components/Loading';

import { getUserByUsername } from '../../services/UserService';
import { getPosts } from '../../services/PostService';

const ProfileRoute = () => {
  const [name, setName] = useState('');
  const [id, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { pathname } = window.location;
    const username = pathname.split("/")[2];

    getUserByUsername(username).then(data => {
      if (data[0]) {
        setAvatar(data[0].avatar);
        setEmail(data[0].email);
        setName(data[0].name);
        setUsername(data[0].username);
        setUserId(data[0].id);
      }
    });
  }, []);

  useEffect(() => {
    if (!id)
      return;

    getPosts(id).then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile 
        name={name}
        avatar={avatar}
        username={username}
        email={email}
      />
      {
        loading ? 
          <Loading />
        : 
        <UserPosts 
          posts={posts}
        />
      }
    </div>
  );
};

export default ProfileRoute;
