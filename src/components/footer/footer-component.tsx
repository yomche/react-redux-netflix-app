import React, { FC } from 'react';
import { LogoComponent } from '../logo/logo-component';
import { StyledFooter, StyledCopyright } from './footer-styles';

export const FooterComponent: FC = () => (
  <StyledFooter>
    <LogoComponent />
    <StyledCopyright>ALL RIGHTS RESERVED, 2021</StyledCopyright>
  </StyledFooter>
);
