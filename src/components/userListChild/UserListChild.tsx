import { UserPhoto } from '../userPhoto/UserPhoto';
import './userListChild.scss';

export interface UserProps {
  /**
   * Label that contains the user's username
   */
  username: string;
  /**
   * User's profile picture
   */
  userImg: string;
  /**
   * User's color based on their level. This element could be reused
   * for different purposes in other apps
   */
  userColor: string;
  /**
   * User's description
   */
  description?: string;
  /**
   * User's total points
   */
  totalPoints?: number;
  /**
   * User's current level
   */
  level?: number;
  /**
   * User's total contacts
   */
  contactsNumber?: number;
  /**
   * Total number of current missions/tasks
   */
  currentTasks?: number;
}

export interface UserListChildProps {
  user: UserProps;
  onClick: any;
  backgroundColor?: string;
  textColor?: string;
}
export const UserListChild = (props: UserListChildProps) => {
  const { user, onClick, backgroundColor, textColor } = props;
  const style = {
    backgroundColor
  };

  const usernameStyle ={
    color: textColor
  };
  return (
    <div className="user-list-child" style={style}>
      <div className="user-list-child__img">
        <UserPhoto imageSrc={user.userImg} borderColor={user.userColor} />
      </div>
      <div className="user-list-child__username" style={usernameStyle}>{user.username}</div>
      <div className="user-list-child__button" onClick={onClick}>
        X
      </div>
    </div>
  );
};
