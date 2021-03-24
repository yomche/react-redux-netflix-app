/* eslint-disable @typescript-eslint/ban-types */
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
  poster: string;
  title: string;
  genre: string;
  date: string;
  description: string;
  key: number;
  onClickToChange: (param: object) => void;
};

export const MovieCard: FC<MovieCardProps> = ({
  poster,
  title,
  genre,
  date,
  description,
  key,
  onClickToChange,
}) => (
  <StyledMovieCard onClick={onClickToChange({ poster, title, date, description, key })}>
    <MovieCardPoster src={poster} />
    <StyledMovieCardTitle> {title} </StyledMovieCardTitle>
    <StyledMovieCardInfo>
      <StyledMovieCardGenre> {genre} </StyledMovieCardGenre>
      <StyledMovieCardDate> {date} </StyledMovieCardDate>
    </StyledMovieCardInfo>
  </StyledMovieCard>
);
