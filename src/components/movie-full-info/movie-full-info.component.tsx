import React, { FC } from 'react';
import { StyledMovieFullInfoHeader } from './movie-full-info.styles';
import { MovieCardFullSize } from '../movie-card-full-size/movie-card-full-size.component';

type MovieFullInfoProps = {
  currentMovieFullInfo: {
    posterPath: string;
    title: string;
    releaseDate: string;
    overview: string;
    id: number;
  };
};

export const MovieFullInfo: FC<MovieFullInfoProps> = ({ currentMovieFullInfo }) => (
  <StyledMovieFullInfoHeader>
    <MovieCardFullSize
      posterPath={currentMovieFullInfo.posterPath}
      title={currentMovieFullInfo.title}
      releaseDate={currentMovieFullInfo.releaseDate}
      overview={currentMovieFullInfo.overview}
      key={currentMovieFullInfo.id}
    />
  </StyledMovieFullInfoHeader>
);
