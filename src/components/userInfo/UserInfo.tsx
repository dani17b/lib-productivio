import './userSummary.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

interface UserInfoProps {
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
  description: string;
  /**
   * User's total points
   */
  totalPoints: number;
  /**
   * User's current level
   */
  level: number;
  /**
   * User's total contacts
   */
  contactsNumber: number;
  /**
   * Total number of current missions/tasks
   */
  currentTasks: number;
}

export const UserInfo = ({ user }: { user: UserInfoProps }) => {
  const {
    username,
    userImg,
    userColor,
    description,
    totalPoints,
    level,
    contactsNumber,
    currentTasks,
  } = user;

  return (
    <div className="user-info-summary">
      <div className="user-info__left-column">
        <div className="user-info__user-pic">
          <UserPhoto imageSrc={userImg} borderColor={userColor} />
        </div>
      </div>
      <div className="user-info__center-column">
        <div className="user-info__username"> {username}</div>
        <div className="user-info__description">{description}</div>
        <div className="user-info__current-missions">
          {currentTasks} misiones activas
        </div>
        <div className="user-info__user-level">Nivel {level}</div>
      </div>
      <div className="user-info__right-column">
        <div className="user-info__contacts">{contactsNumber} contactos</div>
        <div className="user-info__total-points">{totalPoints} puntos</div>
      </div>
    </div>
  );
};
