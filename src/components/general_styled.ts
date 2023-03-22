import styled from 'styled-components';

export const ColumnCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.h-100 {
    height: calc(100vh - 92px);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
