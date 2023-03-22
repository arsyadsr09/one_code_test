import styled from 'styled-components';

export const PaginationStyled = styled.div`
  color: black;
  float: right;
  padding: 8px 0;
  margin: 30px 0;

  text-decoration: none;
  transition: background-color 0.3s;

  a {
    cursor: pointer;
    padding: 5px 8px;
    font-size: 12px;
    font-weight: 500;

    border-radius: 4px;

    &.active {
      background-color: dodgerblue;
      color: white;
    }
    &:hover:not(.active) {
      background-color: #ddd;
    }

    &.action {
      padding: 7px 15px;

      &.disabled {
        cursor: not-allowed;
        pointer-events: all !important;
        color: grey;
      }

      &.prev {
        margin-right: 20px;
      }

      &.next {
        margin-left: 20px;
      }
    }
  }
`;
