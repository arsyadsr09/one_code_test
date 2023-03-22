import styled from 'styled-components';
import {ButtonProps} from './index';

export const ButtonStyled = styled.button<ButtonProps>`
  padding: ${(props: ButtonProps) =>
    props.size === 'sm' ? '0.5rem 2rem' : '.7rem 2rem'};
  background-color: #5b94ed;
  border-radius: 20px;
  border: none;

  min-width: ${(props: ButtonProps) => (props.size === 'sm' ? '0' : '100%')};

  font-size: 14px;
  font-weight: 600;
  color: white;
`;
