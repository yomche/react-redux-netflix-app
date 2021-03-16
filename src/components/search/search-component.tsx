import React from 'react';
import {
  StyledSearch,
  StyledHeading,
  StyledSearchField,
} from './search-styles';

const SearchComponent = ():JSX.Element => (
  <StyledSearch>
    <StyledHeading>FIND YOUR MOVIE</StyledHeading>
    <StyledSearchField placeholder="Quentin Tarantino" />
  </StyledSearch>
);

export default SearchComponent;
