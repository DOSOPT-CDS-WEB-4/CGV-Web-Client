import styled from 'styled-components';

import { ICFavoriteOff } from '../../assets/icon';

const DATA_LIST = {
  region_names: '홍대',
  region_far: '1.3km',
  screen_types: ['전체', '일반관', 'IMAX관', '컴포트관', 'GOLD CLASS관', '4DX관'],
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
  const { region_names, region_far, screen_types } = DATA_LIST;
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
};
