/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { StyledMovieFullInfoHeader } from './movie-full-info.styles';
import { MovieCardFullSize } from '../movie-card-full-size/movie-card-full-size.component';

type MovieFullInfoProps = {
  currentFilm: object;
};

export const MovieFullInfo: FC<MovieFullInfoProps> = ({ currentFilm }) => (
  <StyledMovieFullInfoHeader>
    <MovieCardFullSize
      poster={currentFilm.poster_path}
      title={currentFilm.title}
      date={currentFilm.release_date}
      description={currentFilm.overview}
      key={currentFilm.id}
    />
  </StyledMovieFullInfoHeader>
);
