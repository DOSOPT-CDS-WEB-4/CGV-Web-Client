import SelectPersonBottomSheet from '../components/SelectTime/SelectPerson/SelectPersonBottomSheet';
import useBottomSheet from '../hooks/useBottomSheet';
import { slideDown, slideUp } from '../styles/animations/BottomSheetAnimation';

const SelectPersonTest = () => {
  const { BottomSheet, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet(
    51.5,
    slideUp,
    slideDown,
    300,
  );

  return (
    <>
      <button type="button" onClick={handleOpenBottomSheet}>
        클릭시 bottomsheet 나오기!
      </button>
      <BottomSheet>
        <SelectPersonBottomSheet handleCloseBottomSheet={handleCloseBottomSheet} />
      </BottomSheet>
    </>
  );
};

export default SelectPersonTest;
