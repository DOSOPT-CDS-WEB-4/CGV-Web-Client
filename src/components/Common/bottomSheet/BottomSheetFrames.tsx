import styled from 'styled-components';
import { Keyframes } from 'styled-components/dist/types';

import BottomSheetPortal from './BottomSheetPortal';

interface BottomSheetFramesProps {
  height: number;
  isOpen: boolean;
  handleCloseBottomSheet: () => void;
  isUnmount: boolean;
  openAnimation?: Keyframes;
  closeAnimation?: Keyframes;
  children: React.ReactNode;
}

const BottomSheetFrames = ({
  height,
  isOpen,
  handleCloseBottomSheet,
  isUnmount,
  openAnimation,
  closeAnimation,
  children,
}: BottomSheetFramesProps) => {
  return (
    <BottomSheetPortal>
      {isOpen && (
        <>
          <St.BottomSheetBg onClick={handleCloseBottomSheet}></St.BottomSheetBg>
          <St.BottomSheetConatiner
            $height={height}
            $isUnmount={isUnmount}
            $openAnimation={openAnimation}
            $closeAnimation={closeAnimation}
          >
            {children}
          </St.BottomSheetConatiner>
        </>
      )}
    </BottomSheetPortal>
  );
};

export default BottomSheetFrames;

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

  BottomSheetConatiner: styled.section<{
    $height: number;
    $isUnmount: boolean;
    $openAnimation?: Keyframes;
    $closeAnimation?: Keyframes;
  }>`
    position: fixed;
    z-index: 10;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    max-height: ${({ $height }) => $height}rem;

    background-color: white;
    border-radius: 1.8rem 1.8rem 0 0;

    animation: ${({ $isUnmount, $openAnimation, $closeAnimation }) =>
    $isUnmount ? $closeAnimation : $openAnimation}
      0.3s ease-in-out;
  `,
};
