import { updateSearchInputValueAction } from '../actions/action-names';

const initialState = '';

export function searchInputValueData(
  state = initialState,
  action: { type: string; payload: string }
): string {
  switch (action.type) {
    case updateSearchInputValueAction:
      return action.payload;
    default:
      return state;
  }
}
