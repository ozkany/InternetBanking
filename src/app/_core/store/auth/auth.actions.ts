import { Action } from '@ngrx/store'
import { AuthTokenObj } from '../../models/auth-token.model';
import { User } from '../../models/user.model';

export const CALL_CREATE_TOKEN = "CALL_CREATE_TOKEN";
export const CALL_LOGIN = "CALL_LOGIN";
export const CALL_CREATE_OTP = "CALL_CREATE_OTP";
export const CALL_VALIDATE_OTP = "CALL_VALIDATE_OTP";
//
export const SET_TOKEN_OBJ = 'SET_TOKEN_OBJ';
export const LOGIN = 'LOGIN';
export const SET_USER = 'SET_USER';
export const SET_OTP_OBJ = 'SET_OTP_OBJ';
export const LOGOUT = 'LOGOUT';
export const SET_LOGIN_STEP = 'SET_LOGIN_STEP';

export class SetLoginStep implements Action {
    readonly type = SET_LOGIN_STEP;

    constructor(public payload: number) {}
}

export class CallCreateToken implements Action {
    readonly type = CALL_CREATE_TOKEN;
}

export class SetTokenObj implements Action {
    readonly type = SET_TOKEN_OBJ;
    
    constructor(public payload: AuthTokenObj) {}
}

export class CallLogin implements Action {
    readonly type = CALL_LOGIN;

    constructor(public payload: { username: string, password: string }) {}
}

export class Login implements Action {
    readonly type = LOGIN;
}

export class SetUser implements Action {
    readonly type = SET_USER;
    
    constructor(public payload: User) {}
}

export class CallCreateOtp implements Action {
    readonly type = CALL_CREATE_OTP;
}

export class SetOtpObj implements Action {
    readonly type = SET_OTP_OBJ;
    
    constructor(public payload: Object) {}
}

export class CallValidateOtp implements Action {
    readonly type = CALL_VALIDATE_OTP;

    constructor(public payload: string) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export type AuthActions = SetLoginStep | CallCreateToken | SetTokenObj | CallLogin | Login | SetUser | CallCreateOtp | SetOtpObj | CallValidateOtp| Logout;