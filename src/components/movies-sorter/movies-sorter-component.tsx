import React, { FC } from 'react';
import {
  StyledSorter, StyledSorterResult, StyledSorterInfo, StyledSorterData,
} from './movies-sorter-styles';

export const MoviesSorter: FC = () => (
  <StyledSorter>
    <StyledSorterInfo>
      <StyledSorterData> N movies found </StyledSorterData>
      <StyledSorterResult>
        <StyledSorterData>Sort by </StyledSorterData>
        <StyledSorterData>release date</StyledSorterData>
        <StyledSorterData>rating</StyledSorterData>
      </StyledSorterResult>
    </StyledSorterInfo>
  </StyledSorter>
);
