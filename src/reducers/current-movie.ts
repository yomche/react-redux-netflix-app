import { Map } from 'immutable';
import { setCurrentMovieAction } from '../actions/action-names';
import { CurrentMovieType } from '../types';

interface currentMovieDataState extends Map<string, any> {
  movie?: CurrentMovieType;
}

const initialState: currentMovieDataState = Map({
  movie: {},
});

export function currentMovieData(
  state = initialState,
  action: { type: string; payload: CurrentMovieType }
): currentMovieDataState {
  switch (action.type) {
    case setCurrentMovieAction:
      return state.set('movie', action.payload);
    default:
      return state;
  }
}
