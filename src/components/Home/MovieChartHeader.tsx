import styled from 'styled-components';

import { IcArrowFront } from '../../assets/icon/index';

const MovieChartHeader = () => {

  return (
    <>
      <St.MovieChartWrapper>
        <p className='movie-chart'>무비차트</p>
        <p className='scheduled'>상영예정</p>
        <p className='view-all'>전체보기</p>
        <IcArrowFront />
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

        }

        & > p.movie-chart {

        }

        & > p.scheduled {

        }

        & > p.view-all {

        }
    `,

  SubChartWrapper: styled.div`

        
        &::-webkit-scrollbar {
   
        }
    `,

  LI: styled.li`


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
