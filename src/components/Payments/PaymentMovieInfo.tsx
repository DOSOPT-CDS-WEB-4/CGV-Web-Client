import styled from 'styled-components';

const PaymentMovieInfo = () => {
  return (
    <St.PaymentMovieInfoWrapper>
      <St.MovieInfoTitle>그대들은 어떻게 살~</St.MovieInfoTitle>
      <St.MovieInfoDateBox>
        <St.MovieInfoDateText>2023.10.31</St.MovieInfoDateText>
        <St.MovieInfoDateText>화요일</St.MovieInfoDateText>
        <St.MovieInfoDateText>22.35 ~ 24.49</St.MovieInfoDateText>
      </St.MovieInfoDateBox>
      <St.MovieInfoPersonText>일반2</St.MovieInfoPersonText>
      <St.MovieInfoAmountText>28,000원</St.MovieInfoAmountText>
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
  `,

  MovieInfoTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.title_medium_18};
  `,

  MovieInfoDateBox: styled.div`
    display: flex;
    gap: 0.4rem;
  `,

  MovieInfoDateText: styled.span`
    color: ${({ theme }) => theme.colors.gray400};
    ${({ theme }) => theme.fonts.body_regular_14};

    &.day {
      color: ${({ theme }) => theme.colors.blue_1};
    }
  `,

  MovieInfoPlaeText: styled.p`
    color: ${({ theme }) => theme.colors.gray400};
    ${({ theme }) => theme.fonts.body_regular_14};
  `,

  MovieInfoPersonText: styled.p`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_regular_14}
  `,

  MovieInfoAmountText: styled.p`
    margin-left: auto;
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_semibold_15};
  `,
};
