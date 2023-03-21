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
  let { percentage, text, parentBackgroundColor, childBackgroundColor } = props;

  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  const parentStyle = {
    backgroundColor: parentBackgroundColor,
    color: childBackgroundColor,
  };
  const childStyle = {
    width: percentage + '%',
    backgroundColor: childBackgroundColor,
    color: parentBackgroundColor,
  };
  return (
    <div className="progress_bar_parent" style={parentStyle}>
      <div className="progress_bar_child" style={childStyle}>
        {percentage >= TEXT_LIMIT && (
          <span style={childStyle}>
            {percentage}% {text}
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
