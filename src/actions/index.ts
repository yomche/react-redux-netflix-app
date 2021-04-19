import {
  viewTypeAction,
  currentMovieAction,
  updateSearchInputValueAction,
  fetchSuccessAction,
  fetchSortByDateAction,
  fetchSortByRatingAction,
  searchMovieByParametersAction,
} from './action-names';
import { moviesUrl, moviesUrlSortByDate, moviesUrlSortByRating } from '../constants/app.constants';
import { CurrentMovieType, MoviesDataType } from '../types';

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

export const setInputValue = (searchInputValue: Record<string, any>): Record<string, any> => ({
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

export function setMoviesSortByDate(sortedMoviesListByDate: MoviesDataType): ActionMoviesSuccess {
  return { type: fetchSortByDateAction, payload: sortedMoviesListByDate };
}

export function setMoviesSortByRating(
  sortedMoviesListByRating: MoviesDataType
): ActionMoviesSuccess {
  return { type: fetchSortByRatingAction, payload: sortedMoviesListByRating };
}

export const fetchMovies = () => (dispatch: (actionCreator: ActionMoviesSuccess) => void): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    });
};

export const fetchMoviesByDate = () => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  fetch(moviesUrlSortByDate)
    .then((response) => response.json())
    .then((moviesDataByDate) => {
      dispatch(setMoviesSortByDate(moviesDataByDate));
    });
};

export const fetchMoviesByRating = () => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  fetch(moviesUrlSortByRating)
    .then((response) => response.json())
    .then((moviesDataByRating) => {
      dispatch(setMoviesSortByRating(moviesDataByRating));
    });
};

export function setMoviesByParameters(moviesList: MoviesDataType): ActionMoviesSuccess {
  return { type: searchMovieByParametersAction, payload: moviesList };
}

export const searchMovieByParameters = (movieGenre: string) => (
  dispatch: (actionCreator: ActionMoviesSuccess) => void
): void => {
  const searchURL = `http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=${movieGenre}&searchBy=genres`;
  fetch(searchURL)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesByParameters(moviesData));
    });
};
