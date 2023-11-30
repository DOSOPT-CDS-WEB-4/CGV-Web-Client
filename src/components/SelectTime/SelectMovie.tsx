import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ICFavoriteOff, ICFavoriteOn } from '../../assets/icon';
import { screenTypes } from '../../recoil/atom';
import TimeTable from './TimeTable';

const DATA_LIST = {
  region_names: '홍대',
  region_far: '1.3km',
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
  const ScreenTypes = useRecoilValue(screenTypes);

  const [clickLike, setClickLike] = useState(false);
  const [typeClick, setTypeClick] = useState<Array<string>>([]);

  const { region_names, region_far, screenType, place, moivetype, screenactive, totalSeats } =
    DATA_LIST;

  const handleOnClickLike = () => {
    setClickLike(!clickLike);
  };

  const handleTypeClick = (type: string) => {
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
          <button onClick={handleOnClickLike}>
            <ICFavoriteOn />
          </button>
        ) : (
          <button onClick={handleOnClickLike}>
            <ICFavoriteOff />
          </button>
        )}

        <St.Region>{region_names}</St.Region>
        <St.Distance>{region_far}</St.Distance>
      </St.SelectedRegion>
      <St.ScreenTypeWrapper>
        {ScreenTypes.map(type => (
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
    display: flex;
    gap: 0.8rem;
    align-items: center;

    width: 37.5rem;
    padding: 1.8rem 0 1.4rem 1.6rem;
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
    overflow: auto;
    overflow: scroll;
    display: flex;
    flex-shrink: 0;
    gap: 0.9rem;

    width: 37.5rem;
    height: 3rem;
    margin-bottom: 2.4rem;
    padding: 0 1.6rem;

    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  EachType: styled.li<{ $isClicked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 1rem;

    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.red : theme.colors.gray600)};
    text-wrap: nowrap;
    vertical-align: center;

    border: 1px solid
      ${({ $isClicked, theme }) => ($isClicked ? theme.colors.red : theme.colors.gray600)};
    border-radius: 1.6rem;

    ${({ theme }) => theme.fonts.body_regular_13};
  `,

  SelectTime: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 37.5rem;
    padding: 0 1.6rem;
  `,

  Info: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
