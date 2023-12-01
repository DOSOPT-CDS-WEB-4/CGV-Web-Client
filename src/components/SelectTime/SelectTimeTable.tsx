import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { movieSchedules } from '../../recoil/atom';
import { ScheduleType } from '../../types/ScheduleType';
import TimeTable from './TimeTable';
interface SelectTimeTableProps {
  selectedDate: string;
  // type: string;
}

const SelectTimeTable: React.FC<SelectTimeTableProps> = ({ selectedDate }) => {
  const movieScheduleList = useRecoilValue(movieSchedules);
  return (
    <St.SelectTime>
      <St.TimeTableList>
        {movieScheduleList.map((scheduleList: ScheduleType, index: number) => {
          const { place, total_seats } = scheduleList;
          return (
            <St.Info key={index}>
              <St.InfoLeft>자막,2D,일반관</St.InfoLeft>
              <St.InfoRight>
                <St.TotalSeats>{total_seats} &nbsp;</St.TotalSeats>
                <St.Location>{place}</St.Location>
              </St.InfoRight>
              {movieScheduleList.map((movieSchedules: ScheduleType, index: number) => {
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
            </St.Info>
          );
        })}
      </St.TimeTableList>
    </St.SelectTime>
  );
};
export default SelectTimeTable;

const St = {
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
