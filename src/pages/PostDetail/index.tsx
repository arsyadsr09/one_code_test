import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Providers from '../../providers';
import {CommentPostInterface, PostInterface} from '../../typed/post_typed';
import BackIcon from '../../assets/images/back-icon.png';
import ChatIcon from '../../assets/images/chat-icon.png';

import {
  CanvasPostDetail,
  BackImg,
  ContentPost,
  ChatSection,
  CommentList,
} from './styled';
import {Column, ColumnCenter, Row} from '../../components/general_styled';
import Layout from '../../layout';
import {UserInteface} from '../../typed/user_typed';

export default function PostDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [isShowComments, setIsShowComments] = React.useState<boolean>(false);
  const [detailPost, setDetailPost] = React.useState<PostInterface>();
  const [username, setUsername] = React.useState<string>('');
  const [comments, setComments] = React.useState<CommentPostInterface[]>([]);

  const initDetail = async () => {
    try {
      const resultDetail: PostInterface = await Providers.GetDetailPostById(
        parseInt(id!)
      );
      const resultUsername: UserInteface = await Providers.GetDetailUserById(
        resultDetail.userId
      );
      const resultComment: CommentPostInterface[] =
        await Providers.GetCommentByPostId(parseInt(id!));

      setDetailPost(resultDetail);
      setComments(resultComment);
      setUsername(resultUsername.username);
    } catch (e) {
      console.error(e);
    }
  };

  const onShowComments = () => {
    setIsShowComments(!isShowComments);
  };

  const onBackNavigate = () => {
    navigate('/home');
  };

  const renderShowComments = () => {
    if (isShowComments) {
      return (
        <Column className="mt-6 ml-20">
          <h1
            className="font-bold text-gray-500 pointer"
            onClick={() => onShowComments()}
          >
            All Comments
          </h1>
          {comments.map((e: CommentPostInterface) => (
            <Row>
              <CommentList>
                <h1 className="name font-semibold text-left username">
                  {e.email.length > 10
                    ? e.email.substring(0, 9) + '...'
                    : e.email}
                </h1>
                <span className="content ml-7 text-gray-400">{e.name}</span>
              </CommentList>
            </Row>
          ))}
        </Column>
      );
    } else {
      return (
        <ChatSection className="ml-20" onClick={() => onShowComments()}>
          <img src={ChatIcon} alt="chat-icon" className="chat-icon" />
          <span className="total-chat">{comments.length}</span>
        </ChatSection>
      );
    }
  };

  React.useEffect(() => {
    if (id) {
      initDetail();
    }
  }, [id]);

  return (
    <Layout>
      <ColumnCenter>
        <CanvasPostDetail>
          <Column>
            <BackImg
              src={BackIcon}
              alt="back"
              onClick={() => onBackNavigate()}
            />
            <ContentPost>
              <Row>
                <h1 className="font-semibold text-left username">
                  {username.length > 10
                    ? username.substring(0, 9) + '...'
                    : username}
                </h1>
                <Column className="ml-11">
                  <h2 className="text-gray-500 font-medium text-left">
                    {detailPost?.title}
                  </h2>
                  <p className="mt-6 text-gray-400">{detailPost?.body}</p>
                </Column>
              </Row>
              {renderShowComments()}
            </ContentPost>
          </Column>
        </CanvasPostDetail>
      </ColumnCenter>
    </Layout>
  );
}
