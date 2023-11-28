import styled from 'styled-components';

import img_ticket from '../../assets/image/img_ticket.png';

const MyTicket = () => {
  return (
    <St.ImgWrapper>
      <img src={img_ticket} alt='티켓 이미지' />
      <img src={img_ticket} alt='티켓 이미지' />
    </St.ImgWrapper>
  );
};

export default MyTicket;

const St = {
  ImgWrapper: styled.div`
      scroll-behavior: smooth;
      overflow-x: auto;
      max-width: 100%;
      white-space: nowrap;

      &::-webkit-scrollbar {
          display: none;
      }
    
      & > img {
          width: 34.5rem;
          height: 65.8rem;
          margin: 0.8rem;
      }
    `,
};
