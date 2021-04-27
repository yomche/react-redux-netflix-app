import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TypeOfView } from '../constants/app.constants';
import { MoviesList } from '../components/movies-list/movies-list.component';
import { setViewType, setCurrentMovie, fetchMovies, fetchMoviesByGenre } from '../actions';
import { RootState } from '../store';

export const MoviesListContainer: FC = () => {
  const { moviesData, movieSortType } = useSelector((state: RootState) => ({
    moviesData: state.moviesData.data,
    movieSortType: state.toggleSortTypeData,
  }));
  const dispatch = useDispatch();

  const setMovieFullInfoType = useCallback(
    (chosenMovie) => () => {
      dispatch(setViewType(TypeOfView.movieFullInfo));
      dispatch(setCurrentMovie(chosenMovie));
      dispatch(fetchMoviesByGenre(movieSortType, chosenMovie.genre));
    },
    []
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return <MoviesList onSetMovieFullInfoType={setMovieFullInfoType} moviesData={moviesData} />;
};
