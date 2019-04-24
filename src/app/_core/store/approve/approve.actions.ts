import { Action } from '@ngrx/store';
import { ApproveTranData, ApproveCompletedResponse } from '@core/models';

export const enum ActionTypes {
  NAVTO_APPROVAL = 'NAVTO_APPROVAL',
  SET_TRAN_APPROVE_DATA = 'SET_TRAN_APPROVE_DATA',
  SET_CONFIRM_SMS_DATA = 'SET_CONFIRM_SMS_DATA',
  SET_FINISH_DATA = 'SET_FINISH_DATA',
  DO_APPROVE = 'DO_APPROVE',
  DO_APPROVE_SUCCESS = 'DO_APPROVE_SUCCESS',
  DO_APPROVE_FAIL = 'DO_APPROVE_FAIL',
  NAVTO_CONFIRM_SMS = 'NAVTO_CONFIRM_SMS',
  DO_CONFIRM_SMS = 'DO_CONFIRM_SMS',
  DO_CONFIRM_SMS_SUCCESS = 'DO_CONFIRM_SMS_SUCCESS',
  DO_CONFIRM_SMS_FAIL = 'DO_CONFIRM_SMS_FAIL',
}

export class NavtoApproval implements Action {
  readonly type = ActionTypes.NAVTO_APPROVAL;
  constructor(public payload: ApproveTranData) { }
}

export class SetTranApproveData implements Action {
  readonly type = ActionTypes.SET_TRAN_APPROVE_DATA;
  constructor(public payload: ApproveTranData) { }
}

export class DoApprove implements Action {
  readonly type = ActionTypes.DO_APPROVE;
}

export class DoApproveSuccess implements Action {
  readonly type = ActionTypes.DO_APPROVE_SUCCESS;
  constructor(public payload: any) { }
}

export class DoApproveFail implements Action {
  readonly type = ActionTypes.DO_APPROVE_FAIL;
  constructor(public payload: any) { }
}

export class NavToConfirmSms implements Action {
  readonly type = ActionTypes.NAVTO_CONFIRM_SMS;
}

export class SetConfirmSmsData implements Action {
  readonly type = ActionTypes.SET_CONFIRM_SMS_DATA;
  constructor(public payload: { confirmSmsData: any }) { }
}

export class DoConfirmSms implements Action {
  readonly type = ActionTypes.DO_CONFIRM_SMS;
  constructor(public payload: { smsCode: string }) { }
}

export class DoConfirmSmsSuccess implements Action {
  readonly type = ActionTypes.DO_CONFIRM_SMS_SUCCESS;
  constructor(public payload: ApproveCompletedResponse) { }
}

export class DoConfirmSmsFail implements Action {
  readonly type = ActionTypes.DO_CONFIRM_SMS_FAIL;
  constructor(public payload: any) { }
}


export type ApproveActions = NavtoApproval | SetTranApproveData | DoApprove | DoApproveSuccess |
  DoApproveFail | NavToConfirmSms | SetConfirmSmsData | DoConfirmSms | DoConfirmSmsSuccess | DoConfirmSmsFail;
