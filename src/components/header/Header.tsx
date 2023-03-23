import './header.scss';

import React, { useRef, useEffect } from 'react';
import { GrNotification } from 'react-icons/gr';
const maxNoti = 99;
const minNoti = 1;

interface HeaderProps {
 count: number;
 title: string;
}

export const Header = (props: HeaderProps) => {
  let { count, title } = props;
  const elementoContador = useRef<HTMLSpanElement>(null); 

  useEffect(() => {
    if (elementoContador.current) {
      if (count < minNoti) {
        elementoContador.current.style.display = 'none';
      } else {
        elementoContador.current.style.display = 'flex';
      }
    }
  }, [count]);

  if (count >= maxNoti) {
    count = maxNoti;
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
