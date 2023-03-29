import React from 'react';
import { Likes } from '../likes/Likes';
import { TimeAgo } from '../timeAgo/TimeAgo';
import { UserPhoto } from '../userPhoto/UserPhoto';
import './visualComments.scss';
const date = new Date();

export interface CommentProps {
  imageSrc: string;
  photoBorderColor?: string;
  username: string;
  comment: string;
}

export const VisualComments = ({
  commentProps,
}: {
  commentProps: CommentProps;
}) => {
  const { imageSrc, photoBorderColor, username, comment } = commentProps;

  return (
    <>
      <div className="postComment">
        <div className="user-photo">
          <UserPhoto imageSrc={imageSrc} borderColor={photoBorderColor || ''} />
        </div>
        <div className="data">
          <div className="username">{username}</div>
          <div className='comment'>{comment}</div>
        </div>
        <div className="like-time">
          <div className="time-ago">
            <TimeAgo createdAt={date} />
          </div>
          <div className="likes">
            <Likes totalLikes={10} />
          </div>
        </div>
      </div>
    </>
  );
};
