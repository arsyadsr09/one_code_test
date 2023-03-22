import axios from 'axios';
import {BASE_API} from '../config';
import {LoginProps} from '../typed/typed';
import {UserInteface} from '../typed/user_typed';

export default class Providers {
  static LoginApi = async (loginData: LoginProps) => {
    if (loginData.username.length <= 0) throw 'Please fill username';
    if (loginData.password.length <= 0) throw 'Please fill password';

    const result = await axios.get(`${BASE_API}/users`);
    const {data} = result;

    const checkIsExist = data.find(
      (e: UserInteface) => e.username.toLowerCase() === loginData.username
    );

    if (checkIsExist && loginData.password === '1234') {
      return checkIsExist;
    } else if (checkIsExist && loginData.password !== '1234') {
      throw 'Wrong password';
    } else {
      throw 'User not found';
    }
  };

  static GetAllPost = async () => {
    const result = await axios.get(`${BASE_API}/users`);
    const {data} = result;

    return {data, total: data.length};
  };
}
