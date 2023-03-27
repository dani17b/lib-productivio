/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaUserPlus,
  FaPlus,
  FaListUl,
  FaFolderPlus,
  FaRedo,
  FaBan,
} from 'react-icons/fa/index';
import './roundButton.scss';

export enum IconButtonEnum {
  FaUserPlus,
  FaPlus,
  FaListUl,
  FaFolderPlus,
  FaRedo,
}

export interface RoundButtonProps {
  /** 
   *   The icon you can pick from the list:
   * -UserPlus
   * -Plus
   * -ListUl
   * -FolderPlus
   * -Redo
   */
  iconName: string;

  /**
   * What function will be executed when you click the button.
   */
  onClick?: () => void;
  /**
   * The background color of the button.
   */
  bgColor: string;
}

export const RoundButton: React.FC<RoundButtonProps> = (props) => {
  const { iconName, onClick, bgColor } = props;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  let IconComponent = FaBan;
  switch (iconName) {
    case 'AddPerson':
      IconComponent = FaUserPlus;
      break;
    case 'Plus':
      IconComponent = FaPlus;
      break;
    case 'ListUl':
      IconComponent = FaListUl;
      break;
    case 'FolderPlus':
      IconComponent = FaFolderPlus;
      break;
    case 'Redo':
      IconComponent = FaRedo;
      break;
  }
  return (
    <div className='rounded-button' style={{ backgroundColor: bgColor }}>
      <IconComponent color="white" size={35} onClick={handleClick}/>
    </div>
  );
};
