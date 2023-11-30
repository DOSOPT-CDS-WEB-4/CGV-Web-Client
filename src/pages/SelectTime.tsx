import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectRegion from '../components/SelectTime/SelectRegion';
import { getSelectTimeAPI } from '../libs/getSelectTimeApi';
import {
  currentRegion,
  distance,
  movieSchedules,
  regionNames,
  screenTypes,
  selectTimeMovieInfo,
} from '../recoil/atom';

const SelectTime = () => {
  const setRegionNames = useSetRecoilState(regionNames);
  const setScreenTypes = useSetRecoilState(screenTypes);
  const setCurRegion = useSetRecoilState(currentRegion);
  const setHowFar = useSetRecoilState(distance);
  const setMovieInfo = useSetRecoilState(selectTimeMovieInfo);
  const setMovieSchedule = useSetRecoilState(movieSchedules);

  useEffect(() => {
    getSelectTimeAPI(
      'MOKDONG',
      [],
      setRegionNames,
      setScreenTypes,
      setCurRegion,
      setHowFar,
      setMovieInfo,
      setMovieSchedule,
    );
  }, []);

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
