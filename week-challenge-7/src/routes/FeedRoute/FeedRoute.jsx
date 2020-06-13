import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPosts(true);
    }, 2000);
  }, [])

  return (
    <div data-testid="feed-route">
      <Stories />
      {
        !posts ?
          ( <Loading /> )
        : 
          ( <Posts /> )
      }
    </div>
  );
};

export default FeedRoute;
