import styled from 'styled-components';
import {HeaderCanvasProps} from './index';

export const HeaderCanvas = styled.div<HeaderCanvasProps>`
  opacity: ${(props: HeaderCanvasProps) => (props.isHide ? '0' : '1')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
  transition: 500ms all ease;
`;

export const TextHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 800;

  .is-blue {
    color: #5b94ed;
  }
`;

export const Menu = styled.div`
  padding: 3px 16px;
  border-bottom: 2px solid #5b94ed;

  font-size: 1rem;
  font-weight: 600;
`;
