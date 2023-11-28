import styled from 'styled-components';

import { ICFavoriteOff } from '../../assets/icon';

const DATA_LIST = {
  region_names: '홍대',
  region_far: '1.3km',
  screen_types: ['전체', '일반관', 'IMAX관', '컴포트관', 'GOLDCLASS관', '4DX관'],
  movie_screen_schedules: [
    {
      screenType: '컴포트관',
      place: '8층 1관',
      moivetype: '자막',
      screenactive: '2D',
      startTime: '2023-11-22T12:15:00',
      endTime: '2023-11-22T14:00:00',
      totalSeats: 200,
      emptySeats: 200,
      reservationAvailability: true,
    },
    {
      screenType: '컴포트관',
      place: '8층 1관',
      moivetype: '자막',
      screenactive: '2D',
      startTime: '2023-11-22T14:35:00',
      endTime: '2023-11-22T16:20:00',
      totalSeats: 200,
      emptySeats: 180,
      reservationAvailability: true,
    },
    {
      screenType: 'IMAX관',
      place: '8층 2관',
      moivetype: '자막',
      screenactive: '2D',
      startTime: '2023-11-22T12:15:00',
      endTime: '2023-11-22T14:00:00',
      totalSeats: 200,
      emptySeats: 185,
      reservationAvailability: true,
    },
  ],
};

const SelectMovieTime = () => {
  const { region_names, region_far } = DATA_LIST;
  return (
    <St.SelectMovieWrapper>
      <div>
        <ICFavoriteOff />
        <span>{region_names}</span>
        <span>{region_far}</span>
      </div>
      <div>
        <span>screen type MAP 함수 돌기</span>
      </div>
      <div>
        <div>
          <div>place info left</div>
          <div>place info right</div>
        </div>
        <div>moviecard mapping</div>
      </div>
    </St.SelectMovieWrapper>
  );
};

export default SelectMovieTime;

const St = {
  SelectMovieWrapper: styled.article`
    width: 37.5rem;
    height: 32.2rem;
  `,
};
