import React from 'react';
import StyledLogo from '../logo/logo-styles';
import StyledHeader from './header-styles';

const HeaderComponent = ():JSX.Element => (
  <StyledHeader>
    <StyledLogo />
  </StyledHeader>
);

export default HeaderComponent;
