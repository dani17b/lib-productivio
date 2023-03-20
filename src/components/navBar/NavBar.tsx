import './navBar.scss';
import { FaHome, FaUserFriends, FaUserAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdPodium } from 'react-icons/io';


interface NavBarProps {
    parentBackgroundColor?: string;
    childBackgroundColor?: string;
}
export const NavBar = (props: NavBarProps) => {
  let {parentBackgroundColor, childBackgroundColor } = props;
  

  
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
        <div className='nav-button'><FaHome/></div>
        <div className='nav-button'><FaUserFriends/></div>
        <div className='nav-button'><IoMdAdd/></div>
        <div className='nav-button'><IoMdPodium/></div>
        <div className='nav-button'><FaUserAlt/></div>
      </nav>
    </div>
  );
};
