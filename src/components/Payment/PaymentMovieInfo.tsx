import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import {
  currentRegionData,
  selectedMovieScheduleData,
  selectTimeMovieInfoState,
} from '../../recoil/atom';

const PaymentMovieInfo = () => {
  //서버에서 안주는 데이터
  const PRICE = 28000;
  const PERSON = '일반2';

  // 지역 가져오기
  const region = useRecoilValue(currentRegionData);
  //영화 제목 가져오기
  const { title } = useRecoilValue(selectTimeMovieInfoState);
  //영화 스케줄 정보 가져오기
  const { day, date, place, start_time, end_time } = useRecoilValue(selectedMovieScheduleData);

  return (
    <St.PaymentMovieInfoWrapper>
      <St.MovieInfoTitle>{title}</St.MovieInfoTitle>
      <St.MovieInfoDetailBox>
        <St.MovieInfoDetailText>
          {date} <span className="detailDay">{day}요일 </span>· {start_time}~{end_time}
        </St.MovieInfoDetailText>
        <St.MovieInfoDetailText>
          {region} · {place}
        </St.MovieInfoDetailText>
      </St.MovieInfoDetailBox>
      <St.MovieInfoPersonText>{PERSON}</St.MovieInfoPersonText>
      <St.MovieInfoPriceText>{PRICE.toLocaleString()}원</St.MovieInfoPriceText>
    </St.PaymentMovieInfoWrapper>
  );
};

export default PaymentMovieInfo;

const St = {
  PaymentMovieInfoWrapper: styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 100%;
    height: 13.2rem;
    padding: 2.2rem 1.5rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  `,

  MovieInfoTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.title_medium_18};
  `,

  MovieInfoDetailBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,

  MovieInfoDetailText: styled.p`
    color: ${({ theme }) => theme.colors.gray400};
    ${({ theme }) => theme.fonts.body_regular_14};

    & > .detailDay {
      color: ${({ theme }) => theme.colors.blue_1};
      ${({ theme }) => theme.fonts.body_regular_14};
    }
  `,

  MovieInfoPersonText: styled.p`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_regular_14}
  `,

  MovieInfoPriceText: styled.p`
    margin-left: auto;
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_semibold_15};
  `,
};
