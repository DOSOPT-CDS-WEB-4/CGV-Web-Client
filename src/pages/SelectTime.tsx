import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectRegion from '../components/SelectTime/SelectRegion';
import { getInitDate } from '../libs/getInitDate';
import { getSelectTimeAPI } from '../libs/getSelectTimeApi';
import {
  clickedTypes,
  currentRegion,
  distance,
  movieSchedules,
  regionNames,
  screenTypes,
  selectTimeMovieInfo,
} from '../recoil/atom';

const SelectTime = () => {
  const [selectedDate, setSelectedDate] = useState<string>(getInitDate());

  const setRegionNames = useSetRecoilState(regionNames);
  const setScreenTypes = useSetRecoilState(screenTypes);
  const setCurRegion = useSetRecoilState(currentRegion);
  const setHowFar = useSetRecoilState(distance);
  const setMovieInfo = useSetRecoilState(selectTimeMovieInfo);
  const setMovieSchedule = useSetRecoilState(movieSchedules);
  // const [clickedTypeList, setclickedTypeList] = useRecoilState(clickedTypes);

  const clickedTypeList = useRecoilValue(clickedTypes);

  useEffect(() => {
    const clickedList = filteringScreenType(clickedTypeList);
    console.log(clickedList, 'click');
    getSelectTimeAPI(
      'HONGDAE',
      clickedList,
      setRegionNames,
      setScreenTypes,
      setCurRegion,
      setHowFar,
      setMovieInfo,
      setMovieSchedule,
    );
  }, []);

  const filteringScreenType = clickedTypeList => {
    const typeClickKey: string[] = [];

    clickedTypeList.forEach(type => {
      switch (type) {
        case '일반관':
          typeClickKey.push('NORMAL');
          break;
        case 'IMAX관':
          typeClickKey.push('IMAX');
          break;
        case '컴포트관':
          typeClickKey.push('COMFORT');
          break;
        case 'GOLD CLASS관':
          typeClickKey.push('GOLDCLASS');
          break;
      }
    });
    return typeClickKey;
  };

  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <St.MiddleLine />
      <SelectMovieTime selectedDate={selectedDate} />
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
