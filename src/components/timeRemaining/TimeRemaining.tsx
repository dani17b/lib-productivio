// import {useState} from 'react';
import './timeRemaining.scss';
import { TbClockFilled } from 'react-icons/tb';

export interface TimeRemainingProps {
  /**
   * Date of completion
   */
  dueTime: Date;
}

export const TimeRemaining = (props: TimeRemainingProps) => {
  const msOnADay = 1000 * 60 * 60 * 24;
  const msOnAnHour = 1000 * 60 * 60;
  
  const msRemaining = props.dueTime.getTime() - new Date().getTime();
  const daysRemaining = Math.floor(msRemaining / msOnADay);
  const hoursRemaining = Math.floor(
    (msRemaining - daysRemaining * msOnADay) / msOnAnHour
  );

  return (
    <div className="time-remaining">
      <TbClockFilled className="time-remaining__icon" size={24}></TbClockFilled>
      {msRemaining > 0 ? (
        `${daysRemaining}d ${hoursRemaining}h`
      ) : (
        <span style={{ color: 'red', fontWeight: 'bold', fontSize: '0.75em' }}>
          EXPIRADO
        </span>
      )}
    </div>
  );
};
