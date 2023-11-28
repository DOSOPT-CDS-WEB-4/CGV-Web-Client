import { useState } from 'react';
import styled from 'styled-components';

import { IcArrowBottom, IcMembership } from '../../assets/icon';
import img_mymenu1 from '../../assets/image/img_mymenu1.png';
import img_mymenu2 from '../../assets/image/img_mymenu2.png';
import img_mymenu3 from '../../assets/image/img_mymenu3.png';

const MyPage = () => {

  const [clickedBtn, setClickedBtn] = useState<boolean>(false);

  const handleButton = () => {
    setClickedBtn(true);
  };

  return (
    <>
      <St.TitleWrapper>
        <St.UserWrapper>
          <div className='text'>
            <span className='first-line'>
              <p className='user'>홍길동</p>님,
            </span>
            <p className='second-line'>진짜 안 본 영화가 없으시군요?</p>
          </div>
        </St.UserWrapper>
        <St.IconWrapper className=''>
          <IcMembership/>
        </St.IconWrapper>
      </St.TitleWrapper>

      <St.ContentWrapper>
        <img src={img_mymenu1} alt='내가 본 영화' />
        <St.MyMovie>내가 본 영화</St.MyMovie>
        <St.MovieCount>28편</St.MovieCount>
      </St.ContentWrapper>
      <St.ContentWrapper>
        <img src={img_mymenu2} alt='기대되는 영화' />
        <St.MyMovie>기대되는 영화</St.MyMovie>
        <St.MovieCount>55편</St.MovieCount>
      </St.ContentWrapper>
      <St.ContentWrapper>
        <img src={img_mymenu3} alt='기대되는 영화' />
        <St.MyMovie>내가 쓴 리뷰</St.MyMovie>
        <St.MovieCount>18편</St.MovieCount>
      </St.ContentWrapper>
      
      <St.ButtonWrapper>
        <St.DetailButton 
          type='button'
          onClick={() => {handleButton();}}
          className={clickedBtn ? 'active' : 'not-active'}
        >
          <St.ButtonText
          >더 자세히 보기</St.ButtonText>
          <IcArrowBottom/>
        </St.DetailButton>
      </St.ButtonWrapper>

      <St.BottomLine />
    </>
  );
};

export default MyPage;

const St = {
  TitleWrapper: styled.div`
    display: flex;
    padding: 1.9rem 1.5rem 2.4rem 2.3rem;
  `,

  UserWrapper: styled.article`
        color: ${({ theme }) => theme.colors.gray900};
        ${({ theme }) => theme.fonts.body_semibold_18};

    & p.user {
      display: inline;
      color: ${({ theme }) => theme.colors.red};
      ${({ theme }) => theme.fonts.body_semibold_18};
    }

    & span.first-line {
      ${({ theme }) => theme.fonts.body_semibold_18};
    }

    & p.second-line {
      ${({ theme }) => theme.fonts.body_semibold_18};
    } 
    `,
  
  IconWrapper: styled.div`
      display: inline;
      margin-left: auto;
  `,

  ContentWrapper: styled.section`
        display: flex;
        flex-shrink: 0;
        align-items: center;

        width: 34.4rem;
        height: 4.4rem;
        margin: 0.8rem 1.7rem 0.4rem 1.4rem;
        padding: 0rem 1.9rem 0rem 0.8rem;

        background: ${({ theme }) => theme.colors.gray100};
        border-radius: 5rem;

        & > img {
          width: 3rem;
          height: 3rem;
        }
    `,

  MyMovie: styled.p`
    margin-left: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_15};
  `,

  MovieCount: styled.p`
      margin-left: auto;
      color: ${({ theme }) => theme.colors.red};
      white-space: nowrap;
      ${({ theme }) => theme.fonts.body_medium_15};
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,

  DetailButton: styled.button`
    display: flex;

    width: 19.2rem;
    height: 3.8rem;
    padding: 1rem 3.6rem 1rem 4.3rem;

    border: 1px solid ${({ theme }) => theme.colors.red};
    border-radius: 5rem;

    & > svg {
      margin-left: auto;
    }

    &.active {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.gradient};
    }

    &.active > p {
      color: ${({ theme }) => theme.colors.white};
    }

    &.active > svg {
      path {
	    fill: ${({ theme }) => theme.colors.white};
      }
    }
  `,

  ButtonText: styled.p`
    margin-left: auto;
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.body_regular_16};
  `,

  BottomLine: styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 0.9rem;
    background: ${({ theme }) => theme.colors.gray100};
  `,
};
