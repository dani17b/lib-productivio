export interface LevelProps {
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
}

export interface ContactsNumberProps {
  /**
   * User's total contacts
   */
  contactsNumber: number;
}

export interface CurrentTasksProps {
  /**
   * Total number of current missions/tasks
   */
  currentTasks: number;
}
