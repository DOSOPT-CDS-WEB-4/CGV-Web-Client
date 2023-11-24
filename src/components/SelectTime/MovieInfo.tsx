import styled from 'styled-components';

import ALLImgUrl from '../../assets/image/img_all.png';
import PosterImgUrl from '../../assets/image/img_movie.png';
import SelectTimeHeader from './SelectTimeHeader';

const DATA = {
  id: 1,
  title: '그대들은 어떻게 살 것인가',
  content:
    '화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!',
  date: '2023.10.25',
  genre: '애니메이션',
  country: '일본',
  runningTime: '124분',
  posterImgUrl: PosterImgUrl,
};

const MovieInfo = () => {
  return (
    <>
      <St.MovieInfoWrapper>
        <SelectTimeHeader />
        <div>
          <img src={DATA.posterImgUrl} alt="영화포스터이미지" />
          <div>
            <div>
              <img src={ALLImgUrl} alt="관람등급이미지" />
              <span>{DATA.title}</span>
            </div>

            <div>
              <span>{DATA.date}개봉</span>
              <span>{DATA.genre}</span>
              <span>{DATA.country}</span>
              <span>{DATA.runningTime}</span>
            </div>
            <p>{DATA.content}</p>
            <button>더보기</button>
          </div>
        </div>
      </St.MovieInfoWrapper>
    </>
  );
};

export default MovieInfo;

const St = {
  MovieInfoWrapper: styled.section`
    width: 37.5rem;
    height: 26.3rem;
    background-image: url('image/img_background.png');
    background-size: cover;
  `,
};
