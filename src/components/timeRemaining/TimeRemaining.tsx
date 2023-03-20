import React from 'react';
import './timeRemaining.scss';

interface TimeRemainingProps {
  dueTime: Date;
}

export const TimeRemaining = (props: TimeRemainingProps) => {
  return <div>Quedan {(new Date()).toLocaleString('es-ES')}</div>;
};
