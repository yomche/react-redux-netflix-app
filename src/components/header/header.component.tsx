import React, { FC } from 'react';
import { StyledHeader } from './header.styles';
import { SearchInput } from '../search-input/search-input.component';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieFullInfo } from '../movie-full-info/movie-full-info.component';
import { TypeOfView } from '../../constants/app.constants';
import { CurrentMovieType } from '../../types';

type HeaderProps = {
  updateForm: (value: string) => () => void;
  viewType: string;
  onSetMovieListType: () => void;
  onSetToggleSearchByGenre: () => void;
  onSetToggleSearchByTitle: () => void;
  currentMovie: CurrentMovieType;
};

export const Header: FC<HeaderProps> = ({
  viewType,
  currentMovie,
  updateForm,
  onSetMovieListType,
  onSetToggleSearchByGenre,
  onSetToggleSearchByTitle,
}) => (
  <StyledHeader>
    <NavPanel onClickToChange={onSetMovieListType} />
    {viewType === TypeOfView.movieList ? (
      <>
        <SearchInput
          updateForm={updateForm}
          onClickToSearchGenre={onSetToggleSearchByGenre}
          onClickToSearchTitle={onSetToggleSearchByTitle}
        />
      </>
    ) : (
      <MovieFullInfo currentMovieFullInfo={currentMovie} />
    )}
  </StyledHeader>
);
