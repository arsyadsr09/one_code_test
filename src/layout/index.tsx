import {useAtom} from 'jotai';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {userDataAtom} from '../states';

import Header from './Header';
import {Body, Container} from './styled';

type Props = {
  children?: React.ReactNode;
};

export default function Layout({children}: Props) {
  const navigate = useNavigate();
  const [userData] = useAtom(userDataAtom);

  React.useEffect(() => {
    console.log(userData);
    if (userData) {
      navigate('/home');
    } else {
      navigate('/');
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
