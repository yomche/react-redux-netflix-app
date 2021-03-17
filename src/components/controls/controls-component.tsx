import React, { FC } from 'react';

import {
  StyledControlsSection,
  StyledTitleButton,
  StyledGenreButton,
  StyledSubmitButton,
} from './controls-styles';

export const Controls: FC = () => (
  <StyledControlsSection>
    <StyledTitleButton>TITLE</StyledTitleButton>
    <StyledGenreButton> GENRE </StyledGenreButton>
    <StyledSubmitButton> SUBMIT </StyledSubmitButton>
  </StyledControlsSection>
);

