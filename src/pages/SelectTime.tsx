import Footer from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectDate from '../components/SelectTime/SelectDate';
import SelectRegion from '../components/SelectTime/SelectRegion';

const SelectTime = () => {
  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectDate />
      <Footer />
    </>
  );
};

export default SelectTime;
