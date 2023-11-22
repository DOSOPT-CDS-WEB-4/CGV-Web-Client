import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

interface MenuBarProps {
  theme: typeof theme;
}

const MenuBar: React.FC<MenuBarProps> = () => {
  return (
    <St.MenuBarWrapper>
      <St.LI>
        <St.Menu className='home'>홈</St.Menu>
      </St.LI>
      <St.LI>
        <St.Menu className='event'>이벤트</St.Menu>
      </St.LI>
      <St.LI>
        <St.Menu className='movie-talk'>무비톡</St.Menu>
      </St.LI>
      <St.LI>
        <St.Menu className='fast-order'>패스트오더</St.Menu>
      </St.LI>
      <St.LI>
        <St.Menu className='gift-shop'>기프트샵</St.Menu>
      </St.LI>
      <St.LI>
        <St.Menu className='cgv'>@CGV</St.Menu>
      </St.LI>
    </St.MenuBarWrapper>
  );
};

export default MenuBar;

const St = {
  MenuBarWrapper: styled.div`
        background: ${({ theme }) => theme.colors['gradient']};
        width: 37.5rem;
        height: 4.2rem;
        flex-shrink: 0;
        white-space: nowrap;
        overflow-x: auto;
        max-width: 100%;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `,

  LI: styled.li`
        display: inline-block; 
        list-style-type: none;
        margin-right: 1.8rem;
    `,

  Menu: styled.button`
        color: ${({ theme }) => theme.colors['white']};
        ${({ theme }) => theme.fonts['body_bold_15']};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; 
        letter-spacing: -0.0075rem;
        flex-shrink: 0;

        &.home {
            border-bottom: 2px solid white;
            border-bottom-width: 0.3rem;
            padding: 1.5rem 0.2rem 0.92rem 0.2rem;
            margin: 0rem 0rem 0rem 1.5rem
        }

        &.event {
            padding: 1.5rem 0rem 1.2rem 0rem;
        }

        &.movie-talk, &.fast-order {
            padding: 1.5rem 0rem 1.2rem 0rem;
        }

        &.gift-shop, &.cgv {
            padding: 1.5rem 0rem 1.2rem 0rem;
        }
    `,

};
