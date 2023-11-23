import styled from 'styled-components';

const PaymentMovieInfo = () => {
  return (
    <St.PaymentMovieInfoWrapper>
      <St.MovieInfoTitle>그대들은 어떻게 살~</St.MovieInfoTitle>
      <St.MovieInfoDetailBox>
        <St.MovieInfoDetailText>
          2023.10.31 <span className="detailDay">화요일 </span>· 22:35~24:49
        </St.MovieInfoDetailText>
        <St.MovieInfoDetailText>홍대 · 3관 7층</St.MovieInfoDetailText>
      </St.MovieInfoDetailBox>
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

  MovieInfoAmountText: styled.p`
    margin-left: auto;
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_semibold_15};
  `,
};
