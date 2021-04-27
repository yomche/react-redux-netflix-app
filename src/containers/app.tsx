import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from '../../styles/global-styles';
import { ErrorBoundaryMoviesList } from './error-boundary';
import { MoviesSorterContainer } from './movies-sorter.container';
import { HeaderContainer } from './header.container';
import { MoviesListContainer } from './movies-list.container';
import { Footer } from '../components/footer/footer.component';
import { fetchMovies } from '../actions';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <MoviesSorterContainer />
      <ErrorBoundaryMoviesList>
        <MoviesListContainer />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};
