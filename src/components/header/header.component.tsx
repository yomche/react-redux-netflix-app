/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { Controls } from '../controls/controls.component';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';

import { typeOfView } from '../../constants/app.constants';

type HeaderProps = {
  viewType: string;
  onSetMovieListType: () => void;
  currentFilm: object;
};

export const Header: FC<HeaderProps> = ({ viewType, currentFilm, onSetMovieListType }) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === typeOfView.movieList ? (
      <>
        <SearchInput />
        <Controls />
      </>
    ) : (
      <MovieFullInfo currentFilm={currentFilm} />
    )}
  </StyledHeader>
);
