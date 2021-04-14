import { searchInputValueAction } from '../actions/action-names';

export const initialState = '';

export function searchInputValueData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case searchInputValueAction:
      return action.payload;
    default:
      return state;
  }
}
