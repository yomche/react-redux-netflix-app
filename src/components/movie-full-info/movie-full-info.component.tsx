import React, { FC } from 'react';
import { StyledMovieFullInfoHeader } from './movie-full-info.styles';
import { MovieCardFullSize } from '../movie-card-full-size/movie-card-full-size.component';
import { CurrentMovieType } from '../../types';

type MovieFullInfoProps = {
  currentMovieFullInfo: CurrentMovieType;
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
