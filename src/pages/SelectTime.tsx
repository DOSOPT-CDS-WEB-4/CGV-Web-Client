import { useState } from 'react';
import styled from 'styled-components';

import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectRegion from '../components/SelectTime/SelectRegion';
import { getInitDate } from '../libs/getInitDate';

const SelectTime = () => {
  const [selectedDate, setSelectedDate] = useState<string>(getInitDate());

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
