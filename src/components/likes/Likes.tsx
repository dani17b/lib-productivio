import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './likes.scss';

export const Likes = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const fillAnimation = useSpring({
    opacity: isLiked ? 1 : 0,
  });

  const handleLikeClick = () => {
    let likes = numberOfLikes;
    if (!isLiked) {
      likes += 1;
    } else {
      likes -= 1;
    }
    setNumberOfLikes(likes);
    setIsLiked(!isLiked);
  };

  return (
    <div className="like-container" onClick={handleLikeClick}>
      <animated.span className={`heart ${isLiked ? '--liked' : ''}`}>
        <animated.div
          className={`${isLiked ? '--filled' : ''}`}
          style={fillAnimation}
        />
      </animated.span>
      {numberOfLikes} Likes
    </div>
  );
};