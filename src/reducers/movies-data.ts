import { Map } from 'immutable';
import { fetchSuccessAction } from '../actions/action-names';
import { MoviesDataType } from '../types';

interface MoviesDataState extends Map<string, any> {
  movies?: MoviesDataType[];
}

const initialState: MoviesDataState = Map({
  movies: [],
});

export const moviesData = (
  state = initialState,
  action: { type: string; payload: MoviesDataType[] }
): MoviesDataState => {
  switch (action.type) {
    case fetchSuccessAction:
      return state.set('movies', action.payload);
    default:
      return state;
  }
};
