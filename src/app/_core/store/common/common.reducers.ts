import { initialState, State } from './common.state';
import * as CommonActions from './common.actions';

export function reducer(state = initialState, action: CommonActions.CommonActions): State {
  switch (action.type) {
    case CommonActions.ActionTypes.EFFECT_ERROR:
      return {
        ...state,
        effectError: action.payload
      };
      break;
    case CommonActions.ActionTypes.GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.payload
      };
    default:
      return state;
  }
}
