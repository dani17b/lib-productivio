import './userSummary.scss';

interface UserSummaryProps {
  /**
   * Label that contains the user's username
   */
  username: string;
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

export const UserSummary = (props: UserSummaryProps) => {
  const { username, totalPoints, level, contactsNumber, currentTasks } = props;

  return (
    <div className="user-summary">
      <div className="user-summary__left-column">
        <div className="user-summary__user-pic"></div>
      </div>
      <div className="user-summary__center-column">
        <div className="user-summary__username"> {username}</div>
        <div className="user-summary__current-missions">
          {currentTasks} missions in progress
        </div>
        <div className="user-summary__user-level">Level {level}</div>
      </div>
      <div className="user-summary__right-column">
        <div className="user-summary__contacts">{contactsNumber} contacts</div>
        <div className="user-summary__total-points">{totalPoints}pts</div>
      </div>
    </div>
  );
};
