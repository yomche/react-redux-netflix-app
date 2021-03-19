import React, { FC } from 'react';
import {
  StyledSorter, StyledSorterResult, StyledSorterInfo, StyledSorterData, StyledSorterDataHeading, StyledSorterDataWrapper,
} from './movies-sorter.styles';

export const MoviesSorter: FC = () => {
  function handleClick() {
    alert('Сортировать по дате выхода / жанру');
  }
  return (
    <StyledSorter>
      <StyledSorterInfo>
        <StyledSorterDataHeading>
          N movies found
        </StyledSorterDataHeading>
        <StyledSorterResult>
          <StyledSorterDataHeading>Sort by </StyledSorterDataHeading>
          <StyledSorterData onClick={handleClick}>
            <StyledSorterDataWrapper>
              release date
            </StyledSorterDataWrapper>
          </StyledSorterData>
          <StyledSorterData onClick={handleClick}>
            <StyledSorterDataWrapper>
              rating
            </StyledSorterDataWrapper>
          </StyledSorterData>
        </StyledSorterResult>
      </StyledSorterInfo>
    </StyledSorter>
  );
};
