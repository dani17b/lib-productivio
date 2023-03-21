import './teamDropdown.scss';
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
  /**
   * State of the dropdown menu
   */
  isExpanded: boolean

  onClick(): void
}

const DEFAULT_BACK_COLOR = '#1a3891'; //Color principal de la app

export const TeamDropdown = (
  props : TeamDropdownProps 
) => {
  const { title, data, bgColor, isExpanded, onClick } = props;

  return (
    <div>
      <div
        className="dropdown"
        style={{
          backgroundColor: bgColor || DEFAULT_BACK_COLOR,
        }}
        onClick={onClick}
      >
        <div className="dropdown__title">{title}</div>
        <span className="dropdown__arrow">
          {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {isExpanded && (
        <div className="dropdown__data">
          {data.map((profileData, index) => (
            <div key={index} className="dropdown__data__profile">
              <UserDetails user={profileData} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
