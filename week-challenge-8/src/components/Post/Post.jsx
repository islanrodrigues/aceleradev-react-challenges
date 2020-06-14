import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  const commentsCount = () => {
    if (like)
      return postInfo.comments.length + 1;

    return postInfo.comments.length;
  }

  return (
    <article className="post" data-testid="post">
      
      {userInfo && 
        <header className="post__header">
          <div className="user">
            <div className="user__thumb">
              <Link to={`/users/${userInfo.username}`}> 
                  <img src={userInfo.avatar} alt="" />
              </Link>
            </div>

            <label className="user__name">
              <Link to={`/users/${userInfo.username}`}>
                {userInfo.name}
              </Link>
            </label>
          </div>

          <button className="post__context" onClick={() => setFollow(!follow)}>
            {
              !follow ? 
                <span className="follow-btn">Seguir</span>
              :
                <span className="follow-btn is-following">Seguindo</span>
            }
          </button>
        </header>
      }

      <figure className=" post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>

      { userInfo && 
        <footer className="post__controls">
          <button className="post__control" onClick={() => setLike(!like)}>
            {
              !like ? 
                <i className="far fa-heart" />
              : 
                <i className="fas fa-heart" />
            }
          </button>


          <div className="post__status">
            <div className="user">
              <span>curtido por <label>{postInfo.comments[0]?.name }</label> e outras <label>{`${commentsCount()} pessoas`}</label></span>
            </div>
          </div>

        </footer>
      }
      
    </article>
  );
};

export default Post;
