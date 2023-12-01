import SelectPersonBottomSheetBtn from './SelectPersonBottomSheetAtoms/SelectPersonBottomSheetBtn';
import SelectPersonBottomSheetContents from './SelectPersonBottomSheetAtoms/SelectPersonBottomSheetContents';
import SelectPersonBottomSheetHeader from './SelectPersonBottomSheetAtoms/SelectPersonBottomSheetHeader';

interface SelectPersonBottomSheetProps {
  handleCloseBottomSheet: () => void;
}

const SelectPersonBottomSheet = ({ handleCloseBottomSheet }: SelectPersonBottomSheetProps) => {
  return (
    <>
      <SelectPersonBottomSheetHeader handleCloseBottomSheet={handleCloseBottomSheet} />
      <SelectPersonBottomSheetContents />
      <SelectPersonBottomSheetBtn />
    </>
  );
};

export default SelectPersonBottomSheet;
