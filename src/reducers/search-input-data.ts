import { updateSearchInputValueAction } from '../actions/action-names';
import { FormStateType } from '../types';

const initialState = { inputValue: '', searchType: 'title' };

export function searchInputValueData(
  state = initialState,
  action: { type: string; payload: FormStateType }
): FormStateType {
  switch (action.type) {
    case updateSearchInputValueAction:
      return action.payload;
    default:
      return state;
  }
}
