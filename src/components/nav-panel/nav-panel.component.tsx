import React, { FC } from 'react';
import { Logo } from '../logo/logo.component';
import { StyledSearchButton, StyledNav } from './nav-panel.styles';

export const NavPanel: FC = () => (
  <StyledNav>
    <Logo />
    <StyledSearchButton> SEARCH </StyledSearchButton>
  </StyledNav>
);
