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
  poster_path: string;
  title: string;
  genre: string;
  releaseDate: string;
  overview: string;
  key: number;
  onClickToChange: (currentMovie: {
    poster_path: string;
    title: string;
    releaseDate: string;
    overview: string;
    genre: string;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MovieCard: FC<MovieCardProps> = ({
  poster_path,
  title,
  genre,
  releaseDate,
  overview,
  onClickToChange,
}) => {
  return (
    <StyledMovieCard
      onClick={onClickToChange({ poster_path, title, releaseDate, overview, genre })}
    >
      <MovieCardPoster src={poster_path} />
      <StyledMovieCardTitle> {title} </StyledMovieCardTitle>
      <StyledMovieCardInfo>
        <StyledMovieCardGenre> {genre} </StyledMovieCardGenre>
        <StyledMovieCardDate> {releaseDate} </StyledMovieCardDate>
      </StyledMovieCardInfo>
    </StyledMovieCard>
  );
};
