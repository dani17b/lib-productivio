import React from 'react';
import { InputWithLabel } from '../inputWithLabel/InputWithLabel';
import { SendButton } from '../sendButton/SendButton';
import { UserPhoto } from '../userPhoto/UserPhoto';
import './postComment.scss';

const DEFAULT_BORDER_COLOR = 'red';
const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 50;
const DEFAULT_FONT_SIZE = 16;

export interface CommentProps {
  label?: string;
  height?: number;
  width?: number;
  name: string;
  textColor?: string;
  borderColor?: string;
  fontSize?: number;
  imageSrc: string;
  photoBorderColor?: string;
  inputText?: string;
  onClick?: () => void;
}

export const PostComment = ({
  commentProps,
  onClick,
}: {
  commentProps: CommentProps;
  onClick: () => void;
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

  return (
    <>
      <div className="postComment">
        <div className="user-photo">
          <UserPhoto
            imageSrc={imageSrc}
            borderColor={photoBorderColor || DEFAULT_BORDER_COLOR}
          />
        </div>
        <div className="input">
          <InputWithLabel
            label={label || ''}
            height={height || DEFAULT_HEIGHT}
            width={width || DEFAULT_WIDTH}
            name={name}
            textColor={textColor}
            borderColor={borderColor}
            fontSize={fontSize || DEFAULT_FONT_SIZE}
            placeHolder={inputText || 'Añade un comentario...'}
          />
        </div>
        <div className="sendButton">
          <SendButton onClick={onClick} />
        </div>
      </div>
    </>
  );
};