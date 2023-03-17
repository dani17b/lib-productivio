import './header.scss';

import React from 'react';
import { GrNotification } from 'react-icons/gr';
const maxNoti = 99;

interface HeaderProps {
 count: number;
}

export const Header = (props: HeaderProps) => {
  let { count } = props;

  if (count >= maxNoti) {
    count = maxNoti;
  }

  return (
    <header className="header">
      <h1>Productivio</h1>
      <div className="notifications">
        <GrNotification />
        <span className="count">{count}</span>
      </div>
    </header>
  );
};
