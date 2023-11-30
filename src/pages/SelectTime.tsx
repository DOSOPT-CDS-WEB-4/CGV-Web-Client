import styled from 'styled-components';

import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectRegion from '../components/SelectTime/SelectRegion';
import { api } from '../libs/axios';
import { apiResponse } from '../types/axios';
import { SelectTimeResponse } from '../types/SelectTimeResponse';

const SelectTime = () => {
  const getSelectTimeAPI = async (regionName: string, screenTypes: string[]) => {
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

      console.log(
        current_region,
        distance,
        movie_info,
        movie_screen_schedules,
        region_names,
        screen_types,
      );
    } catch (err) {
      console.log(err);
    }
  };

  getSelectTimeAPI('HONGDAE', []);

  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectDate />
      <St.MiddleLine />
      <SelectMovieTime />
      <Footer />
    </>
  );
};

export default SelectTime;

const St = {
  MiddleLine: styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray100};
  `,
};
