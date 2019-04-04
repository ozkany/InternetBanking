import * as TransferActions from './transfer.actions';

export interface State {
  transferActivities: TransferActivities;
  message: any;
}

const initialState: State = {
  transferActivities: null,
  message: null
};


export function reducer(state = initialState, action: TransferActions.TransferActions): State {

  switch (action.type) {
    case TransferActions.SET_TRANSFER_ACTIVITIES:
      return {
        ...state,
        transferActivities: action.payload
      };
    case TransferActions.MONEY_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case TransferActions.MONEY_ORDER_FAIL:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }

}
