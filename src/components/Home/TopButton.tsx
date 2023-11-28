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
    <St.ButtonWrapper>
      <IcBtnUp
        onClick={handleToTop} />
    </St.ButtonWrapper>
  );
};

export default TopButton;

const St = {
  ButtonWrapper: styled.div`
      position: fixed;
      top: 83%;
      left: 75.5%;
      width: 100%;
    & > svg {
      top: 70.1rem;
      left: 31.5rem;
    }
  `,
};
