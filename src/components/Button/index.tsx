import * as React from 'react';

import {ButtonStyled} from './styled';

export type ButtonProps = {
  text?: string;
  className?: string;
  size: 'sm' | 'lg';
  onClick: any;
};

export default function Button({
  text,
  className,
  size = 'sm',
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled className={className} size={size} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
}
