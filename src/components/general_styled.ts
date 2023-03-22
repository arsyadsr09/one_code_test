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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  &.align-start {
    align-items: start;
  }
`;
