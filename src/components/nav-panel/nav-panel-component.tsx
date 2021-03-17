import React, { FC } from 'react';
import { LogoComponent } from '../logo/logo-component';
import { StyledSearchButton, StyledNav } from './nav-panel-styles';

export const NavPanel: FC = () => (
  <StyledNav>
    <LogoComponent />
    <StyledSearchButton> SEARCH </StyledSearchButton>
  </StyledNav>
);
