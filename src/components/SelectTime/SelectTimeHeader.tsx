import styled from 'styled-components';
import { ICHamburger } from '../../assets/icon';
const SelectTimeHeader = () => {
  return (
    <St.HeaderWrapper>
      <St.MenuIcon>
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
    align-items: center;

    padding: 1.2rem 16rem 1.2rem 1.6rem;
    gap: 11.9rem;

    background-color: transparent;
  `,

  MenuIcon: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.4rem;
    height: 2.4rem;
    padding: 0.4rem 0.2rem;

    cursor: pointer;
  `,

  PageTitle: styled.h1`
    width: 5.6rem;

    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.body_medium_15};
    text-align: center;
  `,
};
