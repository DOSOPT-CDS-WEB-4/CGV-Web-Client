import { useRef } from 'react';
import styled from 'styled-components';

import { IcCgvLogo, IcHamburger, IcSearch, IcTicket } from '../../assets/icon/index';
import MyTicket from './MyTicket';

const HomeHeader = () => {
  const myTicketSection = useRef<HTMLDivElement>(null);

  const handleClickBtn = () => {
    myTicketSection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <St.HeaderWrapper>
        <IcHamburger className='hamburger' />
        <IcCgvLogo className='logo' />
        <IcSearch className='search' />
        <IcTicket
          className='ticket'
          onClick={handleClickBtn} />
      </St.HeaderWrapper>
      <div ref={myTicketSection}>
        <MyTicket />
      </div>
    </>

  );
};

export default HomeHeader;

const St = {
  HeaderWrapper: styled.div`
    width: 100%;
    padding : 1.3rem 1.5rem 1rem 1.5rem;

    & > .hamburger {
      margin-right: 11.7rem;
    }

    & > .logo {
      width: 6rem;
      height: 2.5rem;
      margin-right: 8.7rem;
    }

    & > .search {
      margin-right: 0.3rem;
    }

    & > .ticket {
      margin-left: auto;
    }
`,
};
