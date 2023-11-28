import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectMovieTime from '../components/SelectTime/SelectMovie';
import SelectRegion from '../components/SelectTime/SelectRegion';

const SelectTime = () => {
  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectMovieTime />
      <Footer />
    </>
  );
};

export default SelectTime;
