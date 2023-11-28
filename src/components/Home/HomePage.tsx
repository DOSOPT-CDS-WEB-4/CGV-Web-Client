import styled from 'styled-components';

import { IcCgvLogo, IcHamburger, IcSearch, IcTicket } from '../../assets/icon/index';

interface HomeHeaderProps {
  onTicketClick: () => void;
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const HomeHeader = ({ onTicketClick, scrollToRef }: HomeHeaderProps) => {

  const handleTicketClick = () => {
    onTicketClick();
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <St.HeaderWrapper>
      <IcHamburger className='hamburger'/>
      <IcCgvLogo className='logo' />
      <IcSearch className='search' />
      <IcTicket className='ticket' onClick={handleTicketClick} />
    </St.HeaderWrapper>
  );
};

export default HomeHeader;

const St = {
  HeaderWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 1.3rem 1.5rem 1rem 1.5rem;

    & > .hamburger {
      margin-top: 0.3rem;
      margin-right: 11.7rem;
    }

    & > .logo {
      width: 6rem;
      height: 2.5rem;
      margin-right: 8.7rem;
      margin-left: auto;
    }

    & > .search {
      margin-right: 0.3rem;
      margin-left: auto;
    }

    & > .ticket {
      margin-left: auto;
    }
  `,
};
