import {
  viewTypeAction,
  currentMovieAction,
  updateSearchInputValueAction,
  fetchSuccessAction,
  toggleBySortTypeAction,
} from './action-names';
import { moviesUrl } from '../constants/app.constants';
import { CurrentMovieType, MoviesDataType, FormStateType } from '../types';

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
  payload: FormStateType;
};

export const setInputValue = (searchInputValue: FormStateType): ActionInputValue => ({
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

export const fetchMovies = () => (dispatch: (actionCreator: ActionMoviesSuccess) => void): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
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

export const fetchMoviesBySortType = (sortType: string) => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  const searchURL = `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortType}&sortOrder=desc`;
  fetch(searchURL)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    });
};

export const fetchMoviesByGenre = (sortType: string, movieGenre: string) => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  const searchURL = `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortType}&sortOrder=desc&search=${movieGenre}&searchBy=genres`;
  fetch(searchURL)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    });
};

export const fetchMoviesByInputValue = (
  sortType: string,
  inputValue: string,
  searchType: string
) => (dispatch: (actionCreator: ActionMoviesSuccess) => void): void => {
  const searchURL = `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortType}&sortOrder=desc&search=${inputValue}&searchBy=${searchType}`;
  fetch(searchURL)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    });
};
