import styled from 'styled-components';

import { IcClose } from '../../../../assets/icon';

const BottomSheetHeader = ({
  setIsOpenBottomSheet,
}: {
  setIsOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <St.BottomSheetHeaderWrapper>
      <IcClose onClick={() => setIsOpenBottomSheet(false)} />
    </St.BottomSheetHeaderWrapper>
  );
};

export default BottomSheetHeader;

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
