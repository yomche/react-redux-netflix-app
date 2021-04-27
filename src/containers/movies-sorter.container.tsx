import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { fetchMovies, setToggleBySortType, fetchMoviesBySortType } from '../actions';
import { RootState } from '../store';

export const MoviesSorterContainer: FC = () => {
  const { moviesAmount, movieSortType } = useSelector((state: RootState) => ({
    moviesAmount: state.moviesData.data.length,
    movieSortType: state.toggleSortTypeData,
  }));
  const dispatch = useDispatch();

  const setSortType = useCallback((sortTypeValue) => {
    dispatch(setToggleBySortType(sortTypeValue));
    dispatch(fetchMoviesBySortType(sortTypeValue));
  }, []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <MoviesSorter
      moviesAmount={moviesAmount}
      onSetSortType={setSortType}
      movieSortType={movieSortType}
    />
  );
};