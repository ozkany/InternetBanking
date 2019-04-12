import * as TransferActions from './transfer.actions';
import { State, initialState } from './transfer.state';

export function reducer(state = initialState, action: TransferActions.TransferActions): State {

  switch (action.type) {
    case TransferActions.ActionTypes.SET_TRANSFER_ACTIVITIES:
      return {
        ...state,
        transferActivities: action.payload
      };
    case TransferActions.ActionTypes.MONEY_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case TransferActions.ActionTypes.MONEY_ORDER_FAIL:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }

}
