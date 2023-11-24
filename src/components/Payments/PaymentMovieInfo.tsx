import styled from 'styled-components';

const PaymentMovieInfo = () => {
  // 영화, 상영관, 인원, 결제 정보 더미데이터
  const DUMMY_MOVIE_INFO = {
    movie_title: '그대들은 어떻게 살것인가',
    movie_date: '2023.10.31',
    movie_day: '화요일',
    start_time: '22:35',
    end_time: '24:49',
    region: '홍대',
    place: '3관 7층',

    person: '일반2',

    price: 28000,
  };

  const { movie_title, movie_date, movie_day, start_time, end_time, region, place, person, price } =
    DUMMY_MOVIE_INFO;

  return (
    <St.PaymentMovieInfoWrapper>
      <St.MovieInfoTitle>{movie_title}</St.MovieInfoTitle>
      <St.MovieInfoDetailBox>
        <St.MovieInfoDetailText>
          {movie_date} <span className="detailDay">{movie_day} </span>· {start_time}~{end_time}
        </St.MovieInfoDetailText>
        <St.MovieInfoDetailText>
          {region} · {place}
        </St.MovieInfoDetailText>
      </St.MovieInfoDetailBox>
      <St.MovieInfoPersonText>{person}</St.MovieInfoPersonText>
      <St.MovieInfoPriceText>{price.toLocaleString()}원</St.MovieInfoPriceText>
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
