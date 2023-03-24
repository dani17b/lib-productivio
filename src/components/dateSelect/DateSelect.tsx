import React, { useState } from 'react';


export const DateSelect = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date('2019-08-24T22:12:54')
  );

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div></div>
  ); 
}
