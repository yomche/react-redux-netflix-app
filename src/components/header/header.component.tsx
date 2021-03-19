import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { Controls } from '../controls/controls.component';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';

export const Header: FC = () => (
  <StyledHeader>
    <NavPanel />
    <SearchInput />
    <Controls />
  </StyledHeader>
);
