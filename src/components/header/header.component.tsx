import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';
import { TypeOfView } from '../../constants/app.constants';
import { CurrentMovieType } from '../../types';

type HeaderProps = {
  viewType: string;
  onSetMovieListType: () => void;
  currentMovie: CurrentMovieType;
};

export const Header: FC<HeaderProps> = ({
  viewType,
  currentMovie,
  onSetMovieListType,
}) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === TypeOfView.movieList ? (
      <>
        <SearchInput />
      </>
    ) : (
      <MovieFullInfo currentMovieFullInfo={currentMovie} />
    )}
  </StyledHeader>
);
