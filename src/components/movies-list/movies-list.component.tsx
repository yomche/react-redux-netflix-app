/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { StyledMoviesList, StyledContainer } from './movies-list.styles';
import { MovieCard } from '../movie-card/movie-card.component';
import { movies } from '../../movies-data';

type MoviesListProps = {
  onSetMovieFullInfoType: (param: object) => void;
};

export const MoviesList: FC<MoviesListProps> = ({ onSetMovieFullInfoType }) => (
  <StyledContainer>
    <StyledMoviesList>
      {movies.map(({ poster_path, title, genres, release_date, overview, id }) => (
        <MovieCard
          onClickToChange={onSetMovieFullInfoType}
          poster={poster_path}
          title={title}
          genre={genres[0]}
          date={release_date}
          description={overview}
          key={id}
        />
      ))}
    </StyledMoviesList>
  </StyledContainer>
);
