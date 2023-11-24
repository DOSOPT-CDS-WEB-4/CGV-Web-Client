import styled from 'styled-components';

import SelectTimeHeader from './SelectTimeHeader';

const MovieInfo = () => {
  return (
    <>
      <MovieInfoWrapper>
        <SelectTimeHeader />
      </MovieInfoWrapper>
    </>
  );
};

export default MovieInfo;

const MovieInfoWrapper = styled.section`
  width: 37.5rem;
  height: 26.3rem;
  background-image: url('image/img_background.png');
  background-size: cover;
`;
