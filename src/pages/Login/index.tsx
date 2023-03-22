import * as React from 'react';
import {useAtom} from 'jotai';

import Layout from '../../layout';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {ColumnCenter} from '../../components/general_styled';
import ManCodeReviewImg from '../../assets/images/man-code-review.png';
import {HeaderText, LandingImg, LoginForm} from './styled';
import {isLoginFormActiveAtom, userDataAtom} from '../../states';
import Providers from '../../providers/index';
import {toast} from 'react-toastify';
import {toastOptions} from '../../constants/toast';

export default function Login() {
  const [isLoginFormActive, setLoginFormActive] = useAtom(
    isLoginFormActiveAtom
  );
  const [_, setUserData] = useAtom(userDataAtom);
  const [form, setForm] = React.useState({username: '', password: ''});

  const onButtonClicked = async () => {
    try {
      const result = await Providers.LoginApi(form);

      //@ts-ignore
      localStorage.setItem('USER_DATA', JSON.stringify(result));
      setUserData(result);
      setLoginFormActive(false);

      toast.success('Login successful', toastOptions);
    } catch (e) {
      toast.error(e, toastOptions);
    }
  };

  const onInputChanged = (event: React.ChangeEvent): void => {
    const target = event.target as any;

    setForm({...form, [target.name]: target.value});
  };

  const renderLoginForm = () => (
    <ColumnCenter className="h-100">
      <LoginForm>
        <HeaderText className="text-center mb-10 font-semibold">
          Login Page
        </HeaderText>
        <Input
          name="username"
          type="text"
          placeholder="Username"
          onChange={onInputChanged}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onInputChanged}
        />

        <Button
          text="Login"
          className="mt-5"
          size={'lg'}
          onClick={onButtonClicked}
        />
      </LoginForm>
    </ColumnCenter>
  );

  const renderContent = () => {
    if (isLoginFormActive) return renderLoginForm();
    else return <LandingImg src={ManCodeReviewImg} />;
  };

  return <Layout>{renderContent()}</Layout>;
}
