import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import {
  viewTypeAction,
  currentMovieAction,
  updateSearchInputValueAction,
  fetchSuccessAction,
  toggleBySortTypeAction,
  toggleBySearchTypeAction,
} from './action-names';
import { moviesUrl } from '../constants/app.constants';
import { CurrentMovieType, MoviesDataType } from '../types';

import { generatedUrlByGenre, generatedUrlBySortType, generatedUrlByInputValue } from '../handlers';

type ActionViewType = {
  type: string;
  payload: string;
};

export function setViewType(viewType: string): ActionViewType {
  return { type: viewTypeAction, payload: viewType };
}

type ActionCurrentMovie = {
  type: string;
  payload: CurrentMovieType;
};

export function setCurrentMovie(currentMovie: CurrentMovieType): ActionCurrentMovie {
  return { type: currentMovieAction, payload: currentMovie };
}

type ActionInputValue = {
  type: string;
  payload: Record<string, any>;
};

export const setInputValue = (searchInputValue: Record<string, any>): ActionInputValue => ({
  type: updateSearchInputValueAction,
  payload: searchInputValue,
});

type ActionMoviesSuccess = {
  type: string;
  payload: MoviesDataType;
};

export function setMoviesSuccess(moviesList: MoviesDataType): ActionMoviesSuccess {
  return { type: fetchSuccessAction, payload: moviesList };
}

export const fetchMovies = () => (
  dispatch: ThunkDispatch<RootState, void, ActionMoviesSuccess>
): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

type ActionToggleBySortType = {
  type: string;
  payload: string;
};

export const setToggleBySortType = (SortType: string): ActionToggleBySortType => ({
  type: toggleBySortTypeAction,
  payload: SortType,
});

export const setToggleBySearchType = (SearchType: string): ActionToggleBySortType => ({
  type: toggleBySearchTypeAction,
  payload: SearchType,
});

export const fetchMoviesBySortType = (sortType: string) => (
  dispatch: ThunkDispatch<RootState, void, ActionMoviesSuccess>
): void => {
  fetch(generatedUrlBySortType(sortType))
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMoviesByGenre = (sortType: string, movieGenre: string) => (
  dispatch: ThunkDispatch<RootState, void, ActionMoviesSuccess>
): void => {
  fetch(generatedUrlByGenre(sortType, movieGenre))
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMoviesByInputValue = (
  sortType: string,
  inputValue: string,
  searchType: string
) => (dispatch: ThunkDispatch<RootState, void, ActionMoviesSuccess>): void => {
  fetch(generatedUrlByInputValue(sortType, inputValue, searchType))
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};
