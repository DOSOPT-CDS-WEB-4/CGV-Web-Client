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
            flex-direction: column;
            justify-content: center;
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
            margin: 1.8rem 0.2rem 0.4rem 0rem;
            flex-shrink: 0;
            color: ${({ theme }) => theme.colors['gray400']};
            ${({ theme }) => theme.fonts['body_regular_13']};
        }

        & > .arrow {
          flex-shrink: 0;
          margin: 1.8rem 1.5rem 0rem 0.2rem;

        }
    `,

  SubChartWrapper: styled.div`

    `,

  LI: styled.li`
        display: inline-block; 
        list-style-type: none;

        & > p {
        }
        
        & > p.selected {
        }

        & > p.next-to-selected {
        }

        & > p.not-selected {
        }

    `,
};
