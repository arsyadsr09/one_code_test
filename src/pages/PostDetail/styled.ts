import styled from 'styled-components';

export const CanvasPostDetail = styled.div`
  width: 60%;
`;

export const BackImg = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const ContentPost = styled.div`
  margin-top: 20px;
`;

export const ChatSection = styled.div`
  cursor: pointer;
  margin-top: 20px;
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

export const CommentList = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;

  .name {
    flex: 1;
  }

  .content {
    flex: 3;
  }
`;
