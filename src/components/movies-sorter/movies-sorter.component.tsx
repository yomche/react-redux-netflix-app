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
  onSetMovieSortType: (sortType: string) => void;
  movieSortType: string;
};

export const MoviesSorter: FC<MoviesSorterProps> = ({
  moviesAmount,
  onSetMovieSortType,
  movieSortType,
}) => (
  <StyledSorter>
    <StyledSorterInfo>
      <StyledSorterFoundData>{moviesAmount} movies found</StyledSorterFoundData>
      <StyledSorterResult>
        <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
        <StyledSorterData
          isActive={movieSortType === 'release_date'}
          onClick={() => {
            onSetMovieSortType('release_date');
          }}
        >
          {' '}
          release date{' '}
        </StyledSorterData>
        <StyledSorterData
          isActive={movieSortType === 'vote_count'}
          onClick={() => {
            onSetMovieSortType('vote_count');
          }}
        >
          rating
        </StyledSorterData>
      </StyledSorterResult>
    </StyledSorterInfo>
  </StyledSorter>
);
