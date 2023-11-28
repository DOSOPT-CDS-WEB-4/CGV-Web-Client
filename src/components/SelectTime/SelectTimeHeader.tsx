import styled from 'styled-components';

import { ICHamburger } from '../../assets/icon';
const SelectTimeHeader = () => {
  return (
    <St.HeaderWrapper>
      <St.MenuIcon type="button">
        <ICHamburger />
      </St.MenuIcon>
      <St.PageTitle>빠른 예매</St.PageTitle>
    </St.HeaderWrapper>
  );
};

export default SelectTimeHeader;

const St = {
  HeaderWrapper: styled.header`
    display: inline-flex;
    gap: 11.9rem;
    align-items: center;

    padding: 1.2rem 16rem 1.2rem 1.6rem;

    background-color: transparent;

    & > svg {
      cursor: pointer;
    }
  `,

  MenuIcon: styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;
    padding: 0.4rem 0.2rem;
  `,

  PageTitle: styled.h1`
    width: 5.6rem;
    text-align: center;

    ${({ theme }) => theme.fonts.body_medium_15};

    color: ${({ theme }) => theme.colors.white};
  `,
};
