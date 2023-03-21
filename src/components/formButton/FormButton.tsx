import './formButton.scss';

interface FormButtonProps {
  /**
   * Text contained in the button (e.g: Save, Delete, Cancel...)
   */
  buttonText: string;
  /**
   * This prop allows font size changes
   */
  fontSize?: number;
  /**
   * This prop allows you to change the button's color
   */
  buttonColor?: string;
}

export const FormButton = (props: FormButtonProps) => {
  const { buttonText, fontSize, buttonColor } = props;
  const buttonFontSize = `${fontSize}pt`;

  return (
    <button
      className="formButton"
      style={{
        fontSize: buttonFontSize,
        backgroundColor: buttonColor,
      }} /* onClick={TODO lógica} */
    >
      {buttonText}
    </button>
  );
};
