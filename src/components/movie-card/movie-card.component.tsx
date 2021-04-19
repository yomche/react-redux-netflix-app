import React, { FC } from 'react';
import {
  StyledMovieCard,
  StyledMovieCardTitle,
  MovieCardPoster,
  StyledMovieCardGenre,
  StyledMovieCardDate,
  StyledMovieCardInfo,
} from './movie-card.styles';

type MovieCardProps = {
  posterPath: string;
  title: string;
  genre: string;
  releaseDate: string;
  overview: string;
  key: number;
  onClickToChange: (currentMovie: {
    posterPath: string;
    title: string;
    releaseDate: string;
    overview: string;
    genre: string;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MovieCard: FC<MovieCardProps> = ({
  posterPath,
  title,
  genre,
  releaseDate,
  overview,
  onClickToChange,
}) => (
  <StyledMovieCard onClick={onClickToChange({ posterPath, title, releaseDate, overview, genre })}>
    <MovieCardPoster src={posterPath} />
    <StyledMovieCardTitle> {title} </StyledMovieCardTitle>
    <StyledMovieCardInfo>
      <StyledMovieCardGenre> {genre} </StyledMovieCardGenre>
      <StyledMovieCardDate> {releaseDate} </StyledMovieCardDate>
    </StyledMovieCardInfo>
  </StyledMovieCard>
);
