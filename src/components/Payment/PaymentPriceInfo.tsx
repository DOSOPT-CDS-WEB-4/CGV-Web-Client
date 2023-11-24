import styled from 'styled-components';

import { IcCheck } from '../../assets/icon';

const PaymentPriceInfo = () => {
  return (
    <St.PaymentPriceInfoWrapper>
      <St.PriceInfoTextArea>
        <St.PriceInfoTitle>결제정보</St.PriceInfoTitle>
        <St.PriceInfoSaveLastBox>
          <IcCheck />
          <St.SaveLastText>마지막 결제수단 저장</St.SaveLastText>
        </St.PriceInfoSaveLastBox>
      </St.PriceInfoTextArea>
    </St.PaymentPriceInfoWrapper>
  );
};

export default PaymentPriceInfo;

const St = {
  PaymentPriceInfoWrapper: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 37.5rem;
    height: 24.4rem;
    padding: 0 1.5rem;
  `,

  PriceInfoTextArea: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 1.8rem 0 1.6rem 0;

    text-align: center;
  `,

  PriceInfoTitle: styled.h3`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.body_regular_16};
  `,

  PriceInfoSaveLastBox: styled.div`
    display: flex;
    align-items: center;
  `,

  SaveLastText: styled.p`
    color: ${({ theme }) => theme.colors.coral};
    ${({ theme }) => theme.fonts.body_regular_14};
  `,
};
