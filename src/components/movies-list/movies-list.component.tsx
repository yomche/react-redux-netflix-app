import React, { FC } from 'react';
import { StyledMoviesList, StyledContainer } from './movies-list.styles';
import { MovieCard } from '../movie-card/movie-card.component';
import { movies } from '../../movies-data';

export const MoviesList: FC<{ onSetMovieFullInfoType: () => void }> = ({
  onSetMovieFullInfoType,
}) => (
  <StyledContainer>
    <StyledMoviesList>
      {movies.map(({ poster_path, title, genres, release_date, id }) => (
        <MovieCard
          onClickToChange={onSetMovieFullInfoType}
          poster={poster_path}
          title={title}
          genre={genres[0]}
          date={release_date}
          key={id}
        />
      ))}
    </StyledMoviesList>
  </StyledContainer>
);
