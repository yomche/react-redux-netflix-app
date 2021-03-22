import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { Controls } from '../controls/controls.component';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';

import { typeOfView } from '../../constants/app.constants';

interface HeaderProps {
  viewType: string;
  onSetMovieListType: () => void;
}

export const Header: FC<HeaderProps> = ({ viewType, onSetMovieListType }) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === typeOfView.movieList ? (
      <>
        <SearchInput />
        <Controls />
      </>
    ) : (
      <MovieFullInfo />
    )}
  </StyledHeader>
);
