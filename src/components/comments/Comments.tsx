import { FaComments } from 'react-icons/fa';
import './comments.scss';

export const Comments = ({
  onShowCommentsClick,
}: {
  onShowCommentsClick: () => void;
}) => {
  return (
    <div className="comments-container">
      <div className="comment-toggle-container">
        <button className="comment-button" onClick={onShowCommentsClick}>
          <FaComments />
        </button>
      </div>
    </div>
  );
};
