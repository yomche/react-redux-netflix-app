import { toggleBySortTypeAction } from '../actions/action-names';

export const initialState = 'release_date';

export function toggleSortTypeData(
  state = initialState,
  action: { type: string; payload: any }
): any {
  switch (action.type) {
    case toggleBySortTypeAction:
      return action.payload;
    default:
      return state;
  }
}
