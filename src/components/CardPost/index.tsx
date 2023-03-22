import * as React from 'react';

import {ButtonStyled} from './styled';

export type CardPostProps = {
  user: string;
  title: string;
  className?: string;
  onClick: any;
};

export default function CardPost({
  user,
  className,
  title,
  onClick,
}: CardPostProps) {
  return (
    <ButtonStyled className={className}  onClick={onClick}>
      {text}
    </ButtonStyled>
  );
}
