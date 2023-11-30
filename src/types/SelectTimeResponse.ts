import { ScheduleType } from './ScheduleType';
import { SelectTimeMovieInfo } from './SelectTimeMovieInfo';

export interface SelectTimeResponse {
  movie_info: SelectTimeMovieInfo;
  region_names: string[];
  current_region: string;
  distance: number;
  screen_types: string[];
  movie_screen_schedules: ScheduleType[];
}
