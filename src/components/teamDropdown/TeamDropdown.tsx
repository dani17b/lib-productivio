import './teamDropdown.scss';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { UserInfo, UserInfoProps } from '../userInfo/UserInfo';

export interface TeamDropdownProps {
  /**
   * Dropdown Menu render title
   */
  title: string;
  /**
   * Components to render on dropdown clicked
   */
  userInfoProps: UserInfoProps[];
  /**
   * Color to the dropdown menu
   */
  bgColor?: string;
}

const DEFAULT_COLOR = '#1a3891';

export const TeamDropdown = (props: TeamDropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { title, userInfoProps, bgColor } = props;

  return (
    <div>
      <div
        className="dropdown-container"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ backgroundColor: bgColor || DEFAULT_COLOR }}
      >
        <div className="dropdown-container__title">{title}</div>
        <span className="dropdown-container__arrow">
          {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {isExpanded && (
        <div className="dropdown-container__data">
          <>
            {userInfoProps.map((userInfoProp) => (
              <UserInfo
                user={userInfoProp.user}
                backgroundColor={userInfoProp.backgroundColor}
                textColor={userInfoProp.textColor}
              />
            ))}
            {console.log(userInfoProps)}
          </>
        </div>
      )}
    </div>
  );
};
