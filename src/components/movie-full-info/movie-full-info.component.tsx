import React, { FC } from 'react';
import { StyledMovieFullInfoHeader } from './movie-full-info.styles';
import { MovieCardFullSize } from '../movie-card-full-size/movie-card-full-size.component';

type MovieFullInfoProps = {
  currentMovieFullInfo: {
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
    id: number;
  };
};

export const MovieFullInfo: FC<MovieFullInfoProps> = ({ currentMovieFullInfo }) => (
  <StyledMovieFullInfoHeader>
    <MovieCardFullSize
      poster_path={currentMovieFullInfo.poster_path}
      title={currentMovieFullInfo.title}
      release_date={currentMovieFullInfo.release_date}
      overview={currentMovieFullInfo.overview}
      key={currentMovieFullInfo.id}
    />
  </StyledMovieFullInfoHeader>
);
