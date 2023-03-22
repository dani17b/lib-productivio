// import {useState} from 'react';
import './timeRemaining.scss';
import { TbClockFilled } from 'react-icons/tb';

export interface TimeRemainingProps {
  /**
   * Date of completion
   */
  dueTime: Date;

  /**
   * Display with only one time unit? (8h instead of 8h 20min)
   */
  simpleDisplay?: boolean;
}

const getMsRemaining = (dueTime: Date) => {
  return dueTime.getTime() - new Date().getTime();
};

const getFormattedTimeReamining = (dueTime: Date) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const MS_PER_HOUR = 1000 * 60 * 60;
  const MS_PER_MINUTE = 1000 * 60;

  const totalMilliseconds = getMsRemaining(dueTime);
  const days: number = +Math.floor(totalMilliseconds / MS_PER_DAY);
  const hours: number = +Math.floor(
    (totalMilliseconds - days * MS_PER_DAY) / MS_PER_HOUR
  );
  const minutes: number = +Math.floor(
    (totalMilliseconds - (days * MS_PER_DAY + hours * MS_PER_HOUR)) / MS_PER_MINUTE
  );

  return [
    [days, 'd'],
    [hours, 'h'],
    [minutes, 'min'],
  ];
};

const getTimeText = (props: TimeRemainingProps) => {
  let result = '';

  if (getMsRemaining(props.dueTime) > 0) {
    for (const [value, unitType] of getFormattedTimeReamining(props.dueTime)) {
      if (value > 0) {
        result += `${value}${unitType} `;
        if (props.simpleDisplay) {
          break;
        }
      }
    }

    return result;
  } else {
    return (
      <span style={{ color: 'red', fontWeight: 'bold', fontSize: '0.75em' }}>
        EXPIRADO
      </span>
    );
  }
};

export const TimeRemaining = (props: TimeRemainingProps) => {
  return (
    <div className="time-remaining">
      <TbClockFilled className="time-remaining__icon" size={24}></TbClockFilled>
      {getTimeText(props)}
    </div>
  );
};
