import { currentMovieAction } from '../actions/action-names';
import { CurrentMovieType } from '../types';

export const initialState: CurrentMovieType = {
  poster_path: '',
  title: '',
  releaseDate: '',
  overview: '',
  id: 0,
};

export function currentMovieData(
  state = initialState,
  action: { type: string; payload: CurrentMovieType }
): CurrentMovieType {
  switch (action.type) {
    case currentMovieAction:
      return action.payload;
    default:
      return state;
  }
}
