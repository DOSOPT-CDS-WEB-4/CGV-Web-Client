import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { movieInfoTypes } from '../types/movieInfo';
import { paymentMovieInfo } from '../types/paymentMovieInfo';

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

export const screenTypes = atom<string[]>({
  key: 'screenTypes',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const paymentMovieInfoState = atom<paymentMovieInfo>({
  key: 'paymentMovieInfo',
  default: {
    title: '',
    date: '',
    dayOfWeek: '',
    startTime: '',
    endTime: '',
    region: '',
    place: '',
  },
  effects_UNSTABLE: [persistAtom],
});
