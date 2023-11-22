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
    `,

  TextWrapper: styled.div`

    `,

  SmallTxt: styled.div`

    `,

  BigTxt: styled.div`

    `,
};
