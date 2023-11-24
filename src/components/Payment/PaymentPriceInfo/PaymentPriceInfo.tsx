import { useState } from 'react';
import styled from 'styled-components';

import { PAYMENT_METHOD } from '../../../assets/constants/PAYMENT_METHOD';
import { IcCheck } from '../../../assets/icon';
import PaymentMethodBox from './PaymentMethodBox';

const PaymentPriceInfo = () => {
  const [selectedMethod, setSelectedMethod] = useState<number>();

  const handleClickMethodBox = (id: number) => {
    setSelectedMethod(id);
  };

  return (
    <St.PaymentPriceInfoWrapper>
      <St.PriceInfoTextArea>
        <St.PriceInfoTitle>결제정보</St.PriceInfoTitle>
        <St.PriceInfoSaveLastBox>
          <IcCheck />
          <St.SaveLastText>마지막 결제수단 저장</St.SaveLastText>
        </St.PriceInfoSaveLastBox>
      </St.PriceInfoTextArea>
      <St.PriceInfoBanner>
        <St.BannerText className="highlight">최초 1회! </St.BannerText>
        <St.BannerText> CGV 스마트 결제 등록하고 빠르게 결제하세요.</St.BannerText>
      </St.PriceInfoBanner>
      <St.PaymentMethodBoxWrapper>
        {PAYMENT_METHOD.map(({ id, icon, description }) => {
          return (
            <PaymentMethodBox
              key={id}
              isClicked={selectedMethod === id}
              icon={icon}
              description={description}
              onClick={() => handleClickMethodBox(id)}
            />
          );
        })}
      </St.PaymentMethodBoxWrapper>
    </St.PaymentPriceInfoWrapper>
  );
};

export default PaymentPriceInfo;

const St = {
  PaymentPriceInfoWrapper: styled.section`
    display: flex;
    flex-direction: column;
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

  PriceInfoBanner: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 34.5rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.colors.coral};
    border-radius: 0.5rem;
  `,

  BannerText: styled.span`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body_regular_13};

    &.highlight {
      color: yellow;
    }
  `,

  PaymentMethodBoxWrapper: styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.4rem;

    padding-top: 0.4rem;
  `,
};
