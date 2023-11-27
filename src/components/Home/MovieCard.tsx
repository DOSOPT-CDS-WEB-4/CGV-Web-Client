import styled from 'styled-components';

import img_all from '../../assets/image/img_all.png';
import DATA from '../../constants/Movie';

const MovieCard = () => {
  return (
    <St.MovieListWrapper>
      <St.MovieCardWrapper>
        <St.MoviePoster src={DATA[0].posterImg} alt="Movie-Poster" />
        <St.AllImg src={img_all} alt="all-img" />
        <St.MovieTitle>{DATA[0].title}</St.MovieTitle>
        <St.Ranking>{DATA[0].ranking}</St.Ranking>
        <St.Audience>누적관객 {DATA[0].audience}</St.Audience>
        <St.BookingBtn>예매하기</St.BookingBtn>
        <St.LikeBtn>{DATA[0].like}</St.LikeBtn>
      </St.MovieCardWrapper>
    </St.MovieListWrapper>
  );
};

export default MovieCard;

const St = {
  MovieListWrapper: styled.div`
    padding: 1.6rem 0rem 1.3rem 0rem;
  `,

  MovieCardWrapper: styled.li`
    flex-shrink: 0;

    width: 17.6rem;
    height: 32.6rem;
    padding: 1rem 1.1rem 0.9rem 1.1rem;

    list-style: none;

    border-radius: 2rem;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.20);

  `,

  MoviePoster: styled.img`
    width: 15.4rem;
    height: 21.9rem;
    border-radius: 1.4rem;

  `,

  MovieTitle: styled.p`

    
    `,

  AllImg: styled.img`
    width: 1.6rem;
    height: 1.6rem;
`,

  Ranking: styled.p`
  
`,

  Audience: styled.p`
  
`,

  BookingBtn: styled.button`
    border: 1px solid ${({ theme }) => theme.colors.red};
`,

  LikeBtn: styled.button`
    border: 1px solid ${({ theme }) => theme.colors.red};
`,

};
