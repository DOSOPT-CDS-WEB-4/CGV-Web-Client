import { useRef } from 'react';
import styled from 'styled-components';

import BookingFloatingButton from '../components/Home/BookingFloatingButton';
import CommercialSlider from '../components/Home/CommercialSlider';
import HomeHeader from '../components/Home/HomeHeader';
import MenuBar from '../components/Home/MenuBar';
import MovieCardSlider from '../components/Home/MovieCardSlider';
import MovieChartHeader from '../components/Home/MovieChartHeader';
import MyCgvMenu from '../components/Home/MyCgvMenu';
import MyPage from '../components/Home/MyPage';
import MyTicket from '../components/Home/MyTicket';
import TopButton from '../components/Home/TopButton';

const Home = () => {
  const myTicketSectionRef = useRef<HTMLDivElement>(null);

  const handleTicketClick = () => {
    if (myTicketSectionRef.current) {
      myTicketSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <St.HomePageWrapper>
      <HomeHeader onTicketClick={handleTicketClick} />
      <CommercialSlider />
      <MenuBar />
      <MovieChartHeader />
      <MovieCardSlider />
      <MyCgvMenu />
      <MyPage />
      <MyTicket ref={myTicketSectionRef} />
      <TopButton />
      <BookingFloatingButton selectedCard={false}/>
    </St.HomePageWrapper>
  );
};

export default Home;

const St = {
  HomePageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
};
