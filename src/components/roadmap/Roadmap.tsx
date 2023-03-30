import './roadmap.scss';

// Default variables for tasks' dots
const DOT_TASK_COLOR = '#8394c4';
const DOT_TASK_HEIGHT = 18;
const DOT_TASK_WIDTH = 18;
// Default variables for levels' dots
const DOT_LEVEL_COLOR = '#1a3891';
const DOT_LEVEL_HEIGHT = 20;
const DOT_LEVEL_WIDTH = 20;

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
   * Changes the circle's height. The number must be the same as dotWidth's
   */
  dotHeight: number;
  /**
   * Changes the dot's width. The number must be the same as dotHeight's
   */
  dotWidth: number;
  /**
   * Changes the circle's color depending on the event
   */
  dotColor: string;
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
  const { taskDate, taskName, level, status, style } = props;

  // Sets the current date of the task or level up registered
  const savedDate = () => {
    let today = new Date(taskDate);
    let day = today.getDate().toString().padStart(2, '0');
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Sets the dot style depending on whether it is a task or a new level
  const dotType = () => {
    if (level == null && level == undefined) {
      return {
        background: style.dotColor || DOT_TASK_COLOR,
        width: style.dotWidth || DOT_TASK_WIDTH,
        height: style.dotHeight || DOT_TASK_HEIGHT,
      };
    } else if (level != null && level != undefined) {
      return {
        background: style.dotColor || DOT_LEVEL_COLOR,
        width: style.dotWidth || DOT_LEVEL_WIDTH,
        height: style.dotHeight || DOT_LEVEL_HEIGHT,
      };
    }
  };

  // Changes the message on screen depending on the status
  const setStatus = () => {
    return status === TaskStatusEnum.FINALIZADA
      ? `Finalizada tarea ${taskName}`
      : `Tarea ${taskName} en curso`;
  };

  return (
    <div className="roadmap-container">
      <div className="roadmap-container__left-column">
        <div className="roadmap-container__date">{savedDate()}</div>
      </div>
      <div className="roadmap-container__center-column">
        <div className="roadmap-container__dot" style={dotType()}></div>
        <div className="roadmap-container__line"></div>
      </div>
      <div className="roadmap-container__right-column">
        <div className="roadmap-container__task-name">{setStatus()}</div>
        <div className="roadmap-container__level">Nivel {level}</div>
      </div>
    </div>
  );
};
