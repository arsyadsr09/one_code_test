import styled from 'styled-components';

export const ProfileCanvas = styled.div`
  width: 60%;
`;

export const BackImg = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const ContentProfile = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    flex: 1;
  }
  .colon {
    flex: 0.5;
  }
  .value {
    flex: 3;
  }
`;
