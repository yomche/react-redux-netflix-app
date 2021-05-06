import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoviesSorter } from '../components/movies-sorter/movies-sorter.component';
import { setSortType, fetchMoviesBySortType } from '../actions';
import { RootState } from '../store';

export const MoviesSorterContainer: FC = () => {
  const { moviesAmount, movieSortType } = useSelector((state: RootState) => ({
    moviesAmount: state.moviesData.get('movies'),
    movieSortType: state.sortTypeData,
  }));
  const dispatch = useDispatch();

  const setMovieSortType = useCallback((sortTypeValue) => {
    dispatch(setSortType(sortTypeValue));
    dispatch(fetchMoviesBySortType(sortTypeValue));
  }, []);

  return (
    <MoviesSorter
      moviesAmount={moviesAmount.length}
      onSetMovieSortType={setMovieSortType}
      movieSortType={movieSortType}
    />
  );
};
