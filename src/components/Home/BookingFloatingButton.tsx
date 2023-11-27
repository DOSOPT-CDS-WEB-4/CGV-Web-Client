import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

interface BookingFloatingButtonProps {
  selectedCard: boolean;
}

const BookingFloatingButton: React.FC<BookingFloatingButtonProps> = ({ selectedCard }) => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate('/select-time');
  };

  return (
    <St.BtnWrapper
      onClick={handleBtn}
      disabled={!selectedCard}
    >
      <St.TextWrapper>
        <St.SmallTxt>빠르고 쉽게</St.SmallTxt>
        <St.BigTxt>지금예매</St.BigTxt>
      </St.TextWrapper>
    </St.BtnWrapper>
  );
};

export default BookingFloatingButton;

const St = {
  BtnWrapper: styled.button`
    position: fixed;
    top: 63.4rem;
    left: 25.2rem;

    flex-shrink: 0;

    width: 15.8rem;
    height: 5.5rem;

    background: ${({ theme }) => theme.colors['gradient']};
    border-radius: 5rem;
    box-shadow: 5px 6px 6px 0px rgba(0, 0, 0, 0.40);
  `,

  TextWrapper: styled.div`
    flex-direction: column;
    flex-shrink: 0;

    width: 6rem;
    margin: 1.3rem 7.6rem 1.2rem 2.2rem;

    text-align: left;
  `,

  SmallTxt: styled.div`
    color: ${({ theme }) => theme.colors['white']};
    ${({ theme }) => theme.fonts['body_regular_10']};
  `,

  BigTxt: styled.div`
    color: ${({ theme }) => theme.colors['white']};
    ${({ theme }) => theme.fonts['body_semibold_16']};
  `,
};
