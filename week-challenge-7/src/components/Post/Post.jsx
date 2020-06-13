import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PostImageMock from '../../assets/img/black-panther-post.jpg';
import UserImageMock from '../../assets/img/black-panther-profile.jpg';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {

  return (
    <article className="post" data-testid="post">
      
      {userInfo && 
        <header className="post__header">
          <div className="user">
            <div className="user__thumb">
              <Link to="/users/black-panther"> 
                  <img src={UserImageMock} alt="" />
              </Link>
            </div>

            <label className="user__name">
              <Link to="/users/black-panther">
                Rei T'Challa
              </Link>
            </label>
          </div>

          <button className="post__context" onClick={() => {}}>
            <span className="follow-btn">Seguir</span>
          </button>
        </header>
      }

      <figure className=" post__figure">
        <img src={PostImageMock} alt="" />
      </figure>

      { userInfo && 
        <footer className="post__controls">
          <button className="post__control" onClick={() => {}}>
            <i className="far fa-heart" />
          </button>


          <div className="post__status">
            <div className="user">
              <span>curtido por <label>Shuri</label> e outras <label>540 pessoas</label></span>
            </div>
          </div>

        </footer>
      }
      
    </article>
  );
};

export default Post;
