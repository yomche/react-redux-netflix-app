import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { Controls } from '../controls/controls.component';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';
import { typeOfView, currentMovieType } from '../../constants/app.constants';

type HeaderProps = {
  viewType: unknown;
  onSetMovieListType: () => void;
  currentMovie: currentMovieType;
};

export const Header: FC<HeaderProps> = ({ viewType, currentMovie, onSetMovieListType }) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === typeOfView.movieList ? (
      <>
        <SearchInput />
        <Controls />
      </>
    ) : (
      <MovieFullInfo currentMovieFullInfo={currentMovie} />
    )}
  </StyledHeader>
);
