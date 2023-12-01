import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ICFavoriteOff, ICFavoriteOn } from '../../assets/icon';
import { currentRegion, distance, movieSchedules, screenTypes } from '../../recoil/atom';
import TimeTable from './TimeTable';

const SelectMovieTime: React.FC<string> = ({ selectedDate }) => {
  const ScreenTypes = useRecoilValue(screenTypes);
  const curRegion = useRecoilValue(currentRegion);
  const howFar = useRecoilValue(distance);
  const movieScheduleList = useRecoilValue(movieSchedules);

  const [clickLike, setClickLike] = useState(false);
  const [typeClick, setTypeClick] = useState<Array<string>>([]);

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

        <St.Region>{curRegion}</St.Region>
        <St.Distance>{howFar}km</St.Distance>
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
          <St.InfoLeft>자막,2D,일반관</St.InfoLeft>
          <St.InfoRight>
            <St.TotalSeats>200석 &nbsp;</St.TotalSeats>
            <St.Location>3관 8층</St.Location>
          </St.InfoRight>
        </St.Info>
        <St.TimeTableList>
          {movieScheduleList.map((movieSchedules, index) => {
            const { reservation_availability, start_time, end_time, empty_seats } = movieSchedules;
            if (selectedDate === movieSchedules.date) {
              return (
                <TimeTable
                  key={index}
                  startTime={start_time}
                  endTime={end_time}
                  emptySeats={empty_seats}
                  reservationAvailability={reservation_availability}
                />
              );
            }
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
