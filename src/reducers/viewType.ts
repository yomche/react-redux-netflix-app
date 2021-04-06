import { typeOfView } from '../constants/app.constants';
import { viewType } from '../actions/action-types';

export const initialState = {
  viewType: typeOfView.movieList,
};

export function viewTypeReducer(
  state = initialState,
  action: { type: string; payload: string }
): Record<string, unknown> {
  if (action.type === viewType) {
    return { ...state, viewType: action.payload };
  }
  return state;
}
