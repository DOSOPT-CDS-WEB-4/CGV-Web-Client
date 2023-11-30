import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ALLImgUrl from '../../assets/image/img_all.png';
import { selectTimeMovieInfo } from '../../recoil/atom';
import SelectTimeHeader from './SelectTimeHeader';

const MovieInfo = () => {
  const movieInfo = useRecoilValue(selectTimeMovieInfo);

  const [clicked, setClicked] = useState<boolean>(false);
  const { title, summary, opening_date, genre, running_time, country, poster, background } =
    movieInfo;

  const handleSetClicked = () => {
    setClicked(true);
  };

  return (
    <St.MovieInfoWrapper background={background}>
      <SelectTimeHeader />
      <St.MovieInfo>
        <St.Poster src={poster} alt="영화포스터이미지" />
        <St.InfoContent>
          <St.TitleWrapper>
            <St.AllImg src={ALLImgUrl} alt="관람등급이미지" />
            <St.MovieTitle>{title}</St.MovieTitle>
          </St.TitleWrapper>

          <St.ExtraInfo>
            {opening_date} 개봉 · {genre} · {country} · {running_time}
          </St.ExtraInfo>
          {!clicked ? (
            <St.ContentWrapper>
              <St.MovieContent>{summary}</St.MovieContent>
              <St.ViewMoreBtn onClick={handleSetClicked} type="button">
                더보기
              </St.ViewMoreBtn>
            </St.ContentWrapper>
          ) : (
            <St.MovieContentShow>{summary}</St.MovieContentShow>
          )}
        </St.InfoContent>
      </St.MovieInfo>
    </St.MovieInfoWrapper>
  );
};

export default MovieInfo;

const St = {
  MovieInfoWrapper: styled.section<{ background: string }>`
    width: 37.5rem;
    height: 26.3rem;
    background-image: url(${({ background }) => background});
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
