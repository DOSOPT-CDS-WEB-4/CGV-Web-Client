import { IcCgvLogo } from '../assets/icon';
import img_movie_1 from '../assets/image/img_movie1.png';

const Home = () => {
  return (
    <div>
      홈 화면 페이지입니다.
      <IcCgvLogo />
      <img src={img_movie_1} alt="영화-이미지-1" />
    </div>
  );
};

export default Home;
