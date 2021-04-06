import React, { FC, useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';

import { typeOfView } from '../constants/app.constants';
import { GlobalStyle } from '../../styles/global-styles';
import { Header } from '../components/header/header.component';
import { MoviesList } from '../components/movies-list/movies-list.component';
import { Footer } from '../components/footer/footer.component';
import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { ErrorBoundaryMoviesList } from './error-boundary';
import { setViewType, setCurrentMovie } from '../actions';

type AppProps = {
  viewType: string;
  currentMovie: {
    posterPath: string;
    title: string;
    releaseDate: string;
    overview: string;
    id: number;
  };
};

const AppComponent: FC<AppProps> = ({ viewType, currentMovie }) => {
  const dispatch = useDispatch();
  const setMovieFullInfoType = useCallback(
    (chosenMovie) => () => {
      dispatch(setViewType(typeOfView.movieFullInfo));
      dispatch(setCurrentMovie(chosenMovie));
    },
    []
  );
  const setMovieListType = useCallback(() => dispatch(setViewType(typeOfView.movieList)), []);

  return (
    <>
      <GlobalStyle />
      <Header
        viewType={viewType}
        currentMovie={currentMovie}
        onSetMovieListType={setMovieListType}
      />
      <MoviesSorter />
      <ErrorBoundaryMoviesList>
        <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: { viewType: string; currentMovie: Record<string, unknown> }) => ({
  viewType: state.viewType,
  currentMovie: state.currentMovie,
});

export const App = connect(mapStateToProps)(AppComponent);
