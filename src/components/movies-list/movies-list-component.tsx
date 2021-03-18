import React, { FC } from 'react';
import { StyledMoviesList, MoviesListElement } from './movies-list-styles';

export const MoviesList: FC = () => (
  <StyledMoviesList>
    <MoviesListElement />
    <MoviesListElement />
    <MoviesListElement />
    <MoviesListElement />
    <MoviesListElement />
    <MoviesListElement />
    <MoviesListElement />
  </StyledMoviesList>
);
