import { useState } from 'react';

import SelectPersonBottomSheet from '../components/SelectTime/SelectPerson/SelectPersonBottomSheet';

const SelectPersonTest = () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const [isUnmount, setIsUnmount] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsUnmount(false);
    setIsOpenBottomSheet(true);
  };

  return (
    <>
      <button type="button" onClick={handleOpenBottomSheet}>
        클릭시 bottomsheet 나오기!
      </button>
      <SelectPersonBottomSheet
        isOpenBottomSheet={isOpenBottomSheet}
        setIsOpenBottomSheet={setIsOpenBottomSheet}
        isUnmount={isUnmount}
        setIsUnmount={setIsUnmount}
      />
    </>
  );
};

export default SelectPersonTest;
