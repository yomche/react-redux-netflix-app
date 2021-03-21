import React, { FC } from 'react';
import {
  StyledSorter,
  StyledSorterFoundData,
  StyledSorterResult,
  StyledSorterInfo,
  StyledSorterData,
  StyledSorterDataHeading,
  StyledSorterDataWrapper,
} from './movies-sorter.styles';

export const MoviesSorter: FC = () => (
  <StyledSorter>
    <StyledSorterInfo>
      <StyledSorterFoundData>6 movies found</StyledSorterFoundData>
      <StyledSorterResult>
        <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
        <StyledSorterData>
          <StyledSorterDataWrapper>release date</StyledSorterDataWrapper>
        </StyledSorterData>
        <StyledSorterData>
          <StyledSorterDataWrapper>rating</StyledSorterDataWrapper>
        </StyledSorterData>
      </StyledSorterResult>
    </StyledSorterInfo>
  </StyledSorter>
);
