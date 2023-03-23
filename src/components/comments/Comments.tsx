import React, { useState } from 'react';
import { FaComments, FaChevronDown } from 'react-icons/fa';
import './comments.scss';


interface CommentsProps {
  comments: string[];
}

export const Comments = ({ comments }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="comments-container">
      <div className="comment-toggle-container" onClick={() => setShowComments(!showComments)}>
        <span className="comment-icon">{showComments ? <FaChevronDown /> : <FaComments />}</span>
        <span className="comment-text">Show Comments</span>
      </div>
      {showComments && (
        <div>
          {comments.map(comment => (
            <p key={comment}>{comment}</p>
          ))}
        </div>
      )}
    </div>
  );
};
