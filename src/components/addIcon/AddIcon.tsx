import { IoMdPersonAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';
import './addIcon.scss';

export interface IconProps {
  /**
   * Function associated to the button
   */
  onClick?: () => void;
}

export const AddIcon = (props: IconProps) => {
  const { onClick } = props;

  return (
    <IconContext.Provider
      value={{ color: 'white', size: '20px', className: 'rounded-button' }}
    >
      <div>
        <IoMdPersonAdd onClick={onClick} />
      </div>
    </IconContext.Provider>
  );
};