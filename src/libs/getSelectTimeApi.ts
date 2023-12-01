import { SetterOrUpdater } from 'recoil';

import { apiResponse } from '../types/axios';
import { ScheduleType } from '../types/ScheduleType';
import { SelectTimeMovieInfo } from '../types/SelectTimeMovieInfo';
import { SelectTimeResponse } from '../types/SelectTimeResponse';
import { api } from './axios';

export const getSelectTimeAPI = async (
  regionName: string,
  screenTypes: string[],
  setRegionNames: SetterOrUpdater<string[]>,
  setScreenTypes: SetterOrUpdater<string[]>,
  setCurRegion: SetterOrUpdater<string>,
  setHowFar: SetterOrUpdater<number>,
  setMovieInfo: SetterOrUpdater<SelectTimeMovieInfo>,
  setMovieSchedule: SetterOrUpdater<ScheduleType[]>,
) => {
  let newURL: string = `region=${regionName}`;
  if (regionName !== '' && screenTypes.length !== 0) {
    screenTypes.forEach(type => {
      newURL += `&type=${type}`;
    });
  }
  try {
    const response = await api.get<apiResponse<SelectTimeResponse>>(`/reservation/1?${newURL}`);
    const { data } = response.data;

    const {
      current_region,
      distance,
      movie_info,
      movie_screen_schedules,
      region_names,
      screen_types,
    } = data;

    setRegionNames(region_names);
    setScreenTypes(screen_types);
    setCurRegion(current_region);
    setHowFar(distance);
    setMovieSchedule(movie_screen_schedules);
    setMovieInfo(movie_info);
  } catch (err) {
    console.log(err);
  }
};
