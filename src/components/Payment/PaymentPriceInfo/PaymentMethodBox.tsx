import styled from 'styled-components';

import { IcCard } from '../../../assets/icon';

const PaymentMethodBox = ({ isClicked }: { isClicked: boolean }) => {
  return (
    <St.PaymentMethodBoxContainer $isClicked={isClicked}>
      <IcCard />
      <St.PaymentMethodBoxText>스마트 결제</St.PaymentMethodBoxText>
    </St.PaymentMethodBoxContainer>
  );
};

export default PaymentMethodBox;

const St = {
  PaymentMethodBoxContainer: styled.div<{ $isClicked: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 11.2rem;
    height: 6.2rem;
    padding-bottom: 0.6rem;

    background-color: ${({ theme }) => theme.colors.white};
    border: 0.1rem solid
      ${({ $isClicked, theme }) => ($isClicked ? theme.colors.gray900 : theme.colors.gray200)};
    border-radius: 0.2rem;
  `,

  PaymentMethodBoxText: styled.p`
    padding: 0.3rem;
    color: ${({ theme }) => theme.colors.gray500};
    ${({ theme }) => theme.fonts.body_regular_12};
  `,
};
