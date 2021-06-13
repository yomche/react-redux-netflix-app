import React, { FC } from 'react';
import {
  StyledMoviesList,
  StyledContainer,
  StyledMoviesNotFound,
  StyledLink,
} from './movies-list.styles';
import { MovieCard } from '../movie-card/movie-card.component';
import { MoviesDataType } from '../../types';

type MoviesListProps = {
  moviesData: MoviesDataType[];
  onSetMovieFullInfoType: (currentMovie: {
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
    genre: string;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MoviesList: FC<MoviesListProps> = ({ onSetMovieFullInfoType, moviesData }) => (
  <StyledContainer>
    <StyledMoviesList>
      {moviesData !== undefined &&
        moviesData.map(({ poster_path, title, genres, release_date, overview, id }) => (
          <StyledLink to={`/movies/${id}`} key={id}>
            <MovieCard
              onClickToChange={onSetMovieFullInfoType}
              poster_path={poster_path}
              title={title}
              genre={genres[0]}
              release_date={release_date}
              overview={overview}
              key={id}
            />
          </StyledLink>
        ))}
      {moviesData !== undefined && moviesData.length === 0 && (
        <StyledMoviesNotFound>Sorry, no movies were found</StyledMoviesNotFound>
      )}
    </StyledMoviesList>
  </StyledContainer>
);
