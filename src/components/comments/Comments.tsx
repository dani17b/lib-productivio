import React, { useState } from 'react';
import { FaComments, FaChevronDown } from 'react-icons/fa';
import { PostComment } from '../postComment/PostComment';
import { VisualComments } from '../visualComments/VisualComments';
import './comments.scss';

interface CommentProps {
  name: string;
  imageSrc: string;
  inputText: string;
}

interface VisualCommentsProps {
  imageSrc: string;
  photoBorderColor: string;
  username: string;
  comment: string;
}

export const Comments = ({
  commentProps,
  visualCommentsProps,
  onPostClick,
}: {
  commentProps: CommentProps;
  visualCommentsProps: VisualCommentsProps[];
  onPostClick: () => void;
}) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="comments-container">
      <div
        className="comment-toggle-container"
        onClick={() => setShowComments(!showComments)}
      >
        <span className="comment-icon">
          {showComments ? <FaChevronDown /> : <FaComments />}
        </span>
        <span className="comment-button">Show Comments</span>
      </div>
      {showComments && (
        <div>
          <div className="Comments">
            <span className="postComment">
              <PostComment commentProps={commentProps} onClick={onPostClick} />
            </span>
            {visualCommentsProps.map((visualCommentProps, index) => (
              <span className="visualComment" key={index}>
                <VisualComments commentProps={visualCommentProps} />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};