import { Action } from '@ngrx/store';
import { MoneyOrderRequest, TransferActivities, MoneyOrderResponse } from '@core/models';

export const enum ActionTypes {
  CALL_GET_TRANSFER_ACTIVITIES = 'CALL_GET_TRANSFER_ACTIVITIES',
  CALL_MONEY_ORDER = 'CALL_MONEY_ORDER',
  SET_TRANSFER_ACTIVITIES = 'SET_TRANSFER_ACTIVITIES',
  SET_MONEY_ORDER_RESPONSE = 'SET_MONEY_ORDER_RESPONSE',
  MONEY_ORDER_SUCCESS = 'MONEY_ORDER_SUCCESS',
  MONEY_ORDER_FAIL = 'MONEY_ORDER_FAIL'
}

export class CallGetTransferActivities implements Action {
  readonly type = ActionTypes.CALL_GET_TRANSFER_ACTIVITIES;
}

export class CallMakeMoneyOrder implements Action {
  readonly type = ActionTypes.CALL_MONEY_ORDER;
  constructor(public payload: MoneyOrderRequest) { }
}

export class SetTransferActivities implements Action {
  readonly type = ActionTypes.SET_TRANSFER_ACTIVITIES;
  constructor(public payload: TransferActivities) { }
}

export class SetMakeMoneyOrderResponse implements Action {
  readonly type = ActionTypes.SET_TRANSFER_ACTIVITIES;
  constructor(public payload: any) { }
}

export class MakeMoneyOrderSuccess implements Action {
  readonly type = ActionTypes.MONEY_ORDER_SUCCESS;
  constructor(public payload: MoneyOrderResponse) { }
}

export class MakeMoneyOrderFail implements Action {
  readonly type = ActionTypes.MONEY_ORDER_FAIL;
  constructor(public payload: any) { }
}

export type TransferActions = CallGetTransferActivities | SetTransferActivities | MakeMoneyOrderSuccess | MakeMoneyOrderFail;
