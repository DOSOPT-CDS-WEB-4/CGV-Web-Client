import React from 'react';
import styled, { keyframes } from 'styled-components';

import BottomSheetBtn from './SelectPersonBottomSheetAtoms/BottomSheetBtn';
import BottomSheetContents from './SelectPersonBottomSheetAtoms/BottomSheetContents';
import BottomSheetHeader from './SelectPersonBottomSheetAtoms/BottomSheetHeader';
import SelectPersonBottomSheetPortal from './SelectPersonBottomSheetPortal';

interface SelectPersonBottomSheetProps {
  isOpenBottomSheet: boolean;
  setIsOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectPersonBottomSheet = ({
  isOpenBottomSheet,
  setIsOpenBottomSheet,
}: SelectPersonBottomSheetProps) => {
  return (
    <SelectPersonBottomSheetPortal>
      {isOpenBottomSheet && (
        <>
          <St.BottomSheetBg onClick={() => setIsOpenBottomSheet(false)}></St.BottomSheetBg>
          <St.BottomSheetConatiner>
            <BottomSheetHeader setIsOpenBottomSheet={setIsOpenBottomSheet} />
            <BottomSheetContents />
            <BottomSheetBtn setIsOpenBottomSheet={setIsOpenBottomSheet} />
          </St.BottomSheetConatiner>
        </>
      )}
    </SelectPersonBottomSheetPortal>
  );
};

export default SelectPersonBottomSheet;

const slideUp = keyframes`
     from {
    transform: translateY(51.5rem);
  }
  to {
    transform: translateY(0);
  }
`;

// const slideDown = keyframes`
//   from {
//     transform: translateY(0);
//   }
//   to {
//     transform: translateY(-51.5rem);
//   }
//   `;

const St = {
  BottomSheetBg: styled.div`
    cursor: pointer;

    position: fixed;
    top: 0;

    overflow: hidden;

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
    max-height: 51.5rem;

    background-color: white;
    border-radius: 1.8rem 1.8rem 0 0;

    animation: ${slideUp} 0.25s ease-out forwards;
  `,
};
