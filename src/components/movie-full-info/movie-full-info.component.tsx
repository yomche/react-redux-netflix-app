import React, { FC } from 'react';
import { StyledMovieFullInfoHeader } from './movie-full-info.styles';
import { NavPanel } from '../nav-panel/nav-panel.component';
import { MovieCardFullSize } from '../movie-card-full-size/movie-card-full-size.component';
import { movies } from '../../movies-list';

export const MovieFullInfo: FC = () => (
  <>
    <StyledMovieFullInfoHeader>
      <NavPanel />
      <MovieCardFullSize
        poster={movies[0].poster_path}
        title={movies[0].title}
        date={movies[0].release_date}
        description={movies[0].overview}
        key={movies[0].id}
      />
    </StyledMovieFullInfoHeader>
  </>
);
