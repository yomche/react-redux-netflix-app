import React, { FC } from 'react';
import { StyledPageNotFound, StyledHeading } from './not-found.styles';
import { GlobalStyle } from '../../../styles/global-styles';

export const NotFoundContainer: FC = () => (
  <>
    <GlobalStyle />
    <StyledPageNotFound>
      <StyledHeading> Not found </StyledHeading>
    </StyledPageNotFound>
  </>
);
