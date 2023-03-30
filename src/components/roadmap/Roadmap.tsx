import './roadmap.scss';

enum TaskStatusEnum {
  /**
   * Task in progress
   */
  EN_CURSO = 'En Curso',
  /**
   * Task is finished
   */
  FINALIZADA = 'Finalizada',
}

interface RoadmapStyle {
  /**
   * Changes the circle's size depending on the event displayed
   */
  circleSize: number;
  /**
   * Changes the circle's color depending on the event
   */
  circleColor: string;
  /**
   * Allows you to change the line's color
   */
  lineColor: string;
  /**
   * Allows you to change the line's height so it reaches all the circles displayed
   */
  lineHeight: number;
}

interface RoadmapProps {
  /**
   * Date when the task is updated or a new level is reached
   */
  taskDate: Date;
  /**
   * Task name or description
   */
  taskName?: string;
  /**
   * Displays the new level once it's reached
   */
  level?: number;
  /**
   * Allows to change the task status from "EN_CURSO" to "FINALIZADA"
   */
  status?: TaskStatusEnum;
  /**
   * Various style options that change depending on the information displayed
   */
  style: RoadmapStyle;
}

export const Roadmap = (props: RoadmapProps) => {
  const { taskDate, taskName, level, status } = props;

  return (
    <div className="roadmap-container">
      <div className="roadmap-container__left-column">
        <div className="roadmap-container__date">{taskDate.toString()}</div>
      </div>
      <div className="roadmap-container__center-column">
        <div className="roadmap-container__circle"></div>
        <div className="roadmap-container__line"></div>
      </div>
      <div className="roadmap-container__right-column">
        <div className="roadmap-container__task-name">
          {status}
          {taskName}
        </div>
        <div className="roadmap-container__level">Nivel {level}</div>
      </div>
    </div>
  );
};
