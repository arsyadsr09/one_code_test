import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;

  border-radius: 20px;
  text-align: center;
  border: 1px solid #bbd3f7;

  &:focus-visible {
    border: 1px solid #a3b7e2 !important;
    outline: none;
  }
`;
