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
      poster_path={currentMovieFullInfo.poster_path}
      title={currentMovieFullInfo.title}
      release_date={currentMovieFullInfo.release_date}
      overview={currentMovieFullInfo.overview}
      key={currentMovieFullInfo.id}
    />
  </StyledMovieFullInfoHeader>
);
