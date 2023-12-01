import { SetterOrUpdater } from 'recoil';

import { apiResponse } from '../types/axios';
import { ScheduleType } from '../types/ScheduleType';
import { SelectTimeResponse } from '../types/SelectTimeResponse';
import { api } from './axios';

export const getSelectRegion = async (
  regionName: string,
  screenTypes: string[],
  setRegionNames: SetterOrUpdater<string[]>,
  setCurRegion: SetterOrUpdater<string>,
  setHowFar: SetterOrUpdater<number>,
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

    const { current_region, distance, movie_screen_schedules, region_names } = data;

    setRegionNames(region_names);
    setCurRegion(current_region);
    setHowFar(distance);
    setMovieSchedule(movie_screen_schedules);
  } catch (err) {
    console.log(err);
  }
};
