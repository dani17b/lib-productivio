import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './likes.scss';

interface LikesProps {
  totalLikes: number;
}

export const Likes = ({ totalLikes }: LikesProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [numberOfLikes, setNumberOfLikes] = useState<number>(totalLikes);

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
