import styled from 'styled-components';

const PaymentBottomSheetFooter = () => {
  return (
    <St.PaymentBottomSheetFooterWrapper>
      <St.FooterPayButton>28000원 결제하기</St.FooterPayButton>
    </St.PaymentBottomSheetFooterWrapper>
  );
};

export default PaymentBottomSheetFooter;

const St = {
  PaymentBottomSheetFooterWrapper: styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 8.8rem;
    padding-bottom: 2.3rem;
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
