import * as React from 'react';

import {InputStyled} from './styled';

export type InputProps = {
  placeholder?: string;
  className?: string;
  name: string;
  type: string;
  onChange?: React.ChangeEventHandler;
};

export default function Input({
  placeholder,
  className,
  onChange,
  name,
  type,
}: InputProps) {
  return (
    <InputStyled
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      name={name}
      type={type}
    />
  );
}
