import './navBar.scss';
import { IconType } from 'react-icons/lib/esm/iconBase';
import { FaHome, FaUserFriends, FaUserAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdPodium } from 'react-icons/io';

interface NavBarProps {
  parentBackgroundColor?: string;
  childBackgroundColor?: string;
  icons: IconType[];
}

export const icons: IconType[] = [ FaHome, FaUserFriends, IoMdAdd, IoMdPodium, FaUserAlt ];


export const NavBar = ({ parentBackgroundColor, childBackgroundColor, icons }: NavBarProps) => {

  const parentStyle = {
    backgroundColor: childBackgroundColor,
    color: parentBackgroundColor,  
  };

  const childStyle = {
    backgroundColor: parentBackgroundColor,
    color: childBackgroundColor,  
  };
  

  return (
    <div className='nav-menu' style={parentStyle}>
      <nav className='nav-containers' style={childStyle}>
        {icons.map((Icon, index) => (
          <div key={index} className='nav-button'>
            <Icon />
          </div>
        ))}
      </nav>
    </div>
  );
};