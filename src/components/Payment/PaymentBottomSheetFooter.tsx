import styled from 'styled-components';

import { IcArrowUp } from '../../assets/icon';

const PaymentBottomSheetFooter = () => {
  return (
    <St.PaymentBottomSheetFooterWrapper>
      <IcArrowUp />
      <St.FooterPayButton>28000원 결제하기</St.FooterPayButton>
    </St.PaymentBottomSheetFooterWrapper>
  );
};

export default PaymentBottomSheetFooter;

const St = {
  PaymentBottomSheetFooterWrapper: styled.footer`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 8.8rem;
    padding-bottom: 2.3rem;

    border-radius: 1.8rem 1.8rem 0 0;
    box-shadow: 0 -0.4rem 0.4rem rgba(0, 0, 0, 0.15);
  `,

  FooterPayButton: styled.button`
    width: 34.4rem;
    height: 4rem;

    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.gradient};
    border: 0.5rem;
    border-radius: 0.5rem;

    ${({ theme }) => theme.fonts.body_semibold_16};
  `,
};
