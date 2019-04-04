import { Action } from '@ngrx/store';

export const CALL_GET_TRANSFER_ACTIVITIES = 'CALL_GET_TRANSFER_ACTIVITIES';
export const CALL_MONEY_ORDER = 'CALL_MONEY_ORDER';
//
export const SET_TRANSFER_ACTIVITIES = 'SET_TRANSFER_ACTIVITIES';
export const SET_MONEY_ORDER_RESPONSE = 'SET_MONEY_ORDER_RESPONSE';
export const MONEY_ORDER_SUCCESS = 'MONEY_ORDER_SUCCESS';
export const MONEY_ORDER_FAIL = 'MONEY_ORDER_FAIL';


export class CallGetTransferActivities implements Action {
    readonly type = CALL_GET_TRANSFER_ACTIVITIES;
}

export class CallMakeMoneyOrder implements Action {
  readonly type = CALL_MONEY_ORDER;
  constructor(public payload: MoneyOrderRequest) { }
}

export class SetTransferActivities implements Action {
    readonly type = SET_TRANSFER_ACTIVITIES;
    constructor(public payload: TransferActivities) {}
}

export class SetMakeMoneyOrderResponse implements Action {
  readonly type = SET_TRANSFER_ACTIVITIES;
  constructor(public payload: any) { }
}

export class MakeMoneyOrderSuccess implements Action {
  readonly type = MONEY_ORDER_SUCCESS;
  constructor(public payload: MoneyOrderResponse) { }
}

export class MakeMoneyOrderFail implements Action {
  readonly type = MONEY_ORDER_FAIL;
  constructor(public payload: any) { }
}

export type TransferActions = CallGetTransferActivities | SetTransferActivities | MakeMoneyOrderSuccess | MakeMoneyOrderFail;
