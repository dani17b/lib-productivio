import React from 'react';
import './profileProgressBar.scss';

const DEFAULT_COLOR = 'black';

interface ProgressBarProps {
  /**
   * The percentage completed
   */
  progress: number;
  /**
   * The background
   */
  bgColor: string;
  /**
   * The color for the progress bar
   */
  progressColor?: string;

  /**
   * The level to show it inside the progress bar
   */
  level?: number;
  /**
   * The poinst to show inside the progress bar
   */

  points?: number;

  /**
   * Text color for the level and points. Default black
   */
  textColor?: string;
}

export function ProfileProgressBar(props: ProgressBarProps) {
  let { progress, bgColor, progressColor, level, points, textColor } = props;

  const MIN_VALUE = 0;
  const MAX_VALUE = 100;

  const checkNegative = (value: number) => {
    return value < MIN_VALUE ? MIN_VALUE : value;
  };

  progress = checkNegative(progress);
  return (
    <div className="progress-bar" style={{ backgroundColor: bgColor }}>
      <div
        className="progress-bar__progress"
        style={{
          width: `${progress > MAX_VALUE ? MAX_VALUE : progress}%`,
          backgroundColor: progressColor,
        }}
      >
        {level && (
          <span
            className="progress-bar__progress__text-level"
            style={{ color: textColor || DEFAULT_COLOR }}
          >
            Nivel {checkNegative(level)}{' '}
            {points && (
              <span className="progress-bar__progress__text-level__points">
                {checkNegative(points)}pts
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
