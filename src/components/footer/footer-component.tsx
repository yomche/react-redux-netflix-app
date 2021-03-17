import React from 'react';
import { LogoComponent } from '../logo/logo-component';
import { StyledFooter, StyledCopyright } from './footer-styles';

export const FooterComponent = ():JSX.Element => (
  <StyledFooter>
    <LogoComponent />
    <StyledCopyright>ALL RIGHTS RESERVED, 2021</StyledCopyright>
  </StyledFooter>
);
