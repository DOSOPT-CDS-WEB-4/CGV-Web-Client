import styled from 'styled-components';

interface PaymentMethodBoxProps {
  isSelected: boolean;
  defaultIcon: string;
  selectedIcon: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PaymentMethodBox = ({
  isSelected,
  defaultIcon,
  selectedIcon,
  description,
  onClick,
}: PaymentMethodBoxProps) => {
  return (
    <St.PaymentMethodBoxContainer $isClicked={isSelected} onClick={onClick}>
      {isSelected ? (
        <img src={selectedIcon} alt="선택된-결제방법-박스-아이콘" />
      ) : (
        <img src={defaultIcon} alt="결제방법-박스-아이콘" />
      )}
      {description && (
        <St.PaymentMethodBoxText $isSelected={isSelected}>{description}</St.PaymentMethodBoxText>
      )}
    </St.PaymentMethodBoxContainer>
  );
};

export default PaymentMethodBox;

const St = {
  PaymentMethodBoxContainer: styled.button<{ $isClicked: boolean }>`
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

  PaymentMethodBoxText: styled.p<{ $isSelected: boolean }>`
    padding: 0.3rem 0 0.6rem 0;
    color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.gray900 : theme.colors.gray500};
    ${({ theme }) => theme.fonts.body_regular_12};
  `,
};
