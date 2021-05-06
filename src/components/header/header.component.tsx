import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';
import { TypeOfView } from '../../constants/app.constants';
import { CurrentMovieType } from '../../types';

type HeaderProps = {
  onSetSearchInputValue: (value: string) => void;
  viewType: string;
  onSetMovieListType: () => void;
  currentMovie: CurrentMovieType;
  onSetMovieSearchType: (value: string) => void;
  movieSearchType: string;
};

export const Header: FC<HeaderProps> = ({
  viewType,
  currentMovie,
  onSetSearchInputValue,
  onSetMovieListType,
  onSetMovieSearchType,
  movieSearchType,
}) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === TypeOfView.movieList ? (
      <>
        <SearchInput
          updateSearchInputValue={onSetSearchInputValue}
          setMovieSearchType={onSetMovieSearchType}
          movieSearchType={movieSearchType}
        />
      </>
    ) : (
      <MovieFullInfo currentMovieFullInfo={currentMovie} />
    )}
  </StyledHeader>
);
