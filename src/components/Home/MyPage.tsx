import styled from 'styled-components';

// import { IcProfile } from '../../assets/icon';

const MyPage = () => {
  return (
    <>
      <St.HeaderWrapper>
        <St.User>
          홍길동
        </St.User>
        <St.Text>
          님, <br />
          진짜 안 본 영화가 없으시군요?
        </St.Text>
        {/* <IcProfile /> */}
      </St.HeaderWrapper>
      <St.BodyWrapper>
        <St.ContentWrapper>
          <p>내가 본 영화</p>
          <p className='movie-count'>28편</p>
        </St.ContentWrapper>
        <St.ContentWrapper>
          <p>기대되는 영화</p>
          <p className='movie-count'>55편</p>
        </St.ContentWrapper>
        <St.ContentWrapper>
          <p>내가 쓴 리뷰</p>
          <p className='movie-count'>18편</p>
        </St.ContentWrapper>
      </St.BodyWrapper>
    </>
  );
};

export default MyPage;

const St = {
  HeaderWrapper: styled.div`
        margin: 1.9rem 7.5rem 2.4rem 1.5rem;
    `,

  User: styled.p`
        display: inline;
        color: ${({ theme }) => theme.colors['red']};
        font-family: Apple SD Gothic Neo;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.4rem;
    `,

  Text: styled.p`
        display: inline;
        color: ${({ theme }) => theme.colors['gray900']};
        font-family: Apple SD Gothic Neo;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.4rem;
    `,

  ContentWrapper: styled.div`
        width: 34.4rem;
        height: 4.4rem;
        flex-shrink: 0;
        border-radius: 5rem;
        background: ${({ theme }) => theme.colors['gray100']};
        margin: 2.4rem 1.7rem 0.4rem 1.4rem;

        & > p {
            padding: 1.5rem 17.1rem 1.4rem 5.1rem;
            color: ${({ theme }) => theme.colors['gray900']};
            font-family: Apple SD Gothic Neo;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; 
            letter-spacing: -0.0075rem;
        }

        & > p.movie-count {
            color: ${({ theme }) => theme.colors['red']};
            text-align: right;
            font-family: Apple SD Gothic Neo;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 15px */
            letter-spacing: -0.075px;
        }
    `,

  BodyWrapper: styled.div`
    `,

};
