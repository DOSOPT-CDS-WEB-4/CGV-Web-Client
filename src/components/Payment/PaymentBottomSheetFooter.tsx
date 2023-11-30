import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IcArrowUp } from '../../assets/icon';
import { patchPaymentScheduleData } from '../../libs/payment';

const PaymentBottomSheetFooter = () => {
  const navigate = useNavigate();

  const CHARGE_AMOUNT = 28000;
  const MOVIE_ID = 1;

  const hanldeClickpayBtn = () => {
    const patchPaymentSchedule = async () => {
      const { message, isError } = await patchPaymentScheduleData(MOVIE_ID);

      const alert_message = message ? message : '결제에 실패했습니다. 다시 시도해주세요';
      alert(alert_message);
      !isError && navigate('/');
    };

    patchPaymentSchedule();
  };

  return (
    <St.PaymentBottomSheetFooterWrapper>
      <IcArrowUp />
      <St.FooterPayButton type="button" onClick={hanldeClickpayBtn}>
        {CHARGE_AMOUNT.toLocaleString()}원 결제하기
      </St.FooterPayButton>
    </St.PaymentBottomSheetFooterWrapper>
  );
};

export default PaymentBottomSheetFooter;

const St = {
  PaymentBottomSheetFooterWrapper: styled.footer`
    position: fixed;
    z-index: 10rem;
    bottom: 0;

    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 8.8rem;
    padding-bottom: 2.3rem;

    background-color: ${({ theme }) => theme.colors.white};
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
