import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';

import { getUsers } from '../../services/UserService';
import { getPosts } from '../../services/PostService';
import { getStories } from '../../services/StoryService';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [userCount, setUserCount] = useState(0);

  const getUserById = (id) => users.find(user => user.id === id);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (users.length === userCount) return;

    getPosts(users[userCount].id).then(data => {
      setPosts([...posts, ...data]);
      setUserCount(userCount + 1);
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, userCount]);

  useEffect(() => {
    getStories().then(data => {
        setStories(data);
    });
  }, [users]);

  return (
    <div data-testid="feed-route">
      {
        users.length > 0 && stories.length > 0 &&
        <Stories 
          stories={stories}
          getUserHandler={getUserById}
        />
      }
      
      {
        users.length !== userCount ?
          ( <Loading /> )
        : 
          ( <Posts 
            posts={posts}
            getUserHandler={getUserById}
          /> )
      }
    </div>
  );
};

export default FeedRoute;
