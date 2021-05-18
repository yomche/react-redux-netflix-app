import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import {
  setViewTypeAction,
  setCurrentMovieAction,
  updateSearchInputValueAction,
  fetchSuccessAction,
  setSortTypeAction,
  setSearchTypeAction,
  setLoadingStatusAction,
} from './action-names';
import { moviesUrl, TypeOfView } from '../constants/app.constants';
import { CurrentMovieType, MoviesDataType, ResponseType } from '../types';

import { generateUrlByGenre, generateUrlBySortType, generateUrlByInputValue } from '../helpers';

type ActionViewType = {
  type: string;
  payload: string;
};

export function setViewType(viewType: string): ActionViewType {
  return { type: setViewTypeAction, payload: viewType };
}

type ActionCurrentMovie = {
  type: string;
  payload: CurrentMovieType;
};

export function setCurrentMovie(currentMovie: CurrentMovieType): ActionCurrentMovie {
  return { type: setCurrentMovieAction, payload: currentMovie };
}

type ActionInputValue = {
  type: string;
  payload: Record<string, any>;
};

export const setInputValue = (searchInputValue: Record<string, any>): ActionInputValue => ({
  type: updateSearchInputValueAction,
  payload: searchInputValue,
});

type ActionFetchSuccess = {
  type: string;
  payload: MoviesDataType[];
};

export function setMoviesSuccess(moviesList: MoviesDataType[]): ActionFetchSuccess {
  return { type: fetchSuccessAction, payload: moviesList };
}

type LoadingStatusAction = {
  type: string;
  payload: boolean;
};

export const setLoadingStatus = (loadingStatus: boolean): LoadingStatusAction => ({
  type: setLoadingStatusAction,
  payload: loadingStatus,
});

export const fetchMovies = () => (dispatch: ThunkDispatch<RootState, void, any>): void => {
  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
      dispatch(setViewType(TypeOfView.movieList));
      dispatch(setLoadingStatus(false));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

type ActionSetSortType = {
  type: string;
  payload: string;
};

export const setSortType = (SortType: string): ActionSetSortType => ({
  type: setSortTypeAction,
  payload: SortType,
});

type ActionSetSearchType = {
  type: string;
  payload: string;
};

export const setSearchType = (SearchType: string): ActionSetSearchType => ({
  type: setSearchTypeAction,
  payload: SearchType,
});

export const fetchMoviesBySortType = (sortType: string) => (
  dispatch: ThunkDispatch<RootState, void, ActionFetchSuccess>
): void => {
  fetch(generateUrlBySortType(sortType))
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMoviesByGenre = (sortType: string, movieGenre: string) => (
  dispatch: ThunkDispatch<RootState, void, ActionFetchSuccess>
): void => {
  fetch(generateUrlByGenre(sortType, movieGenre))
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
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
) => (dispatch: ThunkDispatch<RootState, void, any>): void => {
  fetch(generateUrlByInputValue(sortType, inputValue, searchType))
    .then((response) => response.json())
    .then((moviesData: ResponseType) => {
      dispatch(setMoviesSuccess(moviesData.data));
      dispatch(setLoadingStatus(false));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export const fetchMovieById = (movieId: number) => (
  dispatch: ThunkDispatch<RootState, void, any>
): void => {
  const searchURL = `${moviesUrl}/${movieId}`;
  fetch(searchURL)
    .then((response) => response.json())
    .then((movieData: MoviesDataType) => {
      dispatch(setCurrentMovie(movieData));
      dispatch(setViewType(TypeOfView.movieFullInfo));
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};
