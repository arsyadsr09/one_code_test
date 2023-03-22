import {PostInterface} from './post_typed';

export interface PostAtomType {
  total: number;
  data: Array<PostInterface>;
}
