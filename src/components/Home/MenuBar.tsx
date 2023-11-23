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
        scrollbar-width: none;

        overflow-x: auto;
        flex-shrink: 0;

        width: 37.5rem;
        max-width: 100%;
        height: 4.2rem;

        white-space: nowrap;

        background: ${({ theme }) => theme.colors['gradient']};

        &::-webkit-scrollbar {
            display: none;
        }
    `,

  LI: styled.li`
        display: inline-block;
        margin-right: 1.8rem; 
        list-style-type: none;
    `,

  Menu: styled.button`
        color: ${({ theme }) => theme.colors['white']};
        ${({ theme }) => theme.fonts['body_bold_15']};

        flex-shrink: 0;

        &.home {
            margin: 0rem 0rem 0rem 1.5rem;
            padding: 1.5rem 0.2rem 0.92rem 0.2rem;
            border-bottom: 2px solid white;
            border-bottom-width: 0.3rem
        }

        &.event, &.movie-talk, &.fast-order, &.gift-shop, &.cgv {
            padding: 1.5rem 0rem 1.2rem 0rem;
        }
    `,
};
