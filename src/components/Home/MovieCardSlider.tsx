import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from 'react-slick';
import styled from 'styled-components';

import DATA from '../../constants/Movie';
import MovieCard, { MovieCardContents } from "./MovieCard";

const MovieCardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    variableWidth: true, // Allow variable width of slides
    arrows: false,
  };

  return (
    <St.MovieListWrapper>
      <Slider {...settings}>
        {DATA.slice(0, 5).map((movie: MovieCardContents, index: number) => (
          <MovieCard key={index}
            posterImg={movie.posterImg}
            title={movie.title}
            ranking={movie.ranking}
            audience={movie.audience}
            like={movie.like}
          />
        ))}
      </Slider>
    </St.MovieListWrapper>
  );
};

export default MovieCardSlider;

const St = {
  MovieListWrapper: styled.div`
    padding: 1.6rem 0rem 1.3rem 0rem;
  `,

};
