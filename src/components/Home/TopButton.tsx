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
        className="button"
        onClick={handleToTop} />
    </St.BtnWrapper>
  );
};

export default TopButton;

const St = {
  BtnWrapper: styled.div`
    & > .button {
      position: fixed;
      top: 75.5rem;
      left: 31.5rem;
    }
  `,
};
