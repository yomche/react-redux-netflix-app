import React from 'react';
import {
  StyledButtonSection,
  StyledTitleButton,
  StyledGenreBottom,
  StyledSubmitBottom,
} from './button-styles';

const ButtonComponent = ():JSX.Element => (
  <StyledButtonSection>
    <StyledTitleButton>TITLE</StyledTitleButton>
    <StyledGenreBottom> GENRE </StyledGenreBottom>
    <StyledSubmitBottom> SUBMIT </StyledSubmitBottom>
  </StyledButtonSection>
);
