import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from 'react-slick';
import styled from 'styled-components';

import DATA from '../../constants/Movie';
import MovieCard, { MovieCardProps } from "./MovieCard";

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
      <St.MovieCardSlider {...settings}>
        {DATA.slice(0, 5).map(({ id, posterImg, title, ranking, audience, like } : MovieCardProps) => (
          <MovieCard key={id}
            id={id}
            posterImg={posterImg}
            title={title}
            ranking={ranking}
            audience={audience}
            like={like}
          />
        ))}
      </St.MovieCardSlider>
    </St.MovieListWrapper>
  );
};

export default MovieCardSlider;

const St = {
  MovieListWrapper: styled.div`
    padding: 1.6rem 0rem 1.3rem 0rem;
  `,

  MovieCardSlider: styled(Slider)`
    .slick-slide > div {
      padding-right: 0.4rem;
    }

    .slick-track {
      height: 33rem;
    }
  `,

};
