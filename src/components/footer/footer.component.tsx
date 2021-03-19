import React, { FC } from 'react';
import { Logo } from '../logo/logo.component';
import { StyledFooter, StyledCopyright } from './footer.styles';

export const Footer: FC = () => (
  <StyledFooter>
    <Logo />
    <StyledCopyright>ALL RIGHTS RESERVED, 2021</StyledCopyright>
  </StyledFooter>
);
