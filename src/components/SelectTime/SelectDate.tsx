import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
interface SelectDateProps {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

const SelectDate: React.FC<SelectDateProps> = ({ selectedDate, setSelectedDate }) => {
  const dayOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];
  const todayDate = new Date();

  const checkDay = (dayOfWeek: string) => {
    if (dayOfWeek === '토') {
      return 'blue_1';
    } else if (dayOfWeek === '일') {
      return 'red';
    } else {
      return 'gray700';
    }
  };

  const DATE_LIST = [];

  for (let i = 0; i < 14; i++) {
    const futureDate = new Date(todayDate);
    futureDate.setDate(todayDate.getDate() + i);

    const dayOfWeek = dayOfWeekNames[futureDate.getDay()];
    const dayColor = checkDay(dayOfWeek);

    const label = i === 0 ? '오늘' : i === 1 ? '내일' : dayOfWeek;

    const year = futureDate.getFullYear();
    const month = futureDate.getMonth() + 1;
    const day = futureDate.getDate().toString().padStart(2, '0');

    DATE_LIST.push({
      id: i,
      year: year,
      month: month,
      day: day,
      dayOfWeek: label,
      color: dayColor,
      fullDate: `${year}.${month}.${day}`,
    });
  }

  const handleClickDate = (fullDate: string) => {
    setSelectedDate(fullDate);
  };

  return (
    <St.SelectDateWapper>
      {DATE_LIST.map(({ day, dayOfWeek, color, fullDate }, idx) =>
        idx < 6 ? (
          <St.DateWrapper key={fullDate} onClick={() => handleClickDate(fullDate)}>
            <St.Date $isSelected={fullDate === selectedDate}>{day}</St.Date>
            <St.Day $DateColor={color} $isSelected={fullDate === selectedDate}>
              {dayOfWeek}
            </St.Day>
          </St.DateWrapper>
        ) : (
          <St.DateWrapper key={fullDate} onClick={() => handleClickDate(fullDate)} disabled>
            <St.Date $isSelected={fullDate === selectedDate} className="not-main">
              {day}
            </St.Date>
            <St.Day $DateColor={color} $isSelected={fullDate === selectedDate} className="not-main">
              {dayOfWeek}
            </St.Day>
          </St.DateWrapper>
        ),
      )}
    </St.SelectDateWapper>
  );
};

export default SelectDate;

const St = {
  SelectDateWapper: styled.section`
    overflow: auto;
    overflow: scroll;
    display: inline-flex;
    align-items: center;

    width: 37.5rem;
    height: 6.2rem;
    margin-bottom: 2.1rem;
    padding: 0rem 0.2rem 0rem 1rem;

    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  DateWrapper: styled.button`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    & > .not-main {
      color: ${({ theme }) => theme.colors.gray500};
    }
  `,

  Date: styled.span<{ $isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;

    color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.white : theme.colors.black)};

    background: ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.gradient : theme.colors.white};
    border-radius: 5rem;

    ${({ theme }) => theme.fonts.body_bold_16};
  `,

  Day: styled.span<{ $isSelected: boolean; $DateColor: string }>`
    ${({ theme }) => theme.fonts.body_regular_13};

    color: ${({ $isSelected, $DateColor, theme }) =>
      $isSelected
        ? theme.colors.red
        : $DateColor === 'blue_1'
          ? theme.colors.blue_1
          : $DateColor === 'red'
            ? theme.colors.red
            : theme.colors.gray600};
  `,
};
