import './userInfo.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

const BLOCK = 'block';
const NONE = 'none';
const DEFAULT_COLOR = 'white';
const DEFAULT_BG_COLOR = 'rgb(87, 160, 255)';

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
  /**
   * Choose the background color otherwise default color is blue
   */
  backgroundColor?: string;
  /**
   *Choose the text color otherwise default color is white
   */
  textColor?: string;
}

const show = (input: string) => {
  return input != null || input != 'undefined' ? BLOCK : NONE;
};

const showInfo = (prefix: string, info: string, suffix: string) => {
  return info != null ? `${prefix} ${info} ${suffix}` : '';
};

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
    backgroundColor,
    textColor,
  } = user;

  const setStyle = () => {
    return {
      background: backgroundColor || DEFAULT_BG_COLOR,
      color: textColor || DEFAULT_COLOR,
    };
  };

  return (
    <div className="user-info" style={setStyle()}>
      <div className="user-info__left-column">
        <div className="user-info__user-pic">
          <UserPhoto imageSrc={userImg} borderColor={userColor} />
        </div>
      </div>
      <div className="user-info__center-column">
        <div className="user-info__username"> {username}</div>
        <div
          className="user-info__description"
          style={{ display: show(description || '') }}
        >
          {description}
        </div>
        <div
          className="user-info__current-missions"
          style={{ display: show(String(currentTasks || '')) }}
        >
          {showInfo('', String(currentTasks || ''), 'misiones activas')}
        </div>
        <div
          className="user-info__user-level"
          style={{ display: show(String(level || '')) }}
        >
          {showInfo('Nivel ', String(level || ''), '')}
        </div>
      </div>
      <div className="user-info__right-column">
        <div
          className="user-info__contacts"
          style={{ display: show(String(contactsNumber || '')) }}
        >
          {showInfo('', String(contactsNumber || ''), 'contactos')}
        </div>
        <div
          className="user-info__total-points"
          style={{ display: show(String(totalPoints || '')) }}
        >
          {showInfo('', String(totalPoints || ''), 'puntos')}
        </div>
      </div>
    </div>
  );
};
