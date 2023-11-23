import styled from 'styled-components';

import { IcArrowFront } from '../../assets/icon/index';

const MovieChartHeader = () => {

  return (
    <>
      <St.MovieChartWrapper>
        <p className='movie-chart'>무비차트</p>
        <p className='scheduled'>상영예정</p>
        <p className='view-all'>전체보기</p>
        <IcArrowFront className='arrow' />
      </St.MovieChartWrapper>
      <St.SubChartWrapper>
        <St.LI>
          <p className='selected'>예매차트</p>
        </St.LI>
        <St.LI>
          <p className='next-to-selected'>현재상영작</p>
        </St.LI>
        <St.LI>
          <p className='not-selected'>ICECON</p>
        </St.LI>
        <St.LI>
          <p className='not-selected'>아트하우스</p>
        </St.LI>
        <St.LI>
          <p className='not-selected'>CGV Only</p>
        </St.LI>
      </St.SubChartWrapper>
    </>
  );
};

export default MovieChartHeader;

const St = {
  MovieChartWrapper: styled.div`
    & > p {
        display: inline;
        flex-shrink: 0;
        ${({ theme }) => theme.fonts['title_bold_18']};
    }

    & > p.movie-chart {
        margin: 1.9rem 0.4rem 2.1rem 1.5rem;
        color: ${({ theme }) => theme.colors['red']};
    }

    & > p.scheduled {
        margin: 1.9rem 14.4rem 2.1rem 0.4rem;
        color: ${({ theme }) => theme.colors['gray400']};
    }

    & > p.view-all {
        flex-shrink: 0;
        margin: 1.8rem 0.2rem 0.4rem 0rem;
        color: ${({ theme }) => theme.colors['gray400']};
        ${({ theme }) => theme.fonts['body_regular_13']};
    }

    & > .arrow {
        margin: 1.8rem 1.5rem 0rem 0.2rem;
    }
  `,

  SubChartWrapper: styled.div`
    overflow-x: auto;
    max-width: 100%;
    white-space: nowrap;
          
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  LI: styled.li`
      cursor: pointer;
      display: inline-block; 
      list-style-type: none;

      & > p {
        ${({ theme }) => theme.fonts['body_regular_14']};
      }

      & > p.selected {
        margin: 0rem 0rem 0rem 1.5rem;
        padding: 2.1rem 0rem 0.8rem 0rem;
        color: ${({ theme }) => theme.colors['red']};
        border-bottom: 1px solid ${({ theme }) => theme.colors['red']};
      }

      & > p.next-to-selected {
        padding: 2.1rem 2.2rem 0.8rem 2.2rem;
        color: ${({ theme }) => theme.colors['gray600']};
        border-bottom: 1px solid ${({ theme }) => theme.colors['gray300']};
      }

      & > p.not-selected {
        padding: 2.1rem 2.2rem 0.8rem 0rem;
        color: ${({ theme }) => theme.colors['gray600']};
        border-bottom: 1px solid ${({ theme }) => theme.colors['gray300']};
      }

      & > p:hover {
        color: ${({ theme }) => theme.colors['red']};
        transition: 0.5s;
      }
    `,
};
