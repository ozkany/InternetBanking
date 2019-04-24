import { Action } from '@ngrx/store';
import { AuthTokenObj } from '../../models/auth/auth-token.model';
import { User } from '../../models/auth/user.model';

export const enum ActionTypes {
  CALL_CREATE_TOKEN = 'CALL_CREATE_TOKEN',
  CALL_LOGIN = 'CALL_LOGIN',
  CALL_CREATE_OTP = 'CALL_CREATE_OTP',
  CALL_VALIDATE_OTP = 'CALL_VALIDATE_OTP',
  SET_TOKEN_OBJ = 'SET_TOKEN_OBJ',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  SET_USER = 'SET_USER',
  SET_OTP_OBJ = 'SET_OTP_OBJ',
  LOGOUT = 'LOGOUT',
  SET_LOGIN_STEP = 'SET_LOGIN_STEP'
}

export class SetLoginStep implements Action {
  readonly type = ActionTypes.SET_LOGIN_STEP;
  constructor(public payload: number) { }
}

export class CallCreateToken implements Action {
  readonly type = ActionTypes.CALL_CREATE_TOKEN;
}

export class SetTokenObj implements Action {
  readonly type = ActionTypes.SET_TOKEN_OBJ;
  constructor(public payload: AuthTokenObj) { }
}

export class CallLogin implements Action {
  readonly type = ActionTypes.CALL_LOGIN;
  constructor(public payload: { username: string, password: string }) { }
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
}

export class SetUser implements Action {
  readonly type = ActionTypes.SET_USER;
  constructor(public payload: User) { }
}

export class CallCreateOtp implements Action {
  readonly type = ActionTypes.CALL_CREATE_OTP;
}

export class SetOtpObj implements Action {
  readonly type = ActionTypes.SET_OTP_OBJ;
  constructor(public payload: Object) { }
}

export class CallValidateOtp implements Action {
  readonly type = ActionTypes.CALL_VALIDATE_OTP;
  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export type AuthActions = SetLoginStep | CallCreateToken | SetTokenObj | CallLogin | LoginSuccess |
  SetUser | CallCreateOtp | SetOtpObj | CallValidateOtp | Logout;
