import styled from "styled-components";

import { IcBtnUp } from "../../assets/icon";

const TopButton = () => {
  return (
    <St.BtnWrapper>
      <IcBtnUp className="button" />
    </St.BtnWrapper>
  );
};

export default TopButton;

const St = {
  BtnWrapper: styled.div`
    & > .button {
      position: fixed;
      top: 76.5rem;
      left: 31.5rem;
    }
  `,
};
