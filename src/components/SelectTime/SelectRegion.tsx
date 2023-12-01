import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { filteringScreenType } from '../../libs/filtereingScreenType';
import { getSelectRegion } from '../../libs/getSelectRegion';
import {
  clickedTypesData,
  currentRegionData,
  distanceData,
  movieSchedulesData,
  regionNamesData,
} from '../../recoil/atom';

const SelectRegion = () => {
  const RegionNames = useRecoilValue(regionNamesData);
  const [KeyToApi, setKeyToApi] = useState<string>('HONGDAE');

  const setRegionNames = useSetRecoilState(regionNamesData);
  const setCurRegion = useSetRecoilState(currentRegionData);
  const setHowFar = useSetRecoilState(distanceData);
  const setMovieSchedule = useSetRecoilState(movieSchedulesData);

  const [checkedRegions, setCheckedRegions] = useState<Array<string>>(['홍대']);
  const clickedTypeList = useRecoilValue(clickedTypesData);

  const handleOnClick = (region: string) => {
    setCheckedRegions([region]);
    switch (region) {
      case '홍대':
        setKeyToApi('HONGDAE');
        break;
      case '청담씨네시티':
        setKeyToApi('CHEONGDAM');
        break;
      case '목동':
        setKeyToApi('MOKDONG');
        break;
      case '피카디리1958':
        setKeyToApi('PIKADILI');
        break;
      case '신촌아트레온':
        setKeyToApi('SHINCHON');
        break;
    }
  };

  useEffect(() => {
    const clickedList = filteringScreenType(clickedTypeList);
    getSelectRegion(
      KeyToApi,
      clickedList,
      setRegionNames,
      setCurRegion,
      setHowFar,
      setMovieSchedule,
    );
  }, [checkedRegions, clickedTypeList]);

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
