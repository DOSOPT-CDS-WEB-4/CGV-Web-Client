import { useRef } from 'react';
import styled from 'styled-components';

import { IcCgvLogo, IcHamburger, IcSearch, IcTicket } from '../../assets/icon/index';
import MyTicket from './MyTicket';

const HomeHeader = () => {
  const myticketSection = useRef<HTMLDivElement>(null);

  const handleClickBtn = () => {
    myticketSection.current?.scrollIntoView({ behavior: 'smooth' });
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
      <div ref={myticketSection}>
        <MyTicket />
      </div>
    </>

  );
};

export default HomeHeader;

const St = {
  HeaderWrapper: styled.div`
    width: 100%;

    & > .hamburger {
      width: 2rem;
      height: 1.6rem;
      margin: 1.7rem 0rem 1.5rem 1.7rem;
    }

    & > .logo {
      width: 6rem;
      height: 2.5rem;
      margin: 1.3rem 8.7rem 1.0rem 11.9rem;
    }

    & > .search {
      width: 2.4rem;
      height: 2.4rem;
      margin: 1.5rem 0.3rem 1.1rem 0rem;
    }

    & > .ticket {
      width: 3rem;
      height: 2.4rem;
      margin: 1.5rem 1.5rem 1.1rem 0rem;
    }
`,
};
