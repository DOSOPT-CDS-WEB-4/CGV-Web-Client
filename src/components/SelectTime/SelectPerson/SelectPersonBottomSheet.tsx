import SelectPersonBottomSheetBtn from './SelectPersonBottomSheetAtoms/SelectPersonBottomSheetBtn';
import SelectPersonBottomSheetContents from './SelectPersonBottomSheetAtoms/SelectPersonBottomSheetContents';
import SelectPersonBottomSheetHeader from './SelectPersonBottomSheetAtoms/SelectPersonBottomSheetHeader';

interface SelectPersonBottomSheetProps {
  handleCloseBottomSheet: () => void;
  selectedDate: string;
}

const SelectPersonBottomSheet = ({
  handleCloseBottomSheet,
  selectedDate,
}: SelectPersonBottomSheetProps) => {
  return (
    <>
      <SelectPersonBottomSheetHeader handleCloseBottomSheet={handleCloseBottomSheet} />
      <SelectPersonBottomSheetContents selectedDate={selectedDate} />
      <SelectPersonBottomSheetBtn />
    </>
  );
};

export default SelectPersonBottomSheet;
