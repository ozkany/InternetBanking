import * as AccountActions from './account.actions';
import { State, initialState } from './account.state';

export function reducer(state = initialState, action: AccountActions.AccountActions): State {

  switch (action.type) {
    case AccountActions.ActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      };
    case AccountActions.ActionTypes.SET_ACCOUNT_ACTIVITIES:
      return {
        ...state,
        accountActivities: action.payload
      };
    case AccountActions.ActionTypes.SET_RECEIPT:
      return {
        ...state,
        receipt: action.payload
      };
    case AccountActions.ActionTypes.SET_ASSETS:
      return {
        ...state,
        assets: action.payload
      };
    default:
      return state;
  }
}
