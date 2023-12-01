import { useState } from 'react';
import styled from 'styled-components';

interface TimeTableProps {
  startTime: string;
  endTime: string;
  emptySeats: number;
  reservationAvailability: boolean;
}
const TimeTable = ({ startTime, endTime, emptySeats, reservationAvailability }: TimeTableProps) => {
  const [activeState] = useState(reservationAvailability);

  return (
    <St.TimeTable $activeState={activeState}>
      <St.TimeWrapper>
        <St.StartTime $activeState={activeState}>{startTime}</St.StartTime>
        <St.EndTime>~{endTime}</St.EndTime>
      </St.TimeWrapper>
      <St.EmptySeatsWrapper>
        {activeState ? (
          <St.EmptySeats $activeState={activeState}>잔여 {emptySeats}석</St.EmptySeats>
        ) : (
          <St.EmptySeats $activeState={activeState}>예매종료</St.EmptySeats>
        )}
      </St.EmptySeatsWrapper>
    </St.TimeTable>
  );
};
export default TimeTable;

const St = {
  TimeTable: styled.button<{ $activeState: boolean }>`
    cursor: auto;
    cursor: ${({ $activeState }) => ($activeState ? 'pointer' : 'auto')};

    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;

    width: 10.7rem;
    height: 6.8rem;

    border: 1px solid
      ${({ $activeState, theme }) => ($activeState ? theme.colors.coral : theme.colors.gray200)};
    border-radius: 0.6rem;
  `,

  TimeWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 4.2rem;
  `,

  StartTime: styled.span<{ $activeState: boolean }>`
    color: ${({ $activeState, theme }) =>
      $activeState ? theme.colors.gray900 : theme.colors.gray600};
    ${({ theme }) => theme.fonts.body_semibold_16};
  `,

  EndTime: styled.span`
    color: ${({ theme }) => theme.colors.gray600};
    ${({ theme }) => theme.fonts.body_semibold_12};
  `,

  EmptySeatsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10.7rem;
    height: 2.6rem;

    background-color: ${({ theme }) => theme.colors.gray100};
  `,

  EmptySeats: styled.span<{ $activeState: boolean }>`
    color: ${({ $activeState, theme }) => ($activeState ? theme.colors.red : theme.colors.gray600)};
    ${({ theme }) => theme.fonts.body_semibold_12};
  `,
};
