import React, { FC } from 'react';
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

export const MoviesSorter: FC<MoviesSorterProps> = ({ moviesAmount, onSetSortType }) => (
  <StyledSorter>
    <StyledSorterInfo>
      <StyledSorterFoundData>{moviesAmount} movies found</StyledSorterFoundData>
      <StyledSorterResult>
        <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
        <StyledSorterData onClick={() => onSetSortType('release_date')}>
          {' '}
          release date{' '}
        </StyledSorterData>
        <StyledSorterData onClick={() => onSetSortType('vote_count')}>rating</StyledSorterData>
      </StyledSorterResult>
    </StyledSorterInfo>
  </StyledSorter>
);
