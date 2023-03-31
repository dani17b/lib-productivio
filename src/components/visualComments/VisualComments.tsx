import React from 'react';
import { Likes } from '../likes/Likes';
import { TimeAgo } from '../timeAgo/TimeAgo';
import { UserPhoto } from '../userPhoto/UserPhoto';
import './visualComments.scss';

const date = new Date();
const DEFAULT_BORDER_COLOR = 'red';

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
    <div className="visualComment">
      <div className="user-photo">
        <UserPhoto
          imageSrc={imageSrc}
          borderColor={photoBorderColor || DEFAULT_BORDER_COLOR}
        />
      </div>
      <div className="data">
        <div className="username">{username}</div>
        <div className="comment">{comment}</div>
        <div className="like-time">
          <div className="likes">
            <Likes totalLikes={10} likedByMe={false}/>
          </div>
          <div className="time-ago">
            <TimeAgo createdAt={date} />
          </div>
        </div>
      </div>
    </div>
  );
};
