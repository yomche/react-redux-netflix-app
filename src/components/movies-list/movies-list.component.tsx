import React, { FC } from 'react';
import { StyledMoviesList, StyledContainer } from './movies-list.styles';
import { MovieCard } from '../movie-card/movie-card.component';

type MoviesListProps = {
  moviesData: [];
  onSetMovieFullInfoType: (currentMovie: {
    posterPath: string;
    title: string;
    releaseDate: string;
    overview: string;
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
    </StyledMoviesList>
  </StyledContainer>
);
