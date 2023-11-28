import PaymentHeader from '../components/Payment/PaymentHeader';
import PaymentMovieInfo from '../components/Payment/PaymentMovieInfo';
import PaymentPriceOptions from '../components/Payment/PaymentPriceOptions';

const Payment = () => {
  return (
    <div>
      <PaymentHeader />
      <PaymentMovieInfo />
      <PaymentPriceOptions />
    </div>
  );
};

export default Payment;
