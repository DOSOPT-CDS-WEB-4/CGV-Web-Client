import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import img_seat from '../../../../assets/image/img_seat.png';
import { currentRegionData, selectedMovieScheduleData } from '../../../../recoil/atom';

const BottomSheetContents = () => {
  const region = useRecoilValue(currentRegionData);
  const [scheduleInfo, setScheduleInfo] = useRecoilState(selectedMovieScheduleData);

  const { day, date, place, start_time, end_time, empty_seats } = scheduleInfo;

  // 요일 만드는 함수
  const getDayofWeek = () => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];
    setScheduleInfo(prev => {
      return { ...prev, day: dayOfWeek };
    });
  };

  useEffect(() => {
    getDayofWeek();
  }, []);

  return (
    <St.BottomSheetContentsWrapper>
      <St.ContentsMovieInfoContainer>
        <St.MovieInfoText>
          <St.MoieInfoTextStrong>{region} </St.MoieInfoTextStrong>
          {place}
        </St.MovieInfoText>
        <St.MovieInfoText>
          {date}({day}) 7회 {start_time}~{end_time}
        </St.MovieInfoText>
      </St.ContentsMovieInfoContainer>

      <St.RestSeatInfoContainer>
        <St.RestSeatInfoScreen>
          <span>screen</span>
        </St.RestSeatInfoScreen>
        <St.RestSeatImg src={img_seat} alt="잔여-좌석-이미지" />
        <St.RestSeatText>잔여 {empty_seats}석</St.RestSeatText>
      </St.RestSeatInfoContainer>

      <St.MovieInfoDetailTextContainer>
        <St.MovieInfoDetailText>
          · CGV홍대는 인근 일대가 교통이 혼잡하여 주차장을 운영하지 않으니 양해 부탁 드립니다.
        </St.MovieInfoDetailText>
        <St.MovieInfoDetailText>
          · 입장 지연에 따른 관람 불편을 최소화하기 위해 본 영화는 10분 후 상영이 시작됩니다.
        </St.MovieInfoDetailText>
      </St.MovieInfoDetailTextContainer>
    </St.BottomSheetContentsWrapper>
  );
};

export default BottomSheetContents;

const St = {
  BottomSheetContentsWrapper: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;

    padding-bottom: 11.4rem;
  `,

  ContentsMovieInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  `,

  MovieInfoText: styled.p`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_regular_15};
  `,

  MoieInfoTextStrong: styled.strong`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_bold_15};
  `,

  RestSeatInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;

    padding: 2.6rem 4rem 2rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  `,

  RestSeatInfoScreen: styled.div`
    position: relative;
    width: 8.2rem;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray200};

    & > span {
      position: absolute;
      top: -0.27rem;
      left: 50%;
      transform: translate(-50%, -50%);

      color: ${({ theme }) => theme.colors.gray900};

      ${({ theme }) => theme.fonts.body_regular_15};
    }
  `,

  RestSeatImg: styled.img`
    width: 14.4rem;
    height: 12.3rem;
  `,

  RestSeatText: styled.p`
    padding-top: 0.1rem;
    color: ${({ theme }) => theme.colors.red};

    ${({ theme }) => theme.fonts.body_semibold_16};
  `,

  MovieInfoDetailTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;
    padding: 0.8rem 1.7rem 0 1.7rem;
  `,

  MovieInfoDetailText: styled.p`
    color: ${({ theme }) => theme.colors.gray800};
    ${({ theme }) => theme.fonts.body_regular_12};
  `,
};
