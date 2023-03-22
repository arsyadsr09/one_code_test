import styled from 'styled-components';

export const CardStyled = styled.button`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;

  .username {
    flex: 1;
    margin-right: 20px;
  }

  .content {
    flex: 4;
  }
`;

export const ChatSection = styled.div`
  display: flex;
  flex-direction: row;

  .chat-icon {
    width: 20px;
    height: 18px;
  }

  .total-chat {
    padding-left: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #5b94ed;
  }
`;

export const DetailButton = styled.div`
  margin-left: 15px;
  padding: 3px 15px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  color: #5b94ed;
  transition: 500ms all ease;

  &:hover {
    background: #5b94edb3;
    color: #fff;
    transition: 500ms all ease;
  }
`;
