import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ICFavoriteOff, ICFavoriteOn } from '../../assets/icon';
import {
  clickedTypesData,
  currentRegionData,
  distanceData,
  movieSchedulesData,
  screenTypesData,
} from '../../recoil/atom';
import { ScheduleType } from '../../types/ScheduleType';
import TimeTable from './TimeTable';

interface SelectMovieTimeProps {
  selectedDate: string;
}

const SelectMovieTime: React.FC<SelectMovieTimeProps> = ({ selectedDate }) => {
  const ScreenTypes = useRecoilValue(screenTypesData);
  const curRegion = useRecoilValue(currentRegionData);
  const howFar = useRecoilValue(distanceData);
  const movieScheduleList = useRecoilValue(movieSchedulesData);
  const [clickedTypeList, setclickedTypeList] = useRecoilState(clickedTypesData);

  const [clickLike, setClickLike] = useState(false);
  const [normalTypeList, setNormalTypeList] = useState<ScheduleType[]>([]);
  const [imaxTypeList, setImaxTypeList] = useState<ScheduleType[]>([]);
  const [comfortTypeList, setComfortTypeList] = useState<ScheduleType[]>([]);

  const sortByType = () => {
    const TODAY_SCHEDULE = movieScheduleList.filter(({ date }) => {
      return date === selectedDate;
    });

    const normalType: ScheduleType[] = TODAY_SCHEDULE.filter(schedule => {
      const { screen_type } = schedule;
      return screen_type === '일반관' && schedule;
    });
    const comfortType: ScheduleType[] = TODAY_SCHEDULE.filter(schedule => {
      const { screen_type } = schedule;
      return screen_type === '컴포트관' && schedule;
    });
    const imaxType: ScheduleType[] = TODAY_SCHEDULE.filter(schedule => {
      const { screen_type } = schedule;
      return screen_type === 'IMAX관' && schedule;
    });
    setNormalTypeList(normalType);
    setImaxTypeList(imaxType);
    setComfortTypeList(comfortType);
  };

  const handleOnClickLike = () => {
    setClickLike(!clickLike);
  };

  const handleTypeClick = (type: string) => {
    if (clickedTypeList.includes(type)) {
      setclickedTypeList(clickedTypeList.filter(elm => elm !== type));
    } else {
      setclickedTypeList(prev => {
        return [...prev, type];
      });
    }
  };

  useEffect(() => {
    sortByType();
  }, [selectedDate]);

  const renderNormalType = () => {
    return (
      <>
        <St.TimeTableList>
          <St.Info>
            <St.InfoLeft>자막,2D,일반관</St.InfoLeft>
            <St.InfoRight>
              <St.TotalSeats>200석</St.TotalSeats>
              <St.Location>3관 8층</St.Location>
            </St.InfoRight>
          </St.Info>
          <St.EachTimeTable>
            {normalTypeList?.map((movieSchedules: ScheduleType, index: number) => {
              const { reservation_availability, start_time, end_time, empty_seats } =
                movieSchedules;
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
          </St.EachTimeTable>
        </St.TimeTableList>
      </>
    );
  };
  const renderComfortType = () => {
    return (
      <>
        <St.TimeTableList>
          <St.Info>
            <St.InfoLeft>자막,2D,컴포트관</St.InfoLeft>
            <St.InfoRight>
              <St.TotalSeats>200석</St.TotalSeats>
              <St.Location>1관 8층</St.Location>
            </St.InfoRight>
          </St.Info>
          <St.EachTimeTable>
            {comfortTypeList?.map((movieSchedules: ScheduleType, index: number) => {
              const { reservation_availability, start_time, end_time, empty_seats } =
                movieSchedules;
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
          </St.EachTimeTable>
        </St.TimeTableList>
      </>
    );
  };
  const renderIMAXType = () => {
    return (
      <>
        <St.TimeTableList>
          <St.Info>
            <St.InfoLeft>자막,2D,IMAX관</St.InfoLeft>
            <St.InfoRight>
              <St.TotalSeats>200석</St.TotalSeats>
              <St.Location>2관 8층</St.Location>
            </St.InfoRight>
          </St.Info>
          <St.EachTimeTable>
            {imaxTypeList?.map((movieSchedules: ScheduleType, index: number) => {
              const { reservation_availability, start_time, end_time, empty_seats } =
                movieSchedules;
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
          </St.EachTimeTable>
        </St.TimeTableList>
      </>
    );
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
            $isClicked={clickedTypeList.includes(type)}
          >
            {type}
          </St.EachType>
        ))}
      </St.ScreenTypeWrapper>

      <St.SelectTime>
        {(clickedTypeList.includes('전체') || clickedTypeList.includes('일반관')) &&
          renderNormalType()}
        {(clickedTypeList.includes('전체') || clickedTypeList.includes('컴포트관')) &&
          renderComfortType()}
        {(clickedTypeList.includes('전체') || clickedTypeList.includes('IMAX관')) &&
          renderIMAXType()}
      </St.SelectTime>
    </St.SelectMovieWrapper>
  );
};

export default SelectMovieTime;

const St = {
  SelectMovieWrapper: styled.article`
    overflow: scroll;
    width: 37.5rem;
    height: 35.2rem;
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
    gap: 0.7rem;

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
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 1rem;

    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.coral : theme.colors.gray600)};
    text-wrap: nowrap;
    vertical-align: center;

    border: 1px solid
      ${({ $isClicked, theme }) => ($isClicked ? theme.colors.coral : theme.colors.gray600)};
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
    flex-direction: column;
    gap: 0.8rem;
  `,

  EachTimeTable: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
};
