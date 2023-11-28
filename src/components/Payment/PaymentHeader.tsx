import styled from 'styled-components';

const PaymentHeader = () => {
  return (
    <St.PaymentHeader>
      <St.PaymentHeaderTitle>결제</St.PaymentHeaderTitle>
    </St.PaymentHeader>
  );
};

export default PaymentHeader;

const St = {
  PaymentHeader: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 4.7rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  `,
  PaymentHeaderTitle: styled.h1`
    ${({ theme }) => theme.fonts.body_medium_15};
  `,
};
