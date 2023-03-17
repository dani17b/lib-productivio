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
}

export const TaskProgressBar = (props: TaskProgressProps) => {
  const TEXT_LIMIT = 35;
  let { percentage, text } = props;

  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  return (
    <div className="progress_bar_parent">
      <div className="progress_bar_child" style={{ width: percentage + '%' }}>
        {percentage >= TEXT_LIMIT && (
          <span>
            {percentage}% {text}
          </span>
        )}
      </div>
      {percentage < TEXT_LIMIT && (
        <span>
          {percentage}% {text}
        </span>
      )}
    </div>
  );
};
