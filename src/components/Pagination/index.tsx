import {useAtom} from 'jotai';
import * as React from 'react';
import {postAtom, postCurrentPageAtom} from '../../states';

import {PaginationStyled} from './styled';

export default function Pagination() {
  const [post] = useAtom(postAtom);
  const [postCurrentPage, setPostCurrentPage] = useAtom(postCurrentPageAtom);

  const onPageClicked = (i: number) => {
    setPostCurrentPage(i);
  };

  const onPrevClicked = () => {
    if (postCurrentPage <= 1) return;

    setPostCurrentPage((prev: number) => prev - 1);
  };

  const onNextClicked = () => {
    if (postCurrentPage >= Math.ceil(post.total / 10)) return;
    setPostCurrentPage((prev: number) => prev + 1);
  };

  const renderListOfPage = () =>
    React.useMemo(() => {
      const numbers: React.ReactNode[] = [];
      const totalPageCount: number = Math.ceil(post.total / 10);

      for (let i = 1; i <= totalPageCount; i++) {
        numbers.push(
          <a
            key={'pagination-' + i}
            className={postCurrentPage === i ? 'active' : ''}
            onClick={() => onPageClicked(i)}
          >
            {i}
          </a>
        );
      }

      return numbers;
    }, [postCurrentPage, post]);

  return (
    <PaginationStyled>
      <a
        className={'action prev ' + (postCurrentPage <= 1 ? 'disabled' : '')}
        onClick={() => onPrevClicked()}
      >
        Prev
      </a>
      {renderListOfPage()}
      <a
        className={
          'action next ' +
          (postCurrentPage >= Math.ceil(post.total / 10) ? 'disabled' : '')
        }
        onClick={() => onNextClicked()}
      >
        Next
      </a>
    </PaginationStyled>
  );
}
