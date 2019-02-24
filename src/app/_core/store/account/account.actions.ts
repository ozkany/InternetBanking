import { Action } from '@ngrx/store';
import { CustomerAccount } from '../../models/accounts/account.model';
import { GetAssetsRootResponse } from '../../models/accounts/assets.model';

export const CALL_GET_ACCOUNTS = 'CALL_GET_ACCOUNTS';
export const NAVTO_ACCOUNT_ACTIVITIES = 'NAVTO_ACCOUNT_ACTIVITIES';
export const CALL_RECEIPT = 'CALL_RECEIPT';
export const CALL_GET_ASSETS = 'CALL_GET_ASSETS';
///
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_ACCOUNT_ACTIVITIES = 'SET_ACCOUNT_ACTIVITIES';
export const SET_RECEIPT = 'SET_RECEIPT';
export const SET_ASSETS = 'SET_ASSETS';


export class CallGetAccounts implements Action {
    readonly type = CALL_GET_ACCOUNTS;
}

export class SetAccounts implements Action {
    readonly type = SET_ACCOUNTS;
    
    constructor(public payload: CustomerAccount[]) {}
}

export class SetAccountActivities implements Action {
    readonly type = SET_ACCOUNT_ACTIVITIES;

    constructor(public payload: Object) {}
}

export class NavtoAccountActivities implements Action {
    readonly type = NAVTO_ACCOUNT_ACTIVITIES;

    constructor(public payload: string) {}
}

export class CallReceipt implements Action {
    readonly type = CALL_RECEIPT;

    constructor(public payload: { accountId: string, receiptId: string }) {}
}

export class SetReceipt implements Action {
    readonly type = SET_RECEIPT;

    constructor(public payload: Object) {}
}

export class CallGetAssets implements Action {
    readonly type = CALL_GET_ASSETS;
}

export class SetAssets implements Action {
    readonly type = SET_ASSETS;

    constructor(public payload: GetAssetsRootResponse) {}
}

export type AccountActions = SetAccounts | CallGetAccounts | SetAccountActivities | NavtoAccountActivities | CallReceipt | SetReceipt | CallGetAssets | SetAssets;