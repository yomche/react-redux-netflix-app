import React, { FC } from 'react';
import {
  StyledSearchSection,
  StyledHeading,
  StyledSearchField,
} from './search-input-styles';

export const SearchInput: FC = () => (
  <StyledSearchSection>
    <StyledHeading>FIND YOUR MOVIE</StyledHeading>
    <StyledSearchField type="text" placeholder="Quentin Tarantino" />
  </StyledSearchSection>
);
