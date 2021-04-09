import { currentMovie } from '../actions/action-types';
import { currentMovieType } from '../constants/app.constants';

export const initialState: currentMovieType = {
  posterPath: '',
  title: '',
  releaseDate: '',
  overview: '',
  id: 0,
};

export function currentMovieData(
  state = initialState,
  action: { type: string; payload: currentMovieType }
): currentMovieType {
  if (action.type === currentMovie) {
    return action.payload;
  }
  return state;
}
