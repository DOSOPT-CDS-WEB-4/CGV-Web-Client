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
        type="button"
        onClick={handleToTop} />
    </St.ButtonWrapper>
  );
};

export default TopButton;

const St = {
  ButtonWrapper: styled.div`
    position: fixed;
    float: right;
    margin-top: 71.5rem;
    margin-left: 32rem;
  `,
};
