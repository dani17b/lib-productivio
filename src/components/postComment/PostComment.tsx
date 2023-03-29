import React from 'react';
import { InputWithLabel } from '../inputWithLabel/InputWithLabel';
import { SendButton } from '../sendButton/SendButton';
import { UserPhoto } from '../userPhoto/UserPhoto';
import './postComment.scss';

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
  inputText?: string;
}

export const PostComment = ({
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
    inputText,
  } = commentProps;

  const handleClick = () => {
  };

  return (
    <>
      <div className="postComment">
        <div className="user-photo">
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
            placeHolder={inputText || 'Añade un comentario...'}
          />
        </div>
        <div className='sendButton'>
          <SendButton onClick={handleClick}/>
        </div>
      </div>
    </>
  );
};
