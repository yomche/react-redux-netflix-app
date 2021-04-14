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
  onSetMovieSortByDate: () => void;
  onSetMovieSortByRating: () => void;
};

export const MoviesSorter: FC<MoviesSorterProps> = ({
  moviesAmount,
  onSetMovieSortByDate,
  onSetMovieSortByRating,
}) => (
  <StyledSorter>
    <StyledSorterInfo>
      <StyledSorterFoundData>{moviesAmount} movies found</StyledSorterFoundData>
      <StyledSorterResult>
        <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
        <StyledSorterData onClick={onSetMovieSortByDate}> release date </StyledSorterData>
        <StyledSorterData onClick={onSetMovieSortByRating}>rating</StyledSorterData>
      </StyledSorterResult>
    </StyledSorterInfo>
  </StyledSorter>
);
