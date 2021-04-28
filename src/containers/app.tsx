import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from '../../styles/global-styles';
import { ErrorBoundaryMoviesList } from './error-boundary';
import { MoviesSorterContainer } from './movies-sorter.container';
import { HeaderContainer } from './header.container';
import { MoviesListContainer } from './movies-list.container';
import { Footer } from '../components/footer/footer.component';
import { fetchMovies } from '../actions';
import { MoviePageContainer } from './movie-page.container';
import { NotFoundContainer } from '../components/not-found/not-found.component';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {' '}
          <GlobalStyle />
          <HeaderContainer />
          <MoviesSorterContainer />
          <ErrorBoundaryMoviesList>
            <MoviesListContainer />
          </ErrorBoundaryMoviesList>
          <Footer />{' '}
        </Route>
        <Route exact path="/movies/:movieId" component={MoviePageContainer} />
        <Route path="*" component={NotFoundContainer} />
      </Switch>
    </Router>
  );
};
