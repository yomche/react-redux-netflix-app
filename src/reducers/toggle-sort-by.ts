import { toggleSortByAction } from '../actions/action-names';

export const initialState = '';

export function toggleSortByData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case toggleSortByAction:
      return action.payload;
    default:
      return state;
  }
}
