import {useAtom} from 'jotai';
import * as React from 'react';
import Button from '../../components/Button';
import {Row} from '../../components/general_styled';
import {userDataAtom, isLoginFormActiveAtom} from '../../states';
import {HeaderCanvas, TextHeader, Menu} from './styled';

export type HeaderCanvasProps = {
  isHide?: boolean;
};

export default function Header() {
  const [userData] = useAtom(userDataAtom);
  const [isLoginFormActive, setIsLoginFormActive] = useAtom(
    isLoginFormActiveAtom
  );

  const onButtonClicked = () => {
    setIsLoginFormActive(!isLoginFormActive);
  };

  const renderLoginAction = () => {
    if (userData) {
      return (
        <Row>
          <TextHeader>
            Welcome,{' '}
            <span className="is-blue pointer">{userData.username}</span>
          </TextHeader>
        </Row>
      );
    } else {
      return <Button text="Login" size={'sm'} onClick={onButtonClicked} />;
    }
  };

  const renderMenu = () => <Menu className="pointer">Post</Menu>;

  return (
    <HeaderCanvas isHide={isLoginFormActive}>
      <TextHeader className="is-logo">Cinta Coding</TextHeader>
      {userData && renderMenu()}
      {renderLoginAction()}
    </HeaderCanvas>
  );
}
