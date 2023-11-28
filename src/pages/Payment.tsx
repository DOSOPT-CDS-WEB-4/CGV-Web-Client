import PaymentBottomSheetFooter from '../components/Payment/PaymentBottomSheetFooter';
import PaymentHeader from '../components/Payment/PaymentHeader';
import PaymentMovieInfo from '../components/Payment/PaymentMovieInfo';
import PaymentPriceInfo from '../components/Payment/PaymentPriceInfo/PaymentPriceInfo';
import PaymentPriceOptions from '../components/Payment/PaymentPriceOptions';

const Payment = () => {
  return (
    <>
      <PaymentHeader />
      <PaymentMovieInfo />
      <PaymentPriceOptions />
      <PaymentPriceInfo />
      <PaymentBottomSheetFooter />
    </>
  );
};

export default Payment;
