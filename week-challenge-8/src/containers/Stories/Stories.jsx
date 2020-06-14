import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const foundStory = findStoryById(story.id);
    const user = getUserHandler(story.userId);

    setSelectedUser(user);
    setSelectedHistory(foundStory);
    setShowStory(!showStory);
  };

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map((story, index) => {
              const user = getUserHandler(story.userId);

              return (
                <button 
                  className={`user__thumb ${index === 0 ? "user__thumb--hasNew" : ""}`} 
                  onClick={() => handleStory(story)} 
                  key={story.id} 
                >
                  <div className="user__thumb__wrapper">
                    <img src={user.avatar} alt={user.name} />
                  </div>  
                </button>
              )
            })
          }
        </div>
      </section>

      {!!showStory && (
        <Story 
          story={selectedStory}
          user={selectedUser}
          handleClose={() => setShowStory(false)}
        />
        )}
    </>
  );
};

export default Stories;
