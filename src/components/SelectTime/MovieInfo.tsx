import { useState } from 'react';
import styled from 'styled-components';

import ALLImgUrl from '../../assets/image/img_all.png';
import PosterImgUrl from '../../assets/image/img_moviedetail1@2x.png';
import SelectTimeHeader from './SelectTimeHeader';

const DATA = {
  id: 1,
  title: '그대들은 어떻게 살 것인가',
  content:
    '화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 왜가리가 안내하는 대로 이세계의 문을 통과하는데…!',
  date: '2023.10.25',
  genre: '애니메이션',
  country: '일본',
  runningTime: '124분',
  posterImgUrl: PosterImgUrl,
};

const MovieInfo = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { posterImgUrl, title, date, genre, country, runningTime, content } = DATA;

  const handleSetClicked = () => {
    setClicked(true);
  };

  return (
    <St.MovieInfoWrapper>
      <SelectTimeHeader />
      <St.MovieInfo>
        <St.Poster src={posterImgUrl} alt="영화포스터이미지" />
        <St.InfoContent>
          <St.TitleWrapper>
            <St.AllImg src={ALLImgUrl} alt="관람등급이미지" />
            <St.MovieTitle>{title}</St.MovieTitle>
          </St.TitleWrapper>

          <St.ExtraInfo>
            {date} 개봉 · {genre} · {country} · {runningTime}
          </St.ExtraInfo>
          {!clicked ? (
            <St.ContentWrapper>
              <St.MovieContent>{content}</St.MovieContent>
              <St.ViewMoreBtn onClick={handleSetClicked} type="button">
                더보기
              </St.ViewMoreBtn>
            </St.ContentWrapper>
          ) : (
            <St.MovieContentShow>{content}</St.MovieContentShow>
          )}
        </St.InfoContent>
      </St.MovieInfo>
    </St.MovieInfoWrapper>
  );
};

export default MovieInfo;

const St = {
  MovieInfoWrapper: styled.section`
    width: 37.5rem;
    height: 26.3rem;
    background-image: url('image/img_background.png');
    background-size: cover;
  `,

  MovieInfo: styled.div`
    display: flex;
    gap: 1.2rem;

    width: 37.5rem;
    padding: 0.5rem 1.6rem;

    heigth: 21.5rem;
  `,

  Poster: styled.img`
    flex-shrink: 0;
    width: 14rem;
    height: 17.8rem;
  `,

  InfoContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 19.1rem;

    color: ${({ theme }) => theme.colors.white};
  `,

  TitleWrapper: styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;

    margin-bottom: 0.5rem;
    padding-top: 1.1rem;
  `,

  AllImg: styled.img`
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
  `,

  MovieTitle: styled.span`
    ${({ theme }) => theme.fonts.body_bold_15};
  `,

  ExtraInfo: styled.div`
    ${({ theme }) => theme.fonts.body_semibold_10};

    margin-bottom: 1rem;
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  `,

  MovieContent: styled.p`
    overflow: hidden;

    width: 19.1rem;
    height: 7.2rem;
    margin-bottom: 1rem;

    text-overflow: ellipsis;
    white-space: break-spaces;
    ${({ theme }) => theme.fonts.body_regular_10};
  `,

  MovieContentShow: styled.p`
    overflow: scroll;
    width: 19.1rem;
    height: 7.2rem;
    margin-bottom: 1rem;
    ${({ theme }) => theme.fonts.body_regular_10};

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  ViewMoreBtn: styled.button`
    width: 4.2rem;
    height: 1.8rem;
    padding: 0.2rem 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    border: 0.5px solid ${({ theme }) => theme.colors.white};
    border-radius: 1.4rem;

    ${({ theme }) => theme.fonts.body_semibold_10};
  `,
};
