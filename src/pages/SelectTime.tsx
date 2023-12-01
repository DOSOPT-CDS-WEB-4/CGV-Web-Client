import { useState } from 'react';
import styled from 'styled-components';

import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectPersonBottomSheet from '../components/SelectTime/SelectPerson/SelectPersonBottomSheet';
import SelectRegion from '../components/SelectTime/SelectRegion';
import useBottomSheet from '../hooks/useBottomSheet';
import { getInitDate } from '../libs/getInitDate';
import { slideDown, slideUp } from '../styles/animations/BottomSheetAnimation';

const SelectTime = () => {
  const [selectedDate, setSelectedDate] = useState<string>(getInitDate());

  const { BottomSheet, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet(
    51.5,
    slideUp,
    slideDown,
    300,
  );

  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <St.MiddleLine />
      <SelectMovieTime selectedDate={selectedDate} handleOpenBottomSheet={handleOpenBottomSheet} />
      <Footer />
      <BottomSheet>
        <SelectPersonBottomSheet
          handleCloseBottomSheet={handleCloseBottomSheet}
          selectedDate={selectedDate}
        />
      </BottomSheet>
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
