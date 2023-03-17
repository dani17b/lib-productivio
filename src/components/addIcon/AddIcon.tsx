import { IoMdPersonAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';
import 'src/components/addIcon/addIcon.scss';

export interface IconProps {
  /**
   * Function associated to the button
   */
  action?: () => void;
}

export const AddIcon = (props: IconProps) => {
  const { action } = props;

  return (
    <IconContext.Provider
      value={{ color: 'white', size: '20px', className: 'rounded-button' }}
    >
      <div>
        <IoMdPersonAdd onClick={action} />
      </div>
    </IconContext.Provider>
  );
};