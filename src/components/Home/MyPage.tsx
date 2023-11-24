import styled from 'styled-components';

import { IcMembership } from '../../assets/icon/index';

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
        <IcMembership />
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
    `,

  Text: styled.p`

    `,

  ContentWrapper: styled.div`


        & > p {

        }

        & > p.movie-count {
        }
    `,

  BodyWrapper: styled.div`
    `,

};
