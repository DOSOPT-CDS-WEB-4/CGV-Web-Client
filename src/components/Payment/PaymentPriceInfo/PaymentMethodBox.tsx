import styled, { css } from 'styled-components';

interface PaymentMethodBoxProps {
  isClicked: boolean;
  icon: string;
  description: string;
}

const PaymentMethodBox = ({ isClicked, icon, description }: PaymentMethodBoxProps) => {
  return (
    <St.PaymentMethodBoxContainer $isClicked={isClicked}>
      <St.PaymentMethodIcon src={icon} $description={description} alt="결제방법-박스-아이콘" />
      {description && <St.PaymentMethodBoxText>{description}</St.PaymentMethodBoxText>}
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

    background-color: ${({ theme }) => theme.colors.white};
    border: 0.1rem solid
      ${({ $isClicked, theme }) => ($isClicked ? theme.colors.gray900 : theme.colors.gray200)};
    border-radius: 0.2rem;
  `,

  PaymentMethodIcon: styled.img<{ $description: string }>`
    ${({ $description }) =>
    $description === '' &&
      css`
        width: 6.3rem;
        height: 1.8rem;
      `};
  `,

  PaymentMethodBoxText: styled.p`
    padding: 0.3rem 0 0.6rem 0;
    color: ${({ theme }) => theme.colors.gray500};
    ${({ theme }) => theme.fonts.body_regular_12};
  `,
};
