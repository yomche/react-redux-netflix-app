import { Map } from 'immutable';
import { fetchSuccessAction } from '../actions/action-names';
import { DataType } from '../types';

const initialState = Map({
  movies: {},
});

export const moviesData = (state = initialState, action: { type: string; payload: any }): any => {
  switch (action.type) {
    case fetchSuccessAction:
      return state.update('movies', () => action.payload);
    default:
      return state;
  }
};
