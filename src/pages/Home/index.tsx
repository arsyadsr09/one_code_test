import {useAtom} from 'jotai';
import * as React from 'react';
import {toast} from 'react-toastify';
import {ColumnCenter} from '../../components/general_styled';
import SearchBar from '../../components/SearchBar';
import CardPost from '../../components/CardPost';
import {toastOptions} from '../../constants/toast';

import Layout from '../../layout';
import Providers from '../../providers';
import {postAtom, postCurrentPageAtom} from '../../states';
import {PostInterface} from '../../typed/post_typed';
import {HomeCanvas} from './styled';
import Pagination from '../../components/Pagination';

export default function Home() {
  const [post, setPost] = useAtom(postAtom);
  const [postCurrentPage] = useAtom(postCurrentPageAtom);

  const [resultSearch, setResultSearch] = React.useState<PostInterface[]>([]);

  const initPost = async () => {
    try {
      const result = await Providers.GetAllPost();
      setPost(result);
    } catch (e) {
      toast.error(e, toastOptions);
    }
  };

  const onSearch = (event: React.ChangeEvent): void => {
    const target = event.target as any;
    if (target.value.length <= 0) {
      setResultSearch([]);
      return;
    }

    const data = post.data.filter((e: PostInterface) =>
      e.title.toLowerCase().includes(target.value)
    );

    setResultSearch(data);
  };
  const renderCardPost = () =>
    React.useMemo(() => {
      if (resultSearch.length > 0) {
        const data = resultSearch;

        return data.map((e: PostInterface, i: number) => (
          <CardPost key={'card-post-' + i} data={e} onClick={() => {}} />
        ));
      } else {
        const data = post.data;
        const start: number =
          postCurrentPage <= 1 ? 0 : (postCurrentPage - 1) * 10;

        return data
          .slice(start, postCurrentPage * 10)
          .map((e: PostInterface, i: number) => (
            <CardPost key={'card-post-' + i} data={e} onClick={() => {}} />
          ));
      }
    }, [postCurrentPage, post, resultSearch]);

  React.useEffect(() => {
    initPost();
  }, []);

  return (
    <Layout>
      <ColumnCenter>
        <HomeCanvas>
          <SearchBar placeholder="Search Post" onChange={onSearch} />
          <div className="mt-10">{renderCardPost()}</div>
          {resultSearch.length <= 0 && <Pagination />}
        </HomeCanvas>
      </ColumnCenter>
    </Layout>
  );
}
