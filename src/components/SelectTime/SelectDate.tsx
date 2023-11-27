import styled from 'styled-components';

const SelectDate = () => {
  const dayOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];
  const todayDate = new Date();

  const checkDay = dayOfWeek => {
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

    if (i === 0) {
      DATE_LIST.push({
        id: i,
        year: futureDate.getFullYear(),
        month: futureDate.getMonth() + 1,
        day: futureDate.getDate(),
        dayOfWeek: '오늘',
        color: dayColor,
      });
    } else if (i === 1) {
      DATE_LIST.push({
        id: i,
        year: futureDate.getFullYear(),
        month: futureDate.getMonth() + 1,
        day: futureDate.getDate(),
        dayOfWeek: '내일',
        color: dayColor,
      });
    } else {
      DATE_LIST.push({
        id: i,
        year: futureDate.getFullYear(),
        month: futureDate.getMonth() + 1,
        day: futureDate.getDate(),
        dayOfWeek: dayOfWeek,
        color: dayColor,
      });
    }
  }
  console.log(DATE_LIST);
  return (
    <St.SelectDateWapper>
      {DATE_LIST.map(DATE => (
        <St.DateWrappr key={DATE.id}>
          <St.Date>{DATE.day}</St.Date>
          <St.Day $DateColor={DATE.color}>{DATE.dayOfWeek}</St.Day>
        </St.DateWrappr>
      ))}
    </St.SelectDateWapper>
  );
};

export default SelectDate;

const St = {
  SelectDateWapper: styled.section`
    overflow: auto;
    overflow: scroll;
    display: inline-flex;
    gap: 1.2rem;
    align-items: center;

    width: 37.5rem;
    height: 6.1rem;
    margin-bottom: 2.1rem;
    padding: 0rem 0.2rem 0rem 1.6rem;

    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  DateWrappr: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    width: 4.2rem;
  `,

  Date: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4.2rem;
    height: 4.2rem;
    ${({ theme }) => theme.fonts.body_bold_16};

    color: ${({ theme }) => theme.colors.black};
  `,
  Day: styled.span`
    ${({ theme }) => theme.fonts.body_regular_13};

    color: ${({ $DateColor, theme }) =>
      $DateColor === 'blue_1'
        ? theme.colors.blue_1
        : $DateColor === 'red'
          ? theme.colors.red
          : theme.colors.gray600};
  `,
};
