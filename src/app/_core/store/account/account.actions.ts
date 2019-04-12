import { Action } from '@ngrx/store';
import { CustomerAccount } from '../../models/accounts/account.model';
import { GetAssetsRootResponse } from '../../models/accounts/assets.model';

export const enum ActionTypes {
  CALL_GET_ACCOUNTS = 'CALL_GET_ACCOUNTS',
  NAVTO_ACCOUNT_ACTIVITIES = 'NAVTO_ACCOUNT_ACTIVITIES',
  CALL_RECEIPT = 'CALL_RECEIPT',
  CALL_GET_ASSETS = 'CALL_GET_ASSETS',
  SET_ACCOUNTS = 'SET_ACCOUNTS',
  SET_ACCOUNT_ACTIVITIES = 'SET_ACCOUNT_ACTIVITIES',
  SET_RECEIPT = 'SET_RECEIPT',
  SET_ASSETS = 'SET_ASSETS'
}

export class CallGetAccounts implements Action {
  readonly type = ActionTypes.CALL_GET_ACCOUNTS;
}

export class SetAccounts implements Action {
  readonly type = ActionTypes.SET_ACCOUNTS;
  constructor(public payload: CustomerAccount[]) { }
}

export class SetAccountActivities implements Action {
  readonly type = ActionTypes.SET_ACCOUNT_ACTIVITIES;
  constructor(public payload: Object) { }
}

export class NavtoAccountActivities implements Action {
  readonly type = ActionTypes.NAVTO_ACCOUNT_ACTIVITIES;
  constructor(public payload: string) { }
}

export class CallReceipt implements Action {
  readonly type = ActionTypes.CALL_RECEIPT;
  constructor(public payload: { accountId: string, receiptId: string }) { }
}

export class SetReceipt implements Action {
  readonly type = ActionTypes.SET_RECEIPT;
  constructor(public payload: Object) { }
}

export class CallGetAssets implements Action {
  readonly type = ActionTypes.CALL_GET_ASSETS;
}

export class SetAssets implements Action {
  readonly type = ActionTypes.SET_ASSETS;
  constructor(public payload: GetAssetsRootResponse) { }
}

export type AccountActions = SetAccounts | CallGetAccounts | SetAccountActivities |
  NavtoAccountActivities | CallReceipt | SetReceipt | CallGetAssets | SetAssets;
