import { combineReducers } from 'redux';
import { moviesData } from './movies-data';
import { viewTypeData } from './view-type';
import { currentMovieData } from './current-movie';

export const rootReducer = combineReducers({
  moviesData,
  viewTypeData,
  currentMovieData,
});
