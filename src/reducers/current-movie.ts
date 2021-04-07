import { currentMovie } from '../actions/action-types';

export const initialState = {
  currentMovie: {},
};

export function currentMovieData(
  state = initialState,
  action: { type: string; payload: string }
): Record<string, unknown> {
  if (action.type === currentMovie) {
    return { ...state, currentMovie: action.payload };
  }
  return state;
}
