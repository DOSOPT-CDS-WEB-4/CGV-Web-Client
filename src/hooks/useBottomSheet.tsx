import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Keyframes } from 'styled-components/dist/types';

import BottomSheetFrames from '../components/Common/bottomSheet/BottomSheetFrames';
import { movieSchedulesData, selectedMovieScheduleData } from '../recoil/atom';

const useBottomSheet = (
  height: number,
  openAnime?: Keyframes,
  closeAnime?: Keyframes,
  animeTimeMs = 300,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnmount, setIsUnmount] = useState(false);

  const setSelectedMovie = useSetRecoilState(selectedMovieScheduleData);
  const movieSchedules = useRecoilValue(movieSchedulesData);

  const handleOpenBottomSheet = (id?: number) => {
    const selectedMovie = movieSchedules.filter(el => el.schedule_id === id)[0];

    // console.log(selectedMovie, '&&&&&&&');
    setSelectedMovie(selectedMovie);
    setIsUnmount(false);
    setIsOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsUnmount(true);

    setTimeout(() => {
      setIsOpen(false);
    }, animeTimeMs);
  };

  const BottomSheet = ({ children }: { children: React.ReactElement }) => (
    <BottomSheetFrames
      height={height}
      isOpen={isOpen}
      handleCloseBottomSheet={handleCloseBottomSheet}
      isUnmount={isUnmount}
      openAnimation={openAnime}
      closeAnimation={closeAnime}
    >
      {children}
    </BottomSheetFrames>
  );

  return { BottomSheet, handleOpenBottomSheet, handleCloseBottomSheet };
};

export default useBottomSheet;
