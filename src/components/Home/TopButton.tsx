import styled from "styled-components";

import { IcBtnUp } from "../../assets/icon";

const TopButton = () => {

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };
  return (
    <St.BtnWrapper>
      <IcBtnUp
        onClick={handleToTop} />
    </St.BtnWrapper>
  );
};

export default TopButton;

const St = {
  BtnWrapper: styled.div`
    & > svg {
      position: fixed;
      top: 70.1rem;
      left: 31.5rem;
    }
  `,
};
