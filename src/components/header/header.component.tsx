import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { Controls } from '../controls/controls.component';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';

export const Header: FC<{ viewType: string; onSetMovieListType: () => void }> = ({
  viewType,
  onSetMovieListType,
}) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === 'movieList' ? (
      <>
        <SearchInput />
        <Controls />
      </>
    ) : (
      <MovieFullInfo />
    )}
  </StyledHeader>
);
