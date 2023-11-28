import styled from 'styled-components';

import PaymentBottomSheetFooter from '../components/Payment/PaymentBottomSheetFooter';
import PaymentHeader from '../components/Payment/PaymentHeader';
import PaymentMovieInfo from '../components/Payment/PaymentMovieInfo';
import PaymentPriceInfo from '../components/Payment/PaymentPriceInfo/PaymentPriceInfo';
import PaymentPriceOptions from '../components/Payment/PaymentPriceOptions';

const Payment = () => {
  return (
    <St.PaymentPageWrapper>
      <PaymentHeader />
      <PaymentMovieInfo />
      <PaymentPriceOptions />
      <PaymentPriceInfo />
      <PaymentBottomSheetFooter />
    </St.PaymentPageWrapper>
  );
};

export default Payment;

const St = {
  PaymentPageWrapper: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100dvh;
    margin-bottom: 8.8rem;
  `,
};
