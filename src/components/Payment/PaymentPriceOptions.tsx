import styled from 'styled-components';

import { IcArrowBottom } from '../../assets/icon';
import img_toss_banner from '../../assets/image/img_toss_banner.png';

const PaymentPriceOptions = () => {
  const PRICE_OPTIONS = [
    {
      id: 1,
      description: '할인쿠폰',
    },
    {
      id: 2,
      description: '관람권/기프티콘',
    },
    {
      id: 3,
      description: '포인트/상품권',
    },
  ];

  return (
    <St.PriceOptionsWrapper>
      <St.TossBannerContainer>
        <St.TossBannerImg src={img_toss_banner} alt="토스-간편결제-배너" />
      </St.TossBannerContainer>

      <St.PriceOptionMenuContainer>
        {PRICE_OPTIONS.map(({ id, description }) => {
          return (
            <St.PriceOptionMenuBox key={id} $id={id}>
              <St.MenuBoxIndexCircle>{id}</St.MenuBoxIndexCircle>
              <St.MenuBoxDescription>{description}</St.MenuBoxDescription>
              <IcArrowBottom />
            </St.PriceOptionMenuBox>
          );
        })}
      </St.PriceOptionMenuContainer>
      <St.PriceMenuBoxBottomLine></St.PriceMenuBoxBottomLine>
    </St.PriceOptionsWrapper>
  );
};

export default PaymentPriceOptions;

const St = {
  PriceOptionsWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  TossBannerContainer: styled.article`
    display: flex;
    justify-content: center;
    padding: 0.8rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.gray100};
  `,

  TossBannerImg: styled.img`
    width: 34.5rem;
    height: 3.2rem;
  `,

  PriceOptionMenuContainer: styled.article`
    display: flex;
    flex-direction: column;
  `,

  PriceOptionMenuBox: styled.div<{ $id: number }>`
    display: flex;
    gap: 1.2rem;
    align-items: center;

    width: 100%;
    height: 5.9rem;
    padding: 0 1.6rem;

    border-bottom: ${({ $id, theme }) => $id !== 3 && `0.1rem solid ${theme.colors.gray200}`};

    & > svg {
      margin-left: auto;
    }
  `,

  MenuBoxIndexCircle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.gray900};
    border-radius: 1.2rem;

    ${({ theme }) => theme.fonts.body_regular_14};
  `,

  MenuBoxDescription: styled.span`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_regular_16};
  `,

  PriceMenuBoxBottomLine: styled.div`
    width: 100%;
    height: 0.9rem;
    background-color: ${({ theme }) => theme.colors.gray100};
  `,
};
