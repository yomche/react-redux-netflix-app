import React, { FC } from 'react';
import { Logo } from '../logo/logo.component';
import { StyledSearchButton, StyledNav } from './nav-panel.styles';

export const NavPanel: FC<{ onClickToChange: () => void }> = ({ onClickToChange }) => (
  <StyledNav>
    <Logo />
    <StyledSearchButton onClick={onClickToChange}> SEARCH </StyledSearchButton>
  </StyledNav>
);
