import styled from 'styled-components';

import { ICFavoriteOff } from '../../assets/icon';

const DATA_LIST = {
  region_names: '홍대',
  region_far: '1.3km',
  screen_types: ['전체', '일반관', 'IMAX관', '컴포트관', 'GOLD CLASS관', '4DX관'],
  movie_screen_schedules: {
    screenType: '컴포트관',
    place: '1관 8층',
    moivetype: '자막',
    screenactive: '2D',
    startTime: '12:15',
    endTime: '14:00',
    totalSeats: 200,
    emptySeats: 200,
    reservationAvailability: true,
  },
};

const SelectMovieTime = () => {
  const { region_names, region_far, screen_types } = DATA_LIST;
  const {
    screenType,
    place,
    moivetype,
    screenactive,
    totalSeats,
    startTime,
    endTime,
    emptySeats,
    reservationAvailability,
  } = DATA_LIST.movie_screen_schedules;

  return (
    <St.SelectMovieWrapper>
      <St.SelectedRegion>
        <i>
          <ICFavoriteOff />
        </i>
        <St.Region>{region_names}</St.Region>
        <St.Distance>{region_far}</St.Distance>
      </St.SelectedRegion>
      <St.ScreenTypeWrapper>
        {screen_types.map(type => (
          <St.EachType key={type}>{type}</St.EachType>
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
          <St.TimeTable>
            <St.TimeWrapper>
              <St.StartTime>{startTime}</St.StartTime>
              <St.EndTime>~{endTime}</St.EndTime>
            </St.TimeWrapper>
            <St.EmptySeatsWrapper>
              <St.EmptySeats>잔여 {emptySeats}석</St.EmptySeats>
            </St.EmptySeatsWrapper>
          </St.TimeTable>
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
    border: 1px solid ${({ theme }) => theme.colors.gray600};
    color: ${({ theme }) => theme.colors.gray600};
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

  TimeTable: styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 10.7rem;
    height: 6.8rem;
    flex-shrink: 0;

    overflow: hidden;
    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.colors.red};
  `,

  TimeWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 4.2rem;
  `,

  StartTime: styled.span`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_semibold_16};
  `,

  EndTime: styled.span`
    color: ${({ theme }) => theme.colors.gray600};
    ${({ theme }) => theme.fonts.body_semibold_12};
  `,

  EmptySeatsWrapper: styled.div`
    width: 10.7rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.gray100};
  `,

  EmptySeats: styled.span`
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.body_semibold_12};
  `,

  TimeTableList: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
};
