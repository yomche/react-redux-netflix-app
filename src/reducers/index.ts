import { combineReducers } from 'redux';
import { moviesData } from './movies-data';
import { viewTypeData } from './view-type';
import { currentMovieData } from './current-movie';
import { formStateData } from './update-form';

export const rootReducer = combineReducers({
  moviesData,
  viewTypeData,
  currentMovieData,
  formStateData,
});
