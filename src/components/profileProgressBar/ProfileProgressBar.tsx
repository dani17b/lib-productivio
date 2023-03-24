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

  if (completed < 0) {
    completed = 0;
  }
  if (completed > 100) {
    completed = 100;
  }

  return (
    <div className="progress-bar" style={{ backgroundColor: bgColor }}>
      <div
        className="progress-bar-completed"
        style={{
          width: `${completed}%`,
          backgroundColor: completedColor,
        }}
      ></div>
    </div>
  );
}
