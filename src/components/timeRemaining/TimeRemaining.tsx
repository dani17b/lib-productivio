import React from 'react';
import './timeRemaining.scss';

export interface TimeRemainingProps {
    /**
   * Date of completion
   */
  dueTime: Date;
}

export const TimeRemaining = (props: TimeRemainingProps) => {
  return <div>Quedan {(new Date()).toLocaleString('es-ES')}</div>;
};
