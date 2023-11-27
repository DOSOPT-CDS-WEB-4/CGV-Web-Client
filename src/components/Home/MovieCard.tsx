import React, { useState } from 'react';
import styled from 'styled-components';

import { IcHeartOn } from '../../assets/icon';
import img_all from '../../assets/image/img_all.png';

export interface MovieCardContents {
  posterImg: string;
  title: string;
  ranking: string;
  audience: string;
  like: number;
}

const MovieCard: React.FC<MovieCardContents> = (props) => {
  const { posterImg, title, ranking, audience, like } = props;

  const [selectedCard, setSelectedCard] = useState<boolean>(false);

  const handleCard = () => {
    setSelectedCard(true);
  };

  return (
    <St.MovieCardWrapper
      onClick={() => {handleCard();
        console.log('클릭됨');}}
      className={selectedCard ? 'selected' : 'not-selected'}>
      <St.MoviePoster src={posterImg} alt="Movie-Poster" />
      <St.AllImg src={img_all} alt="all-img" />
      <St.MovieTitle>{title}</St.MovieTitle>
      <St.Ranking>{ranking}</St.Ranking>
      <St.Audience>누적관객 {audience}</St.Audience>
      <St.BookingBtn>예매하기</St.BookingBtn>
      <St.LikeBtn>
        <IcHeartOn />
        <St.LikeNumber>{like}</St.LikeNumber>
      </St.LikeBtn>
    </St.MovieCardWrapper>
  );
};

export default MovieCard;

const St = {
  MovieCardWrapper: styled.div`
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;

    box-sizing: border-box;
    width: 17.6rem;
    height: 32.6rem;
    margin-right: 0.8rem;
    padding: 1rem 1.1rem 0.9rem 1.1rem;

    border-radius: 2rem;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.20);

    &.selected {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gradient};
    }

    &.selected > button {
        color: ${({ theme }) => theme.colors.red};
        background-color: ${({ theme }) => theme.colors.white};
    }
  `,

  MoviePoster: styled.img`
    width: 15.4rem;
    height: 21.9rem;
    margin-bottom: 1rem;
    border-radius: 1.4rem;
  `,

  AllImg: styled.img`
    display: inline;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.5rem;
  `,

  MovieTitle: styled.p`
    display: inline;
    margin-top: 0.2rem;
    ${({ theme }) => theme.fonts.body_medium_12};
  `,

  Ranking: styled.p`
    margin: 0.8rem 1rem 0.8rem 2rem;
    ${({ theme }) => theme.fonts.body_regular_12};
  `,

  Audience: styled.p`
    margin-top: 0.8rem;
    ${({ theme }) => theme.fonts.body_regular_12};
  `,

  BookingBtn: styled.button`
    flex-shrink: 0;

    width: 10.3rem;
    height: 2.7rem;
    margin-right: 0.4rem;

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.body_regular_13};

    border: 1px solid ${({ theme }) => theme.colors.red};
    border-radius: 5rem;
  `,

  LikeBtn: styled.button`
    display: flex;

    width: 4.6rem;
    height: 2.7rem;
    padding: 0.6rem 0rem 0.7rem 0.5rem;

    color: ${({ theme }) => theme.colors.red};

    border: 1px solid ${({ theme }) => theme.colors.red};
    border-radius: 5rem;
  `,

  LikeNumber: styled.p`
    ${({ theme }) => theme.fonts.body_regular_12};

    margin-top: 0.1rem;
    margin-left: 0.2rem;
  `,
};
