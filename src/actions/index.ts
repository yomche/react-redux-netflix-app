import { viewType, currentMovie, fetchSuccess, fetchFail } from './action-types';

export function setViewType(payload: string): Record<string, unknown> {
  return { type: viewType, payload };
}

export function setCurrentMovie(payload: Record<string, unknown>): Record<string, unknown> {
  return { type: currentMovie, payload };
}

export function setMoviesSuccess(payload: Record<string, unknown>): Record<string, unknown> {
  return { type: fetchSuccess, payload };
}

export function setMoviesFail(payload: Record<string, unknown>): Record<string, unknown> {
  return { type: fetchFail, payload };
}

export const fetchMovies = () => (dispatch: any) => {
  const moviesUrl = 'http://react-cdp-api.herokuapp.com/movies';

  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      dispatch(setMoviesSuccess(moviesData));
    })
    .catch((error) => dispatch(setMoviesFail(error)));
};
