import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const PostListMock = [..."teste"];

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts"> 
      {
        PostListMock.map((post, index) => (
          < Post key={index} />
        ))
      }
    </section>
  </div>
);

export default UserPosts;
