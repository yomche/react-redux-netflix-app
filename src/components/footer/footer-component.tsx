import React from 'react';
import StyledLogo from '../logo/logo-styles';
import { StyledFooter, StyledCopyright } from './footer-styles';

const FooterComponent = ():JSX.Element => (
  <StyledFooter>
    <StyledLogo />
    <StyledCopyright>ALL RIGHTS RESERVED, 2021</StyledCopyright>
  </StyledFooter>
);

export default FooterComponent;
