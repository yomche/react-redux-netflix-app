import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { typeOfView } from '../constants/app.constants';
import { GlobalStyle } from '../../styles/global-styles';
import { Header } from '../components/header/header.component';
import { MoviesList } from '../components/movies-list/movies-list.component';
import { Footer } from '../components/footer/footer.component';
import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { ErrorBoundaryMoviesList } from './error-boundary';
import { setViewType, setCurrentMovie, fetchMovies } from '../actions';
import { RootState } from '../reducers/index';

export const App: FC = () => {
  const { viewType, currentMovie, moviesData } = useSelector((state: RootState) => ({
    viewType: state.viewTypeData.viewType,
    currentMovie: state.currentMovieData.currentMovie,
    moviesData: state.moviesData.data,
  }));
  const dispatch = useDispatch();
  const setMovieFullInfoType = useCallback(
    (chosenMovie) => () => {
      dispatch(setViewType(typeOfView.movieFullInfo));
      dispatch(setCurrentMovie(chosenMovie));
    },
    []
  );
  const setMovieListType = useCallback(() => dispatch(setViewType(typeOfView.movieList)), []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

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
        <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} moviesData={moviesData} />
      </ErrorBoundaryMoviesList>
      <Footer />
    </>
  );
};
