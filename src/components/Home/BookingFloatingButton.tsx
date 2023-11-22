import styled from 'styled-components';

const BookingFloatingButton = () => {
  return (
    <St.BtnWrapper>
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
      width: 15.8rem;
      height: 5.5rem;
      top: 63.4rem;
      left: 25.2rem;
      flex-shrink: 0;
      border-radius: 5rem;
      background: ${({ theme }) => theme.colors['gradient']};
      box-shadow: 5px 6px 6px 0px rgba(0, 0, 0, 0.40);
    `,

  TextWrapper: styled.div`

    `,

  SmallTxt: styled.div`

    `,

  BigTxt: styled.div`

    `,
};
