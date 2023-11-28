import { useRef } from 'react';

import HomeHeader from './HomeHeader';
import MyTicket from './MyTicket';

const HomePage = () => {
  const myTicketSection = useRef<HTMLDivElement>(null);

  const handleClickBtn = () => {
    myTicketSection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeHeader onTicketClick={handleClickBtn} />
      <div ref={myTicketSection}>
        <MyTicket />
      </div>
    </>
  );
};

export default HomePage;
