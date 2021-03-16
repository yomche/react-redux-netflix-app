import React from 'react';
import StyledLogo from '../logo/logo-styles';
import {
  StyledHeader,
  StyledSearchButton,
  StyledHeaderSection,
  StyledSorter,
} from './header-styles';

import {
  StyledSearch,
  StyledHeading,
  StyledSearchField,
} from '../search/search-styles';

import {
  StyledButtonSection,
  StyledTitleButton,
  StyledGenreBottom,
  StyledSubmitBottom,
} from '../buttons/button-styles';

const HeaderComponent = ():JSX.Element => (
  <StyledHeader>
    <StyledHeaderSection>
      <StyledLogo />
      <StyledSearchButton> SEARCH </StyledSearchButton>
    </StyledHeaderSection>
    <StyledSearch>
      <StyledHeading>FIND YOUR MOVIE</StyledHeading>
      <StyledSearchField placeholder="Quentin Tarantino" />
    </StyledSearch>
    <StyledButtonSection>
      <StyledTitleButton>TITLE</StyledTitleButton>
      <StyledGenreBottom> GENRE </StyledGenreBottom>
      <StyledSubmitBottom> SUBMIT </StyledSubmitBottom>
    </StyledButtonSection>
    <StyledSorter />
  </StyledHeader>
);

export default HeaderComponent;
