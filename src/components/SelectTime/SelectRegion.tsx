import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { regionNames } from '../../recoil/atom';

const SelectRegion = () => {
  const RegionNames = useRecoilValue(regionNames);

  const [checkedRegions, setCheckedRegions] = useState<Array<string>>([]);

  const handleOnClick = (region: string) => {
    setCheckedRegions([region]);
  };

  return (
    <>
      <St.SelectRegion>
        {RegionNames.map(region => (
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
    overflow: auto;
    overflow: scroll;
    display: flex;
    gap: 0.8rem;

    width: 37.5rem;
    padding: 1.6rem;

    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  RegionButton: styled.button<{ $isChecked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 1rem;
    ${({ theme }) => theme.fonts.body_regular_13};

    color: ${({ $isChecked, theme }) => ($isChecked ? theme.colors.white : theme.colors.gray700)};
    text-wrap: nowrap;
    vertical-align: center;

    background: ${({ $isChecked, theme }) =>
      $isChecked ? theme.colors.gradient : theme.colors.gray100};
    border: 1px solid
      ${({ $isChecked, theme }) => ($isChecked ? theme.colors.gradient : theme.colors.gray300)};
    border-radius: 1.6rem;
  `,
};
