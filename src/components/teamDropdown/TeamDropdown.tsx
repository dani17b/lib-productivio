import './teamDropdown.scss';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { UserDetails, UserDetailsProps } from '../userDetails/UserDetails';

export interface TeamDropdownProps {
  /**
   * Dropdown Menu render title
   */
  title: string;
  /**
   * Components to render on dropdown clicked
   */
  data: UserDetailsProps[];
  /**
   * Color to the dropdown menu
   */
  bgColor?: string;
}

const DEFAULT_BACK_COLOR = '#1a3891'; //Color principal de la app

export const TeamDropdown = (props: TeamDropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { title, data, bgColor } = props;

  return (
    <div>
      <div
        className="dropdown-container"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: bgColor || DEFAULT_BACK_COLOR,
        }}
      >
        <div className="dropdown-container__title">{title}</div>
        <span className="dropdown-container__arrow">
          {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {isExpanded && (
        <div className="dropdown-container__data">
          {data.map((profileData, index) => (
            <div key={index} className="dropdown-container__data__profile">
              <UserDetails user={profileData} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
