import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo.component';
import { StyledSearchButton, StyledNav } from './nav-panel.styles';

type NavPanelProps = {
  onClickToChange: () => void;
};

export const NavPanel: FC<NavPanelProps> = ({ onClickToChange }) => (
  <StyledNav>
    <Logo />
    <Link to="/">
      <StyledSearchButton onClick={onClickToChange}> SEARCH </StyledSearchButton>
    </Link>
  </StyledNav>
);
