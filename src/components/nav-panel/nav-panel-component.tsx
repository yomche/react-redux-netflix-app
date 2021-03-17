import React from 'react';
import { LogoComponent } from '../logo/logo-component';
import { StyledSearchButton, StyledNav } from './nav-panel-styles';

export const NavPanel = ():JSX.Element => (
  <StyledNav>
    <LogoComponent />
    <StyledSearchButton> SEARCH </StyledSearchButton>
  </StyledNav>
);
