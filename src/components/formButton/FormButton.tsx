import './formButton.scss';

interface FormButtonProps {
  /**
   * Text contained in the button (e.g: Save, Delete, Cancel...)
   */
  buttonText: string;
}

export const FormButton = (props: FormButtonProps) => {
  const { buttonText } = props;

  return (
    <button className="formButton" /* onClick={TODO lógica} */>
      {buttonText}
    </button>
  );
};
