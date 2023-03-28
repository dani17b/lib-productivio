import './userInfo.scss';
import { UserPhoto } from '../userPhoto/UserPhoto';

const DEFAULT_COLOR = 'white';
const DEFAULT_BG_COLOR = 'rgb(87, 160, 255)';

interface UserInfoProps {
  user: {
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
  };

  /**
   * Choose the background color otherwise default color is blue
   */
  backgroundColor?: string;
  /**
   *Choose the text color otherwise default color is white
   */
  textColor?: string;
}

export const UserInfo = (props: UserInfoProps) => {
  const { user, backgroundColor, textColor } = props;

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
          <UserPhoto imageSrc={user.userImg} borderColor={user.userColor} />
        </div>
      </div>
      <div className="user-info__center-column">
        <div className="user-info__username"> {user.username}</div>
        {user.description && (
          <div className="user-info__description">{user.description}</div>
        )}
        {user.currentTasks && (
          <div className="user-info__current-missions">
            {user.currentTasks} misiones
          </div>
        )}

        {user.level && (
          <div className="user-info__user-level">Nivel {user.level}</div>
        )}
      </div>
      <div className="user-info__right-column">
        {user.contactsNumber && (
          <div className="user-info__contacts">
            {user.contactsNumber} contactos
          </div>
        )}
        {
          <div className="user-info__total-points">
            {user.totalPoints} puntos
          </div>
        }
      </div>
    </div>
  );
};
