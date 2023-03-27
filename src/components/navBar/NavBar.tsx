import './navBar.scss';
import { IconType } from 'react-icons/lib/esm/iconBase';
import { FaHome, FaUserFriends, FaUserAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdPodium } from 'react-icons/io';
import React from 'react';


interface NavBarProps {
  parentBackgroundColor?: string;
  childBackgroundColor?: string;
  icons: IconType[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const icons: IconType[] = [
  FaHome,
  FaUserFriends,
  IoMdAdd,
  IoMdPodium,
  FaUserAlt,
];

export const NavBar = ({
  parentBackgroundColor,
  childBackgroundColor,
  icons,
  onClick,
}: NavBarProps) => {
  
  const parentStyle = {
    backgroundColor: childBackgroundColor,
    color: parentBackgroundColor,
  };

  const childStyle = {
    backgroundColor: parentBackgroundColor,
    color: childBackgroundColor,
  };

  return (
    <div className="nav-menu" style={parentStyle}>
      <nav className="nav-containers" style={childStyle}>
        {icons.map((Icon, index) => (
          <div key={index} className="nav-button" onClick={onClick}>
            <Icon />
          </div>
        ))}
      </nav>
    </div>
  );
};
