import React, { FC } from 'react';
import { StyledMovieFullInfoHeader } from './movie-full-info.styles';
import { MovieCardFullSize } from '../movie-card-full-size/movie-card-full-size.component';
import { movies } from '../../movies-data';

export const MovieFullInfo: FC = () => {
  const moviesItem = movies[0];
  return (
    <StyledMovieFullInfoHeader>
      <MovieCardFullSize
        poster={moviesItem.poster_path}
        title={moviesItem.title}
        date={moviesItem.release_date}
        description={moviesItem.overview}
        key={moviesItem.id}
      />
    </StyledMovieFullInfoHeader>
  );
};
