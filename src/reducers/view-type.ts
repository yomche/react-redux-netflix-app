import { viewTypeAction } from '../actions/action-names';
import { TypeOfView } from '../constants/app.constants';

export const initialState = TypeOfView.movieList;

export function viewTypeData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case viewTypeAction:
      return action.payload;
    default:
      return state;
  }
}
