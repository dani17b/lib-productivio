import './taskProgressBar.scss';

export interface TaskProgressProps {
  /**
   * Percentage completed of the task
   */
  percentage: number;
  /**
   * Additional info to be displayed
   */
  text?: string;
}

export const TaskProgressBar = (props: TaskProgressProps) => {
  const { percentage, text } = props;
  return (
    <div className="progress_bar_parent">
      <div className="progress_bar_child" style={{ width: percentage + '%' }}>
        {percentage >= 35 && (
          <span>
            {percentage}% {text}
          </span>
        )}
      </div>
      {percentage < 35 && (
        <span>
          {percentage}% {text}
        </span>
      )}
    </div>
  );
};
