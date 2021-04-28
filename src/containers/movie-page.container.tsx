import React from 'react';

import { GlobalStyle } from '../../styles/global-styles';
import { StyledHeader } from '../components/header/header.styles';
import { MovieFullInfo } from '../components/movie-full-info/movie-full-info.component';

export const MoviePageContainer = ({ match }) => {
  const {
    params: { movieId },
  } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {movieId}
      </p>
      <p>
        <strong>User Name: </strong>
      </p>
    </>
  );
};
