import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import './likes.scss';

interface LikesProps {
  totalLikes: number;
  likedByMe: boolean;
}

export const Likes = (props: LikesProps) => {
  const { likedByMe, totalLikes } = props;
  const [isLiked, setIsLiked] = useState<boolean>(likedByMe);
  const [numberOfLikes, setNumberOfLikes] = useState<number>(totalLikes);

  const fillAnimation = useSpring({
    opacity: isLiked ? 1 : 0,
  });

  const handleLikeClick = () => {
    setNumberOfLikes((prevState) => prevState + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="likes-container">
      <animated.span className={`heart ${isLiked ? '--liked' : ''}`}>
        {isLiked ? (
          <FaHeart onClick={handleLikeClick} />
        ) : (
          <FaRegHeart onClick={handleLikeClick} />
        )}

        <animated.div
          className={`${isLiked ? '--filled' : ''}`}
          style={fillAnimation}
        />
      </animated.span>

      <span>{numberOfLikes} Likes</span>
    </div>
  );
};
