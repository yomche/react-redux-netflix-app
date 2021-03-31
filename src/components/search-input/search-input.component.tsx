import React, { FC } from 'react';
import { StyledSearchForm, StyledHeading, StyledSearchInput } from './search-input.styles';

export const SearchInput: FC = () => (
  <StyledSearchForm>
    <StyledHeading>FIND YOUR MOVIE</StyledHeading>
    <StyledSearchInput type="text" placeholder="Quentin Tarantino" />
  </StyledSearchForm>
);
