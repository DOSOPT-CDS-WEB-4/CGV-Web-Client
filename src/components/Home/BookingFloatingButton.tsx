import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { IcBtnFloating } from '../../assets/icon';
import { movieInfoState } from '../../recoil/atom';

const BookingFloatingButton = () => {
  const navigate = useNavigate();
  const movieId = useRecoilValue(movieInfoState).movie_id;

  const handleBtn = () => {
    if (movieId !== 0) navigate('/select-time');
  };

  return (
    <St.ButtonWrapper>
      <IcBtnFloating
        type='button'
        onClick={() => {
          handleBtn();
        }}
       />
    </St.ButtonWrapper>
  );
};
export default BookingFloatingButton;
const St = {
  ButtonWrapper: styled.div`
    position: fixed;
    float: right;
    margin-top: 63.5rem;
    margin-left: 30.7rem;
  `,
};
