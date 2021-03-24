import React, { FC } from 'react';
import { StyledMoviesList, StyledContainer } from './movies-list.styles';
import { MovieCard } from '../movie-card/movie-card.component';
import { movies } from '../../movies-data';

type MoviesListProps = {
  onSetMovieFullInfoType: (currentMovie: {
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MoviesList: FC<MoviesListProps> = ({ onSetMovieFullInfoType }) => (
  <StyledContainer>
    <StyledMoviesList>
      {movies.map(({ poster_path, title, genres, release_date, overview, id }) => (
        <MovieCard
          onClickToChange={onSetMovieFullInfoType}
          poster_path={poster_path}
          title={title}
          genre={genres[0]}
          release_date={release_date}
          overview={overview}
          key={id}
        />
      ))}
    </StyledMoviesList>
  </StyledContainer>
);
