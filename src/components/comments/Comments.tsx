import React, { useState } from 'react';
import { FaComments, FaChevronDown } from 'react-icons/fa';
import './comments.scss';

interface CommentsProps {
    /**
   * Array of comments with their corresponding user
   */
  comments: { user: string; comment: string }[];
}

export const Comments = ({ comments }: CommentsProps) => {
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
          {comments.map((comment) => (
            <div className="comment">
              <span className="comment-user">{comment.user}</span>
              <span className="comment-text">{comment.comment}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
