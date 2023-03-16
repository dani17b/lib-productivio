import { useState } from 'react';
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
  const [userProps /*setUserProps*/] = useState<UserSummaryProps>({
    //TODO Añadir lógica real
    username: 'Logica pendiente',
    totalPoints: 2,
    level: 1,
    contactsNumber: 123,
    currentTasks: 3,
  });

  return (
    <div className="user-summary">
      <div className="user-summary__left-column">
        <div className="user-summary__user-pic"></div>
      </div>
      <div className="user-summary__center-column">
        <div className="user-summary__username">
          danituriño22 {userProps.username}
        </div>
        <div className="user-summary__current-missions">
          {userProps.currentTasks} misiones en curso
        </div>
        <div className="user-summary__user-level">Nivel {userProps.level}</div>
      </div>
      <div className="user-summary__right-column">
        <div className="user-summary__contacts">
          {userProps.contactsNumber} contactos
        </div>
        <div className="user-summary__total-points">
          {userProps.totalPoints}pts
        </div>
      </div>
    </div>
  );
};
