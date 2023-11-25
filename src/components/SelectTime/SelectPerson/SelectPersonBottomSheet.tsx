import styled from 'styled-components';

import SelectPersonBottomSheetPortal from './SelectPersonBottomSheetPortal';

const SelectPersonBottomSheet = () => {
  return (
    <SelectPersonBottomSheetPortal>
      <>
        <St.BottomSheetBg></St.BottomSheetBg>
        <St.BottomSheetConatiner>
          바텀시트 부분
          <St.BottomSheetSelectPersonBtn type="button">인원선택</St.BottomSheetSelectPersonBtn>
        </St.BottomSheetConatiner>
      </>
    </SelectPersonBottomSheetPortal>
  );
};

export default SelectPersonBottomSheet;

const St = {
  BottomSheetBg: styled.div`
    position: fixed;
    top: 0;

    width: 100%;
    max-width: 43rem;
    height: 100vh;

    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.black};
  `,

  BottomSheetConatiner: styled.section`
    position: fixed;
    z-index: 10;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: calc(100vh - 23.2rem);

    background-color: white;
  `,

  BottomSheetSelectPersonBtn: styled.button`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 1.8rem 0 5.3rem 0;

    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.gradient};

    ${({ theme }) => theme.fonts.title_medium_18};
  `,
};
