import { viewType } from '../actions/action-types';
import { typeOfView } from '../constants/app.constants';

export const initialState = typeOfView.movieList;

export function viewTypeData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  if (action.type === viewType) {
    return action.payload;
  }
  return state;
}
