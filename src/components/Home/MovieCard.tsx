import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { IcHeartOn } from '../../assets/icon';
import img_all from '../../assets/image/img_all.png';
import { patchLikeData } from '../../libs/like';
import { movieInfoTypes } from '../../types/movieInfo';

const MovieCard = ({ movie_id, title, poster_url, ranking, total_audience, like_count }: movieInfoTypes) => {

  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(like_count);

  const handleCard = () => {
    setSelectedCard(!selectedCard);
  };

  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const patchData = async () => {
      const { message, isError } = await patchLikeData(movie_id);
      if (!isError) setIsLike(!isLike);
    
      if (message === '영화 좋아요에 성공했습니다.') {
        setLikeCount(likeCount + 1);
        console.log("성공", like_count);
      } else {
        setLikeCount(likeCount - 1);
        console.log("취소", like_count);
      }
    };
    patchData();
  };

  const navigate = useNavigate();
  const handleBooking = () => {
    navigate('/select-time', {
      state: { movie_id },
    });
  };

  return (
    <St.MovieCardWrapper
      onClick={() => {handleCard();}}
      className={selectedCard ? 'selected' : 'not-selected'}>
      <St.MoviePoster src={poster_url} alt="Movie-Poster" />

    <St.MovieTitleWrapper>
      <St.AllImg src={img_all} alt="all-img" />
      < St.MovieTitle>{title}</St.MovieTitle>
    </St.MovieTitleWrapper>

      <St.Ranking>{ranking}</St.Ranking>
      <St.Audience>누적관객 {total_audience}</St.Audience>
      <St.BookingBtn
        onClick={handleBooking}>예매하기</St.BookingBtn>
      <St.LikeBtn
        onClick={(e) => {handleButton(e);}}
        className={isLike ? 'fill-heart' : 'empty-heart'}>
        <IcHeartOn />
        <St.LikeNumber>{likeCount}</St.LikeNumber>
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

  MovieTitleWrapper: styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row; 
    align-items: center; 
  `,
  
  AllImg: styled.img`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.5rem;
  `,

  MovieTitle: styled.p`
    margin-top: 0.2rem;
    ${({ theme }) => theme.fonts.body_medium_12};
  `,

  Ranking: styled.div`
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

    &.empty-heart > svg {
        path {
            fill: none;
            stroke: ${({ theme }) => theme.colors.red};
        }
    }
  `,

  LikeNumber: styled.p`
    ${({ theme }) => theme.fonts.body_regular_12};

    margin-top: 0.1rem;
    margin-left: 0.2rem;
  `,
};
