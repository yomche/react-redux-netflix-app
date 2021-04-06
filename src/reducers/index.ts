import { combineReducers } from 'redux';
import { viewTypeReducer } from './viewType';
import { currentMovieReducer } from './currentMovie';

export const rootReducer = combineReducers({ viewTypeReducer, currentMovieReducer });
