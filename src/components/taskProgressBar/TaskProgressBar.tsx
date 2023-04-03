import './taskProgressBar.scss';

export interface TaskProgressProps {
  /**
   * Percentage completed of the task
   */
  percentage: number;
  /**
   * Additional text to be displayed on progress bar
   */
  text?: string;
  /**
   * Background color of progress bar parent
   */
  parentBackgroundColor?: string;
  /**
   * Background color of progress bar child
   */
  childBackgroundColor?: string;
}

export const TaskProgressBar = (props: TaskProgressProps) => {
  const TEXT_LIMIT = 35;
  const MAX_LIMIT = 100;
  const MIN_LIMIT = 0;
  const OPTICAL_ILUSION_FIXER = 5;

  const percentageText = (percentage: number) => {
    if (percentage === MAX_LIMIT) {
      return percentage;
    } else {
      return percentage - OPTICAL_ILUSION_FIXER;
    }
  };

  const DEFAULT_PARENT_COLOR = '#96ff9d';
  const DEFAULT_CHILD_COLOR = '#00d715';
  let { percentage, text, parentBackgroundColor, childBackgroundColor } = props;

  switch (true) {
    case percentage > MAX_LIMIT:
      percentage = MAX_LIMIT;
      break;
    case percentage < MIN_LIMIT:
      percentage = MIN_LIMIT;
      break;
    case percentage < TEXT_LIMIT:
      break;
    default:
      percentage += OPTICAL_ILUSION_FIXER;
      break;
  }

  const parentStyle = {
    backgroundColor: parentBackgroundColor || DEFAULT_PARENT_COLOR,
    color: childBackgroundColor,
  };
  const childStyle = {
    width: percentage + '%',
    backgroundColor: childBackgroundColor || DEFAULT_CHILD_COLOR,
    color: parentBackgroundColor,
  };
  return (
    <div className="progress_bar_parent" style={parentStyle}>
      <div className="progress_bar_child" style={childStyle}>
        {percentage >= TEXT_LIMIT && (
          <span style={childStyle}>
            {percentageText(percentage)}% {text}
          </span>
        )}
      </div>
      {percentage < TEXT_LIMIT && (
        <span style={parentStyle}>
          {percentage}% {text}
        </span>
      )}
    </div>
  );
};
