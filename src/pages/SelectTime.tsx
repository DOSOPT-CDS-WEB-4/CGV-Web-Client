import styled from 'styled-components';
import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectRegion from '../components/SelectTime/SelectRegion';

const SelectTime = () => {
  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectDate />
      <St.MiddleLine />
      <SelectMovieTime />
      <Footer />
    </>
  );
};

export default SelectTime;

const St = {
  MiddleLine: styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray100};
  `,
};
