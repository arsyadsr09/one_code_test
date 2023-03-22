import * as React from 'react';

import SearchIcon from '../../assets/images/search-icon.png';
import {Icon, InputStyled, SearchCanvas} from './styled';

export type SearchBarProps = {
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler;
};

export default function SearchBar({
  placeholder,
  className,
  onChange,
}: SearchBarProps) {
  return (
    <SearchCanvas>
      <InputStyled
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      <Icon src={SearchIcon} />
    </SearchCanvas>
  );
}
