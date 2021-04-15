import { updateFormStateAction } from '../actions/action-names';
import { FormStateType } from '../types';

const initialState = { inputValue: '' };

export function formStateData(
  state = initialState,
  action: { type: string; payload: FormStateType }
): FormStateType {
  switch (action.type) {
    case updateFormStateAction:
      return action.payload;
    default:
      return state;
  }
}
