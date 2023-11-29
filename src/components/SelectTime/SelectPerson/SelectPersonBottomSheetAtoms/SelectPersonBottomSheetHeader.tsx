import styled from 'styled-components';

import { IcClose } from '../../../../assets/icon';

interface SelectPersonBottomSheetHeaderProps {
  handleCloseBottomSheet: () => void;
}

const SelectPersonBottomSheetHeader = ({
  handleCloseBottomSheet,
}: SelectPersonBottomSheetHeaderProps) => {
  return (
    <St.BottomSheetHeaderWrapper>
      <IcClose onClick={handleCloseBottomSheet} />
    </St.BottomSheetHeaderWrapper>
  );
};

export default SelectPersonBottomSheetHeader;

const St = {
  BottomSheetHeaderWrapper: styled.header`
    position: relative;
    width: 100%;
    height: 2.8rem;
    padding-top: 0.8rem;

    & > svg {
      cursor: pointer;
      position: absolute;
      right: 0.8rem;
    }
  `,
};
