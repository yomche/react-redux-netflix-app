import React, { FC } from 'react';
import { StyledLoader, StyledHeading } from './loader.styles';
import { GlobalStyle } from '../../../styles/global-styles';

export const Loader: FC = () => (
  <>
    <GlobalStyle />
    <StyledLoader>
      <StyledHeading> Please, wait a sec... </StyledHeading>
    </StyledLoader>
  </>
);
