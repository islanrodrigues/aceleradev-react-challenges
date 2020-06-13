import React from 'react';

import Post from '../../components/Post';

const postsMock = [..."teste"];

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    {postsMock.map((post, index) => (
      <Post key={index} userInfo={true} />
    ))}
  </div>
);

export default Posts;
