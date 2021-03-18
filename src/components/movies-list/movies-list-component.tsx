import React, { FC } from 'react';
import { StyledMoviesList } from './movies-list-styles';
import { MovieCard } from '../movie-card/movie-card-component';
import { movies } from '../../movies-list';

export const MoviesList: FC = () => (
  <StyledMoviesList>
    {movies.map((movie) => (
      <MovieCard
        poster={movie.poster_path}
        title={movie.title}
        genre={movie.genres[0]}
        date={movie.release_date}
        key={movie.id}
      />
    ))}
  </StyledMoviesList>
);
