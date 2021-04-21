import React, { FC } from 'react';
import { StyledMoviesList, StyledContainer, StyledMoviesNotFound } from './movies-list.styles';
import { MovieCard } from '../movie-card/movie-card.component';
import { MoviesDataType } from '../../types';

type MoviesListProps = {
  moviesData: [MoviesDataType];
  onSetMovieFullInfoType: (currentMovie: {
    posterPath: string;
    title: string;
    releaseDate: string;
    overview: string;
    genre: string;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MoviesList: FC<MoviesListProps> = ({ onSetMovieFullInfoType, moviesData }) => (
  <StyledContainer>
    <StyledMoviesList>
      {moviesData !== undefined &&
        moviesData.map(({ poster_path, title, genres, release_date, overview, id }) => (
          <MovieCard
            onClickToChange={onSetMovieFullInfoType}
            posterPath={poster_path}
            title={title}
            genre={genres[0]}
            releaseDate={release_date}
            overview={overview}
            key={id}
          />
        ))}
      {moviesData.length === 0 && (
        <StyledMoviesNotFound>Sorry, no movies were found</StyledMoviesNotFound>
      )}
    </StyledMoviesList>
  </StyledContainer>
);
