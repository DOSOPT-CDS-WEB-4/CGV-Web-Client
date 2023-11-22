import styled from 'styled-components';

import { IcCgvLogo, IcHamburger, IcSearch, IcTicket } from '../../assets/icon/index';

const HomeHeader = () => {
  return (

    <St.HeaderWrapper>
      <St.LogoWrapper>
        <IcHamburger className='hamburger' />
        <IcCgvLogo className='logo' />
        <IcSearch className='search' />
        <IcTicket className='ticket' />
      </St.LogoWrapper>
    </St.HeaderWrapper>
  );
};

export default HomeHeader;

const St = {
  HeaderWrapper: styled.div`

  `,

  LogoWrapper: styled.div`
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
