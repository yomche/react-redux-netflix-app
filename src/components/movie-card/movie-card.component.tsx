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
  id: number;
  onClickToChange: (currentMovie: {
    posterPath: string;
    title: string;
    releaseDate: string;
    overview: string;
    genre: string;
    id: number;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MovieCard: FC<MovieCardProps> = ({
  posterPath,
  title,
  genre,
  releaseDate,
  overview,
  id,
  onClickToChange,
}) => {
  return (
    <StyledMovieCard
      onClick={onClickToChange({ posterPath, title, releaseDate, overview, genre, id })}
    >
      <MovieCardPoster src={posterPath} />
      <StyledMovieCardTitle> {title} </StyledMovieCardTitle>
      <StyledMovieCardInfo>
        <StyledMovieCardGenre> {genre} </StyledMovieCardGenre>
        <StyledMovieCardDate> {releaseDate} </StyledMovieCardDate>
      </StyledMovieCardInfo>
    </StyledMovieCard>
  );
};
