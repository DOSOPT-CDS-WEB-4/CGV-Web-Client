import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { movieInfoState } from '../../recoil/atom';

const BookingFloatingButton = () => {
  const navigate = useNavigate();
  const movieId = useRecoilValue(movieInfoState).movie_id;

  const handleBtn = () => {
    if (movieId !== 0) navigate('/select-time');
    return movieId;
  };

  return (
    <St.ButtonWrapper>
      <St.ButtonContents
        type='button'
        onClick={() => {
          handleBtn();
        }}
        disabled={(movieId === 0)}
      >
        <St.TextWrapper>
          <St.SmallTxt>빠르고 쉽게</St.SmallTxt>
          <St.BigTxt>지금예매</St.BigTxt>
        </St.TextWrapper>
      </St.ButtonContents>
    </St.ButtonWrapper>
  );
};
export default BookingFloatingButton;
const St = {
  ButtonWrapper: styled.div`
    position: fixed;
    top: 73.2%;
    left: 65.2%;
    width: 100%;
  `,
  ButtonContents: styled.button`
    flex-shrink: 0;

    width: 15.8rem;
    height: 5.5rem;

    background: ${({ theme }) => theme.colors.gradient2};
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
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body_regular_10};
  `,
  BigTxt: styled.div`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body_semibold_16};
  `,
};
