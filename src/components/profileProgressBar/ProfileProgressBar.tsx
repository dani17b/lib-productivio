import React from 'react';
import './profileProgressBar.scss';

interface ProgressBarProps {
  /**
   * The percentage completed
   */
  completed: number;
  /**
   * The background color of the progress bar
   */
  bgColor: string;
  /**
   * The color of the completed progress bar
   */
  completedColor: string;
}

export function ProfileProgressBar(props: ProgressBarProps) {
  let { completed, bgColor, completedColor } = props;

  const MIN_PERCENTAGE = 0;
  const MAX_PERCENTAGE = 100;

  if (completed < MIN_PERCENTAGE) {
    completed = MIN_PERCENTAGE;
  }
  if (completed > MAX_PERCENTAGE) {
    completed = MAX_PERCENTAGE;
  }

  return (
    <div className="progress-bar" style={{ backgroundColor: bgColor }}>
      <div
        className="progress-bar-completed"
        style={{
          width: `${completed}%`,
          backgroundColor: completedColor,
        }}
      >
        <span className="progress-text"> puntos</span>
      </div>
    </div>
  );
}
