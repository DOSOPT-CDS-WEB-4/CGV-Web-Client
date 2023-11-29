import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { getMovieInfoData } from '../../libs/movieCardInfo';
import { movieInfoTypes } from '../../types/movieInfo';
import MovieCard from './MovieCard';

const MovieCardSlider = () => {
  const [movieData, setMovieData] = useState<movieInfoTypes[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
  };

  useEffect(() => {
    getMovieInfoData().then((response) => {
      if (response.data) {
        setMovieData(response.data.slice(0, 5));
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <St.MovieListWrapper>
      <St.MovieCardSlider {...settings}>
        {movieData.map(({ movie_id, poster_url, title, ranking, total_audience, like_count }: movieInfoTypes) => (
          <MovieCard
            key={movie_id}
            movie_id={movie_id}
            poster_url={poster_url}
            title={title}
            ranking={ranking}
            total_audience={total_audience}
            like_count={like_count}
          />
        ))}
      </St.MovieCardSlider>
    </St.MovieListWrapper>
  );
};

export default MovieCardSlider;

const St = {
  MovieListWrapper: styled.div`
    width: 100%;
    height: auto;
    padding: 1.6rem 0rem 1.3rem 0rem;
  `,

  MovieCardSlider: styled(Slider)`
    .slick-slide > div {
      padding-right: 0.4rem;
    }

    .slick-track {
      height: 35.2rem;
    }

    .slick-dots {
      padding: 2.2rem;
    }
  `,
};
