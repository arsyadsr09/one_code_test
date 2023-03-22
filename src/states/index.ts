import {atom, PrimitiveAtom} from 'jotai';
import {UserInteface} from '../typed/user_typed';

export const userDataAtom: PrimitiveAtom<UserInteface> = atom(
  //@ts-ignore
  localStorage.getItem('USER_DATA') !== undefined
    ? //@ts-ignore
      JSON.parse(localStorage.getItem('USER_DATA'))
    : null
);
export const isLoginFormActiveAtom: PrimitiveAtom<boolean> = atom(false);
export const postAtom = atom({
  total: 0,
  data: [],
});
export const postPagination: PrimitiveAtom<number> = atom(1);
