import { viewType, currentMovie, fetchRequest, fetchSuccess, fetchFail } from './action-types';

export function setViewType(payload: string): Record<string, unknown> {
  return { type: viewType, payload };
}

export function setCurrentMovie(payload: Record<string, unknown>): Record<string, unknown> {
  return { type: currentMovie, payload };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchMovies = () => (dispatch: any) => {
  dispatch({ type: fetchRequest });

  const moviesUrl = 'http://react-cdp-api.herokuapp.com/movies';

  fetch(moviesUrl)
    .then((response) => response.json())
    .then((moviesData) => {
      console.log(moviesData);
      return dispatch({ type: fetchSuccess, payload: moviesData });
    })
    .catch((error) => dispatch({ type: fetchFail, payload: error }));
};
