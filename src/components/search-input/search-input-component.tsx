import React from 'react';
import {
  StyledSearchSection,
  StyledHeading,
  StyledSearchField,
} from './search-input-styles';

export const SearchInput = ():JSX.Element => (
  <StyledSearchSection>
    <StyledHeading>FIND YOUR MOVIE</StyledHeading>
    <StyledSearchField placeholder="Quentin Tarantino" />
  </StyledSearchSection>
);
