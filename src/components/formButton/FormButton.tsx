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
}

export const FormButton = (props: FormButtonProps) => {
  const { buttonText, fontSize } = props;
  const buttonFontSize = `${fontSize}pt`;

  return (
    <button
      className="formButton"
      style={{ fontSize: buttonFontSize }} /* onClick={TODO lógica} */
    >
      {buttonText}
    </button>
  );
};
