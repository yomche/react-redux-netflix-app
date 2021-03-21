import React, { FC } from 'react';
import {
  StyledMovieCard,
  StyledMovieCardTitle,
  MovieCardPoster,
  StyledMovieCardGenre,
  StyledMovieCardDate,
  StyledMovieCardInfo,
} from './movie-card.styles';

export const MovieCard: FC<{
  poster: string;
  title: string;
  genre: string;
  date: string;
  onClickToChange: () => void;
}> = ({ poster, title, genre, date, onClickToChange }) => (
  <StyledMovieCard onClick={onClickToChange}>
    <MovieCardPoster src={poster} />
    <StyledMovieCardTitle> {title} </StyledMovieCardTitle>
    <StyledMovieCardInfo>
      <StyledMovieCardGenre> {genre} </StyledMovieCardGenre>
      <StyledMovieCardDate> {date} </StyledMovieCardDate>
    </StyledMovieCardInfo>
  </StyledMovieCard>
);
