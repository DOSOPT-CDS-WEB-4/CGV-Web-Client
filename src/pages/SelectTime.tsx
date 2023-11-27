import SelectTimeFooter from '../components/SelectTime/Footer';
import MovieInfo from '../components/SelectTime/MovieInfo';
import SelectRegion from '../components/SelectTime/SelectRegion';

const SelectTime = () => {
  return (
    <>
      <MovieInfo />
      <SelectRegion />
      <SelectTimeFooter />
    </>
  );
};

export default SelectTime;
