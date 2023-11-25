import { useState } from 'react';

import SelectPersonBottomSheet from '../components/SelectTime/SelectPerson/SelectPersonBottomSheet';

const SelectPersonTest = () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpenBottomSheet(true)}>
        클릭시 bottomsheet 나오기!
      </button>
      <SelectPersonBottomSheet
        isOpenBottomSheet={isOpenBottomSheet}
        setIsOpenBottomSheet={setIsOpenBottomSheet}
      />
    </>
  );
};

export default SelectPersonTest;
