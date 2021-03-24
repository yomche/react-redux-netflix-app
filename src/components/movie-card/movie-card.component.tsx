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
  release_date: string;
  overview: string;
  key: number;
  onClickToChange: (currentMovie: {
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
  }) => React.MouseEventHandler<HTMLLIElement>;
};

export const MovieCard: FC<MovieCardProps> = ({
  poster_path,
  title,
  genre,
  release_date,
  overview,
  onClickToChange,
}) => (
  <StyledMovieCard onClick={onClickToChange({ poster_path, title, release_date, overview })}>
    <MovieCardPoster src={poster_path} />
    <StyledMovieCardTitle> {title} </StyledMovieCardTitle>
    <StyledMovieCardInfo>
      <StyledMovieCardGenre> {genre} </StyledMovieCardGenre>
      <StyledMovieCardDate> {release_date} </StyledMovieCardDate>
    </StyledMovieCardInfo>
  </StyledMovieCard>
);
