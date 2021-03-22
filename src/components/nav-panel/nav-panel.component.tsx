import React, { FC } from 'react';
import { Logo } from '../logo/logo.component';
import { StyledSearchButton, StyledNav } from './nav-panel.styles';

interface NavPanelProps {
  onClickToChange: () => void;
}

export const NavPanel: FC<NavPanelProps> = ({ onClickToChange }) => (
  <StyledNav>
    <Logo />
    <StyledSearchButton onClick={onClickToChange}> SEARCH </StyledSearchButton>
  </StyledNav>
);
