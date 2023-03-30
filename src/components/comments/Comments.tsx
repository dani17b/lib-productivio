import React, { useState } from 'react';
import { FaComments, FaChevronDown } from 'react-icons/fa';
import { PostComment } from '../postComment/PostComment';
import { VisualComments } from '../visualComments/VisualComments';
import './comments.scss';

const commentProps = {
  name: 'comment',
  imageSrc:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  inputText: 'Escribe tu comentario aquí...',
};

const visualCommentsProps = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    photoBorderColor: 'blue',
    username: 'John Doe',
    comment: 'This is a great post!',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    photoBorderColor: 'red',
    username: 'Jane Smith',
    comment: 'Fantastic content, I loved it!',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    photoBorderColor: 'green',
    username: 'Bob Johnson',
    comment: 'This is very useful, thanks for sharing!',
  },
];

export const Comments = () => {
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
              <PostComment commentProps={commentProps} onClick={() => {}} />
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
