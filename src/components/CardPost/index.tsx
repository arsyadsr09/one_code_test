import * as React from 'react';
import Providers from '../../providers';
import {CommentPostInterface, PostInterface} from '../../typed/post_typed';
import {UserInteface} from '../../typed/user_typed';
import {Column, Row} from '../general_styled';
import ChatIcon from '../../assets/images/chat-icon.png';

import {CardStyled, ChatSection, DetailButton} from './styled';
import {useNavigate} from 'react-router-dom';

export type CardPostProps = {
  data: PostInterface;
  className?: string;
  onClick: any;
};

export default function CardPost({data, className, onClick}: CardPostProps) {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>('');
  const [comments, setComments] = React.useState<CommentPostInterface[]>([]);

  const initDetail = async () => {
    try {
      const result: UserInteface = await Providers.GetDetailUserById(
        data.userId
      );
      const resultComment: CommentPostInterface[] =
        await Providers.GetCommentByPostId(data.id);

      setUsername(result.username);
      setComments(resultComment);
    } catch (e) {
      console.error(e);
    }
  };

  const onDetailClick = () => {
    navigate(`/post/${data.id}`);
  };

  React.useEffect(() => {
    if (data) {
      initDetail();
    }
  }, [data]);

  return (
    <CardStyled className={className} onClick={onClick}>
      <h1 className="font-semibold text-left username">
        {username.length > 10 ? username.substring(0, 9) + '...' : username}
      </h1>
      <Column className="content">
        <h2 className="text-gray-500 text-left">{data.title}</h2>
        <Row className="mt-2">
          <ChatSection>
            <img src={ChatIcon} alt="chat-icon" className="chat-icon" />
            <span className="total-chat">{comments.length}</span>
          </ChatSection>
          <DetailButton onClick={() => onDetailClick()}>Detail</DetailButton>
        </Row>
      </Column>
    </CardStyled>
  );
}
