import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { movieInfoTypes } from '../types/movieInfo';

const { persistAtom } = recoilPersist();

export const movieInfoState = atom<movieInfoTypes>({
  key: 'movieInfoState',
  default: {
    movie_id: 0,
    title: '',
    poster_url: '',
    ranking: '',
    total_audience: '',
    like_count: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
