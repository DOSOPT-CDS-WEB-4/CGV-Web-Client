import { useState } from 'react';
import styled from 'styled-components';

import { ICFavoriteOff, ICFavoriteOn } from '../../assets/icon';
import TimeTable from './TimeTable';

const DATA_LIST = {
  region_names: '홍대',
  region_far: '1.3km',
  screen_types: ['전체', '일반관', 'IMAX관', '컴포트관', 'GOLD CLASS관', '4DX관'],
  movie_screen_schedules: [
    {
      startTime: '12:15',
      endTime: '14:00',
      emptySeats: 200,
      reservationAvailability: false,
    },
    {
      startTime: '12:15',
      endTime: '14:00',

      emptySeats: 200,
      reservationAvailability: true,
    },
  ],

  screenType: '컴포트관',
  place: '1관 8층',
  moivetype: '자막',
  screenactive: '2D',
  totalSeats: 200,
};

const SelectMovieTime = () => {
  const [clickLike, setClickLike] = useState(false);
  const [typeClick, setTypeClick] = useState([]);

  const {
    region_names,
    region_far,
    screen_types,
    screenType,
    place,
    moivetype,
    screenactive,
    totalSeats,
  } = DATA_LIST;

  const handleOnClickLike = () => {
    setClickLike(!clickLike);
  };

  const handleTypeClick = type => {
    if (typeClick.includes(type)) {
      setTypeClick(typeClick.filter(elm => elm !== type));
    } else {
      setTypeClick([...typeClick, type]);
    }
  };

  return (
    <St.SelectMovieWrapper>
      <St.SelectedRegion>
        {clickLike ? (
          <i onClick={handleOnClickLike}>
            <ICFavoriteOn />
          </i>
        ) : (
          <i onClick={handleOnClickLike}>
            <ICFavoriteOff />
          </i>
        )}

        <St.Region>{region_names}</St.Region>
        <St.Distance>{region_far}</St.Distance>
      </St.SelectedRegion>
      <St.ScreenTypeWrapper>
        {screen_types.map(type => (
          <St.EachType
            key={type}
            onClick={() => {
              handleTypeClick(type);
            }}
            $isClicked={typeClick.includes(type)}
          >
            {type}
          </St.EachType>
        ))}
      </St.ScreenTypeWrapper>
      <St.SelectTime>
        <St.Info>
          <St.InfoLeft>
            {moivetype},{screenactive},{screenType}
          </St.InfoLeft>
          <St.InfoRight>
            <St.TotalSeats>{totalSeats}석 &nbsp;</St.TotalSeats>
            <St.Location>{place}</St.Location>
          </St.InfoRight>
        </St.Info>
        <St.TimeTableList>
          {DATA_LIST.movie_screen_schedules.map((movieSchedules, index) => {
            const { reservationAvailability, startTime, endTime, emptySeats } = movieSchedules;

            return (
              <TimeTable
                key={index}
                startTime={startTime}
                endTime={endTime}
                emptySeats={emptySeats}
                reservationAvailability={reservationAvailability}
              />
            );
          })}
        </St.TimeTableList>
      </St.SelectTime>
    </St.SelectMovieWrapper>
  );
};

export default SelectMovieTime;

const St = {
  SelectMovieWrapper: styled.article`
    width: 37.5rem;
    height: 32.2rem;
  `,

  SelectedRegion: styled.section`
    width: 37.5rem;
    padding: 1.8rem 0 1.4rem 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `,

  Region: styled.span`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  Distance: styled.span`
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.body_medium_13};
  `,

  ScreenTypeWrapper: styled.section`
    width: 37.5rem;
    height: 3rem;
    flex-shrink: 0;
    display: flex;
    padding: 0 1.6rem;
    margin-bottom: 2.4rem;
    gap: 0.9rem;

    overflow: auto;
    white-space: nowrap;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  EachType: styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 1rem;

    ${({ theme }) => theme.fonts.body_regular_13};

    text-wrap: nowrap;
    vertical-align: center;

    border-radius: 1.6rem;
    border: 1px solid
      ${({ $isClicked, theme }) => ($isClicked ? theme.colors.gradient : theme.colors.gray600)};
    color: ${({ $isClicked, theme }) =>
      $isClicked ? theme.colors.gradient : theme.colors.gray600};
  `,

  SelectTime: styled.section`
    width: 37.5rem;
    padding: 0 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,

  Info: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  InfoLeft: styled.div`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_bold_14};
  `,

  InfoRight: styled.div`
    display: flex;
    ${({ theme }) => theme.fonts.body_medium_12};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  TotalSeats: styled.span`
    color: ${({ theme }) => theme.colors.gray800};
    ${({ theme }) => theme.fonts.body_medium_12};
  `,

  Location: styled.span`
    color: ${({ theme }) => theme.colors.gray700};
    ${({ theme }) => theme.fonts.body_medium_12};
  `,

  TimeTableList: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
};
