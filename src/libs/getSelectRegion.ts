import { SetterOrUpdater } from 'recoil';

import { apiResponse } from '../types/axios';
import { ScheduleType } from '../types/ScheduleType';
import { SelectTimeMovieInfo } from '../types/SelectTimeMovieInfo';
import { SelectTimeResponse } from '../types/SelectTimeResponse';
import { api } from './axios';

export const getSelectRegion = async (
  movie_id: number,
  regionName: string,
  screenTypes: string[],
  setRegionNames: SetterOrUpdater<string[]>,
  setCurRegion: SetterOrUpdater<string>,
  setHowFar: SetterOrUpdater<number>,
  setMovieSchedule: SetterOrUpdater<ScheduleType[]>,
  setSelectTimeMovieInfo: SetterOrUpdater<SelectTimeMovieInfo>,
) => {
  let newURL: string = `region=${regionName}`;
  if (regionName !== '' && screenTypes.length !== 0) {
    screenTypes.forEach(type => {
      newURL += `&type=${type}`;
    });
  }
  try {
    console.log(movie_id);
    const response = await api.get<apiResponse<SelectTimeResponse>>(
      `/reservation/${movie_id}?${newURL}`,
    );
    const { data } = response.data;
    console.log(data);

    const { movie_info, current_region, distance, movie_screen_schedules, region_names } = data;

    setRegionNames(region_names);
    setCurRegion(current_region);
    setHowFar(distance);
    setMovieSchedule(movie_screen_schedules);
    setSelectTimeMovieInfo(movie_info);
  } catch (err) {
    console.log(err);
  }
};
