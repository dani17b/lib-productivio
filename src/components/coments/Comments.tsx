import React, { useState } from 'react';

import './comments.scss';

export const Comments = () => {
  const [showComments, setShowComments] = useState(false);

  const handleCommentToggle = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="comments-container">
      <div className="comment-toggle-container" onClick={handleCommentToggle}>
        <span className="comment-icon">{showComments ? '🔽' : '💬'}</span>
        <span className="comment-text">Show Comments</span>
      </div>
      {showComments && (
        <div>
          {/* Aquí irían los comentarios */}
          <p>Comment 1</p>
          <p>Comment 2</p>
        </div>
      )}
    </div>
  );
};
