import { useState } from 'react';
import styled from 'styled-components';

const SelectRegion = () => {
  const [checkedRegions, setCheckedRegions] = useState([]);

  const handleOnClick = region => {
    setCheckedRegions([region]);
  };

  const REGION_LIST = ['홍대', '청담씨네시티', '목동', '피카디리1958', '신촌아트레온'];

  return (
    <>
      <St.SelectRegion>
        {REGION_LIST.map(region => (
          <St.RegionButton
            key={region}
            onClick={() => handleOnClick(region)}
            $isChecked={checkedRegions.includes(region)}
            type="button"
          >
            {region}
          </St.RegionButton>
        ))}
      </St.SelectRegion>
    </>
  );
};

export default SelectRegion;

const St = {
  SelectRegion: styled.section`
    width: 37.5rem;
    display: flex;

    padding: 1.6rem;
    gap: 0.8rem;
    overflow: auto;
    white-space: nowrap;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  RegionButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: 1rem;
    ${({ theme }) => theme.fonts.body_regular_13};

    text-wrap: nowrap;
    vertical-align: center;

    border-radius: 1.6rem;

    border: 1px solid
      ${({ $isChecked, theme }) => ($isChecked ? theme.colors.gradient : theme.colors.gray300)};
    background: ${({ $isChecked, theme }) =>
      $isChecked ? theme.colors.gradient : theme.colors.gray100};
    color: ${({ $isChecked, theme }) => ($isChecked ? theme.colors.white : theme.colors.gray700)};
  `,
};
