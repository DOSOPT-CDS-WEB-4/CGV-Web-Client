import styled from 'styled-components';

import { IcMembership } from '../../assets/icon';
import img_mymenu1 from '../../assets/image/img_mymenu1.png';
import img_mymenu2 from '../../assets/image/img_mymenu2.png';
import img_mymenu3 from '../../assets/image/img_mymenu3.png';

const MyPage = () => {
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
        <St.IconWrapper>
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
      </St.ButtonWrapper>

      <St.Footer />
    </>
  );
};

export default MyPage;

const St = {
  TitleWrapper: styled.div`
    display: flex;
    padding: 1.9rem 2.3rem 0rem 2.5rem;
  `,

  UserWrapper: styled.div`
        color: ${({ theme }) => theme.colors['gray900']};
        ${({ theme }) => theme.fonts.body_semibold_18};

    & p.user {
      display: inline;
      color: ${({ theme }) => theme.colors['red']};
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

  ContentWrapper: styled.div`

    `,

  MyMovie: styled.p`

  `,

  MovieCount: styled.p`

  `,

  ButtonWrapper: styled.div`

  `,

  ButtonText: styled.p`
  `,

  Footer: styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 0.9rem;
    background: ${({ theme }) => theme.colors.gray100};
  `,
};
