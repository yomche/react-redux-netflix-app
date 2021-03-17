import React from 'react';
import {
  StyledControlsSection,
  StyledTitleButton,
  StyledGenreBottom,
  StyledSubmitBottom,
} from './controls-styles';

export const Controls = ():JSX.Element => (
  <StyledControlsSection>
    <StyledTitleButton>TITLE</StyledTitleButton>
    <StyledGenreBottom> GENRE </StyledGenreBottom>
    <StyledSubmitBottom> SUBMIT </StyledSubmitBottom>
  </StyledControlsSection>
);

