import {useAtom} from 'jotai';
import * as React from 'react';
import {toast} from 'react-toastify';
import {ColumnCenter} from '../../components/general_styled';
import SearchBar from '../../components/SearchBar';
import {toastOptions} from '../../constants/toast';

import Layout from '../../layout';
import Providers from '../../providers';
import {postAtom} from '../../states';
import {HomeCanvas} from './styled';

export default function Home() {
  const [post, setPost] = useAtom(postAtom);

  const initPost = async () => {
    try {
      const result = await Providers.GetAllPost();
      setPost(result);
    } catch (e) {
      toast.error(e, toastOptions);
    }
  };

  React.useEffect(() => {
    initPost();
  }, []);

  return (
    <Layout>
      <ColumnCenter>
        <HomeCanvas>
          <SearchBar placeholder="Search" />
        </HomeCanvas>
      </ColumnCenter>
    </Layout>
  );
}
