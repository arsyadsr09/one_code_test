import {useAtom} from 'jotai';
import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {userDataAtom} from '../states';

import Header from './Header';
import {Body, Container} from './styled';

type Props = {
  children?: React.ReactNode;
};

export default function Layout({children}: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData] = useAtom(userDataAtom);

  React.useEffect(() => {
    if (location.pathname === '/' && userData) {
      navigate('/home');
    }
  }, [userData]);

  return (
    <Body>
      <Container>
        <Header />
        {children}
      </Container>
    </Body>
  );
}
