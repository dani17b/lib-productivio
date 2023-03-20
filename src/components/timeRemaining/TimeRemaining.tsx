// import {useState} from 'react';
import './timeRemaining.scss';
import { TbClockFilled } from 'react-icons/tb';

export interface TimeRemainingProps {
  /**
   * Date of completion
   */
  dueTime: Date;
}

// const [timeLeft, setTimeLeft] = useState(0);

export const TimeRemaining = (props: TimeRemainingProps) => {
  const msRemaining = props.dueTime.getTime() - new Date().getTime();
  const daysRemaining = Math.floor(msRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (msRemaining - daysRemaining * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return (
    <div className='time-remaining'>
      <TbClockFilled className='time-remaining__icon' size={24}></TbClockFilled>
      {msRemaining > 0 ? `${daysRemaining}d ${hoursRemaining}h` : 'Expirado'}
    </div>
  );
};

TimeRemaining.defaultProps = {
  dueTime: new Date('2023-06-27'),
};
