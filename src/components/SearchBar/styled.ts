import styled from 'styled-components';

export const SearchCanvas = styled.div`
  width: 100%;
  margin-bottom: 15px;

  border-radius: 20px;
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 0.65rem;
  width: 20px;
  height: 20px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px 15px;
  background: #d9d9d9;

  border-radius: 20px;
  text-align: center;
  border: 1px solid transparent;

  &:focus-visible {
    border: 1px solid #a3b7e2 !important;
    outline: none;
  }
`;
