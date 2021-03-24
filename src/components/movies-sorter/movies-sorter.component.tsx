import React, { FC } from 'react';
import {
  StyledSorter,
  StyledSorterFoundData,
  StyledSorterResult,
  StyledSorterInfo,
  StyledSorterData,
  StyledSorterDataHeading,
} from './movies-sorter.styles';

export const MoviesSorter: FC = () => (
  <StyledSorter>
    <StyledSorterInfo>
      <StyledSorterFoundData>6 movies found</StyledSorterFoundData>
      <StyledSorterResult>
        <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
        <StyledSorterData> release date </StyledSorterData>
        <StyledSorterData>rating</StyledSorterData>
      </StyledSorterResult>
    </StyledSorterInfo>
  </StyledSorter>
);
