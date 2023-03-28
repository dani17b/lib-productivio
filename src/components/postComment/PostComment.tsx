import React from 'react';
import { InputWithLabel } from '../inputWithLabel/InputWithLabel';
import { UserPhoto } from '../userPhoto/UserPhoto';

export interface CommentProps {
  label: string;
  height?: number;
  width?: number;
  name: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: number;
  imageSrc: string;
  photoBorderColor?: string;
}

export const postComment = ({
  commentProps,
}: {
  commentProps: CommentProps;
}) => {
  const {
    label,
    height,
    width,
    name,
    textColor,
    borderColor,
    fontSize,
    imageSrc,
    photoBorderColor,
  } = commentProps;

  return (
    <>
      <div>
        <UserPhoto imageSrc={imageSrc} borderColor={photoBorderColor || ''} />
      </div>
      <div className="input">
        <InputWithLabel
          label={label}
          height={height || 0}
          width={width || 0}
          name={name}
          textColor={textColor}
          borderColor={borderColor}
          fontSize={fontSize || 0}
        />
      </div>
    </>
  );
};
