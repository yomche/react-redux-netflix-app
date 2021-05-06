import { setSortTypeAction } from '../actions/action-names';

export const initialState = 'release_date';

export function sortTypeData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case setSortTypeAction:
      return action.payload;
    default:
      return state;
  }
}
