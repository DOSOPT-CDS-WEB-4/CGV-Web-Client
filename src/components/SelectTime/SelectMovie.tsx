import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ICFavoriteOff, ICFavoriteOn } from '../../assets/icon';
import {
  clickedTypes,
  currentRegion,
  distance,
  movieSchedules,
  screenTypes,
} from '../../recoil/atom';
import { ScheduleType } from '../../types/ScheduleType';
import SelectTimeTable from './SelectTimeTable';

interface SelectMovieTimeProps {
  selectedDate: string;
}

const SelectMovieTime: React.FC<SelectMovieTimeProps> = ({ selectedDate }) => {
  const ScreenTypes = useRecoilValue(screenTypes);
  const curRegion = useRecoilValue(currentRegion);
  const howFar = useRecoilValue(distance);
  const movieScheduleList = useRecoilValue(movieSchedules);
  const [clickedTypeList, setclickedTypeList] = useRecoilState(clickedTypes);

  const [clickLike, setClickLike] = useState(false);

  const screenTypeList: string[] = [];

  movieScheduleList.forEach(schedule => {
    screenTypeList.includes(schedule.screen_type)
      ? null
      : screenTypeList.push(schedule.screen_type);
  });

  const sortByTypeList = [];

  const sortByType = () => {
    const normalType: ScheduleType[] = [];
    const comfortType: ScheduleType[] = [];
    const imaxType: ScheduleType[] = [];

    for (let i = 0; i < movieScheduleList.length; i++) {
      switch (movieScheduleList[i].screen_type) {
        case '일반관':
          normalType.push(movieScheduleList[i]);
          break;
        case 'IMAX관':
          imaxType.push(movieScheduleList[i]);
          break;
        case '컴포트관':
          comfortType.push(movieScheduleList[i]);
          break;
      }
    }
    sortByTypeList.push(normalType, imaxType, comfortType);
    return sortByTypeList;
  };

  const handleOnClickLike = () => {
    setClickLike(!clickLike);
  };

  const handleTypeClick = (type: string) => {
    if (clickedTypeList.includes(type)) {
      setclickedTypeList(clickedTypeList.filter(elm => elm !== type));
    } else {
      setclickedTypeList([...clickedTypeList, type]);
    }
    console.log(clickedTypeList);
  };

  useEffect(() => {
    sortByType();
    handleOnClickLike();
    // handleTypeClick();
  }, [clickedTypeList]);

  return (
    <St.SelectMovieWrapper>
      <St.SelectedRegion>
        {clickLike ? (
          <button onClick={handleOnClickLike}>
            <ICFavoriteOn />
          </button>
        ) : (
          <button onClick={handleOnClickLike}>
            <ICFavoriteOff />
          </button>
        )}

        <St.Region>{curRegion}</St.Region>
        <St.Distance>{howFar}km</St.Distance>
      </St.SelectedRegion>
      <St.ScreenTypeWrapper>
        {ScreenTypes.map(type => (
          <St.EachType
            key={type}
            onClick={() => {
              handleTypeClick(type);
            }}
            $isClicked={clickedTypeList.includes(type)}
          >
            {type}
          </St.EachType>
        ))}
      </St.ScreenTypeWrapper>

      {sortByTypeList.map((elm, idx) => {
        return <SelectTimeTable key={idx} selectedDate={selectedDate} />;
      })}
    </St.SelectMovieWrapper>
  );
};

export default SelectMovieTime;

const St = {
  SelectMovieWrapper: styled.article`
    width: 37.5rem;
    height: 32.2rem;
  `,

  SelectedRegion: styled.section`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    width: 37.5rem;
    padding: 1.8rem 0 1.4rem 1.6rem;
  `,

  Region: styled.span`
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  Distance: styled.span`
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.body_medium_13};
  `,

  ScreenTypeWrapper: styled.section`
    overflow: auto;
    overflow: scroll;
    display: flex;
    flex-shrink: 0;
    gap: 0.9rem;

    width: 37.5rem;
    height: 3rem;
    margin-bottom: 2.4rem;
    padding: 0 1.6rem;

    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  EachType: styled.li<{ $isClicked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 1rem;

    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.red : theme.colors.gray600)};
    text-wrap: nowrap;
    vertical-align: center;

    border: 1px solid
      ${({ $isClicked, theme }) => ($isClicked ? theme.colors.red : theme.colors.gray600)};
    border-radius: 1.6rem;

    ${({ theme }) => theme.fonts.body_regular_13};
  `,
};
