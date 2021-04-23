import React, { FC, useState } from 'react';
import {
  StyledSorter,
  StyledSorterFoundData,
  StyledSorterResult,
  StyledSorterInfo,
  StyledSorterData,
  StyledSorterDataHeading,
} from './movies-sorter.styles';

type MoviesSorterProps = {
  moviesAmount: number;
  onSetSortType: (sortType: string) => void;
};

export const MoviesSorter: FC<MoviesSorterProps> = ({ moviesAmount, onSetSortType }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <StyledSorter>
      <StyledSorterInfo>
        <StyledSorterFoundData>{moviesAmount} movies found</StyledSorterFoundData>
        <StyledSorterResult>
          <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
          <StyledSorterData
            color={active ? '#000' : '#ffffff'}
            onClick={() => {
              onSetSortType('release_date');
              handleClick();
            }}
          >
            {' '}
            release date{' '}
          </StyledSorterData>
          <StyledSorterData
            color={active ? '#ffffff' : '#000'}
            onClick={() => {
              onSetSortType('vote_count');
              handleClick();
            }}
          >
            rating
          </StyledSorterData>
        </StyledSorterResult>
      </StyledSorterInfo>
    </StyledSorter>
  );
};
