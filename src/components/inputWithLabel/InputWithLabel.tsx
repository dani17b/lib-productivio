import './inputWithLabel.scss';

export interface InputWithLabelProps {
  label: string;
  height: number;
  width: number;
  name: string;
  textColor?: string;
  fontSize?: number;
  placeHolder?: string;
}

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, height, width, name, textColor, fontSize, placeHolder } = props;

  const labelStyle = {
    color: textColor,
    fontSize: fontSize,
  };

  const textAreaStyle = {
    height,
    width,
  };
  return (
    <>
      <div className="parent">
        <label htmlFor={name} style={labelStyle}>
          {label}
        </label>
        <textarea id={name} name={name} style={textAreaStyle} placeholder={placeHolder}></textarea>
      </div>
    </>
  );
};
