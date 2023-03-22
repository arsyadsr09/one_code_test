import {useAtom} from 'jotai';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import DropdownHeader from '../../components/DropdownHeader';
import {Row} from '../../components/general_styled';
import {userDataAtom, isLoginFormActiveAtom} from '../../states';
import {HeaderCanvas, TextHeader, Menu} from './styled';

export type HeaderCanvasProps = {
  isHide?: boolean;
};

export default function Header() {
  const navigate = useNavigate();
  const [userData] = useAtom(userDataAtom);
  const [isLoginFormActive, setIsLoginFormActive] = useAtom(
    isLoginFormActiveAtom
  );

  const onButtonClicked = () => {
    setIsLoginFormActive(!isLoginFormActive);
  };

  const onLogoClicked = () => {
    navigate('/home');
  };

  const renderLoginAction = () => {
    if (userData) {
      return (
        <DropdownHeader>
          <Row>
            <TextHeader className="disabled-highlight">
              Welcome,{' '}
              <span className="is-blue pointer">{userData.username}</span>
            </TextHeader>
          </Row>
        </DropdownHeader>
      );
    } else {
      return <Button text="Login" size={'sm'} onClick={onButtonClicked} />;
    }
  };

  const renderMenu = () => <Menu className="pointer">Post</Menu>;

  return (
    <HeaderCanvas isHide={isLoginFormActive}>
      <TextHeader
        className="is-logo disabled-highlight pointer"
        onClick={() => onLogoClicked()}
      >
        Cinta Coding
      </TextHeader>
      {userData && renderMenu()}
      {renderLoginAction()}
    </HeaderCanvas>
  );
}
