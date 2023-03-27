import './header.scss';

import React, { useRef, useEffect } from 'react';
import { GrNotification } from 'react-icons/gr';
const MAX_NOTI = 99;
const MIN_NOTI = 1;

interface HeaderProps {
 count: number;
 title: string;
}

export const Header = (props: HeaderProps) => {
  let { count, title } = props;
  const elementoContador = useRef<HTMLSpanElement>(null); 

  useEffect(() => {
    if (elementoContador.current) {
      if (count < MIN_NOTI) {
        elementoContador.current.style.display = 'none';
      } else {
        elementoContador.current.style.display = 'flex';
      }
    }
  }, [count]);

  if (count >= MAX_NOTI) {
    count = MAX_NOTI;
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="notifications">
        <GrNotification />
        <span className="count" ref={elementoContador}>
          {count}
        </span>
      </div>
    </header>
  );
};
