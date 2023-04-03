import React from 'react';
import './profileProgressBar.scss';

const DEFAULT_COLOR = 'black';
const SUFIX = ['', 'K', 'M', 'G'];
const THOUSAND = 1000;
const MIN_VALUE = 0;
const MAX_VALUE = 100;

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

function convertNumber(value: number) {
  let i = MIN_VALUE;
  const length = SUFIX.length - 1;
  while (value >= THOUSAND && i < length) {
    value /= THOUSAND;
    i++;
  }
  return value.toFixed(1) + SUFIX[i];
}

export function ProfileProgressBar(props: ProgressBarProps) {
  let { progress, bgColor, progressColor, level, points, textColor } = props;
  if (progress < MIN_VALUE) {
    progress = MIN_VALUE;
  } else if (progress > MAX_VALUE) {
    progress = MAX_VALUE;
  }

  return (
    <div className="progress-bar" style={{ backgroundColor: bgColor }}>
      <div
        className="progress-bar__progress"
        style={{
          width: `${progress}%`,
          backgroundColor: progressColor,
        }}
      >
        {level !== undefined && level !== MIN_VALUE && (
          <span
            className="progress-bar__progress__text-level"
            style={{ color: textColor || DEFAULT_COLOR }}
          >
            Nivel {level}{' '}
            {points !== undefined && points >= MIN_VALUE && (
              <span className="progress-bar__progress__text-level__points">
                {convertNumber(points)}pts
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
