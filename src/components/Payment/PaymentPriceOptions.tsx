import styled from 'styled-components';

import img_toss_banner from '../../assets/image/img_toss_banner.png';

const PaymentPriceOptions = () => {
  return (
    <St.PriceOptionsWrapper>
      <St.TossBannerContainer>
        <St.TossBannerImg src={img_toss_banner} alt="토스-간편결제-배너" />
      </St.TossBannerContainer>
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
};
