import { updateFormStateAction } from '../actions/action-names';

const initialState: any = null;

export function formStateData(
  state = initialState,
  action: { type: any; form: any; payload: any }
) {
  switch (action.type) {
    case updateFormStateAction:
      return {
        ...state,
        [action.form]: action.payload,
      };
    default:
      return state;
  }
}
