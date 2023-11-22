import styled from 'styled-components';

import img_menu1 from '../../assets/image/img_menu1.png';
import img_menu2 from '../../assets/image/img_menu2.png';
import img_menu3 from '../../assets/image/img_menu3.png';
import img_menu4 from '../../assets/image/img_menu4.png';

const MyCgvMenu = () => {
  return (
    <>
      <St.MenuHeader />
      <St.MenuWrapper>
        <St.LI>
          <img src={img_menu1} className='left' alt='my cgv' />
          <p className='left-txt'>MY CGV</p>
        </St.LI>
        <St.LI>
          <img src={img_menu2} alt='포토플레이' />
          <p>포토플레이</p>
        </St.LI>
        <St.LI>
          <img src={img_menu3} alt='할인정보' />
          <p>할인정보</p>
        </St.LI>
        <St.LI>
          <img src={img_menu4} alt='CGV 스토어' />
          <p>CGV스토어</p>
        </St.LI>
      </St.MenuWrapper>
      <St.MenuFooter />
    </>
  );
};

export default MyCgvMenu;

const St = {
  MenuHeader: styled.div`
      background: ${({ theme }) => theme.colors['gray100']};
      width: 100%;
      height: 0.9rem;
      flex-shrink: 0;
    `,

  MenuWrapper: styled.div`

    `,

  LI: styled.li`

        & > img {

        }

        & > img.left {

        }

        & > p {

        }

        & > p.left-txt {

        }
    `,

  MenuFooter: styled.div`
      background: ${({ theme }) => theme.colors['gray100']};
      width: 100%;
      height: 0.9rem;
      flex-shrink: 0;
    `,

};
