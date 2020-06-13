import React, { useState } from "react";

import Story from '../../components/Story';
import UserImageMock from '../../assets/img/black-panther-profile.jpg';

import './Stories.scss';

const storiesMock = [..."teste"];

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            storiesMock.map((story, index) => {
              return (
                <button 
                  className={`user__thumb ${index === 0 ? "user__thumb--hasNew" : ""}`} 
                  onClick={() => {}} 
                  key={index} 
                >
                  <div className="user__thumb__wrapper">
                    <img src={UserImageMock} alt="" />
                  </div>  
                </button>
              )
            })
          }
        </div>
      </section>

      {!!showStory && (
        <Story />
        )}
    </>
  );
};

export default Stories;
