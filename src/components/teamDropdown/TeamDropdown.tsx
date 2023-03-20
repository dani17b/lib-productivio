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
}

const DEFAULT_BACK_COLOR = '#1a3891'; //Color principal de la app

export const TeamDropdown = (
  state: {
    isExpanded: boolean;
    onClick: any;
  },
  { props }: { props: TeamDropdownProps }
) => {
  const { title, data, bgColor } = props;
  const { isExpanded, onClick } = state;

  return (
    <div>
      <div
        className="dropdown-container"
        onClick={() => onClick()}
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
