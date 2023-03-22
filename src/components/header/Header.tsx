import './header.scss';

import React from 'react';
import { GrNotification } from 'react-icons/gr';
const maxNoti = 99;

interface HeaderProps {
 count: number;
 title: string;
}

export const Header = (props: HeaderProps) => {
  let { count, title } = props;


  if (count >= maxNoti) {
    count = maxNoti;
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="notifications">
        <GrNotification />
        <span className="count">{count}</span>
      </div>
    </header>
  );
};
