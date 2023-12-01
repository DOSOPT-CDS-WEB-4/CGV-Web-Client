import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { movieInfoTypes } from '../types/movieInfo';
import { paymentMovieInfo } from '../types/paymentMovieInfo';
import { ScheduleType } from '../types/ScheduleType';
import { SelectTimeMovieInfo } from '../types/SelectTimeMovieInfo';

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
  // effects_UNSTABLE: [persistAtom],
});

export const currentRegionData = atom<string>({
  key: 'currentRegionData',
  default: '홍대',
  effects_UNSTABLE: [persistAtom],
});

export const distanceData = atom<number>({
  key: 'distanceData',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const screenTypesData = atom<string[]>({
  key: 'screenTypesData',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const regionNamesData = atom<string[]>({
  key: 'regionNamesData',
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

export const selectTimeMovieInfoState = atom<SelectTimeMovieInfo>({
  key: 'selectTimeMovieInfo',
  default: {
    title: '',
    summary: '',
    opening_date: '',
    genre: '',
    running_time: 0,
    country: '',
    poster: '',
    background: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const movieSchedulesData = atom<ScheduleType[]>({
  key: 'movieSchedules',
  default: [
    {
      schedule_id: 0,
      screen_type: '',
      place: '',
      date: '',
      start_time: '',
      end_time: '',
      total_seats: 0,
      empty_seats: 0,
      reservation_availability: true,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const clickedTypesData = atom<string[]>({
  key: 'clickedTypes',
  default: ['전체'],
});

export const selectedMovieScheduleData = atom<ScheduleType>({
  key: 'selectedMovieScheduleData',
  default: {
    schedule_id: 0,
    screen_type: '',
    place: '',
    date: '',
    start_time: '',
    end_time: '',
    total_seats: 0,
    empty_seats: 0,
    reservation_availability: true,
  },
  effects_UNSTABLE: [persistAtom],
});
