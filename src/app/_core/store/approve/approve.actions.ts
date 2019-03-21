import { Action } from '@ngrx/store';

export const NAVTO_APPROVAL = 'NAVTO_APPROVAL';
//
export const SET_TRAN_APPROVE_DATA = 'SET_TRAN_APPROVE_DATA';
export const SET_CONFIRM_SMS_DATA = 'SET_INTERM_RECORDS';
export const SET_FINISH_DATA = 'SET_FINISH_DATA';

export class NavtoApproval implements Action {
    readonly type = NAVTO_APPROVAL;

    constructor(public payload: {tranData: any, approveApiPath: string, forceDuplicate: boolean}) {}
}

export class SetTranApproveData implements Action {
    readonly type = SET_TRAN_APPROVE_DATA;

    constructor(public payload: any) {}
}

export class SetConfirmSmsData implements Action {
    readonly type = SET_CONFIRM_SMS_DATA;
    
    constructor(public payload: any) {}
}

export class SetFinishData implements Action {
    readonly type = SET_FINISH_DATA;
    
    constructor(public payload: any) {}
}


export type ApproveActions = SetTranApproveData | SetConfirmSmsData | SetFinishData;