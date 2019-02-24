import * as AuthActions from './auth.actions';
import { AuthTokenObj } from '../../models/auth-token.model';
import { Action, createFeatureSelector, createSelector, StateObservable } from '@ngrx/store'
import { User } from '../../models/user.model';

// export interface State extends fromRoot.AppState {
//     accounts: State
// }

export interface State {
    tokenStr: string;
    authTokenObj: AuthTokenObj;
    user: User;
    otpObj: Object;
    authenticated: boolean;
    loginStep: number;
}

const initialState: State = {
    tokenStr: null,
    authTokenObj: null,
    user: null,
    otpObj: null,
    authenticated: false,
    loginStep: 1
}

export function reducer(state = initialState, action: AuthActions.AuthActions): State {
    switch (action.type) {
        case AuthActions.SET_LOGIN_STEP:
            return {
                ...state,
                loginStep: action.payload
            };
        case AuthActions.SET_TOKEN_OBJ:
            return {
                ...state,
                authTokenObj: action.payload,
                tokenStr: action.payload.token
            };
        case AuthActions.LOGIN:
            return {
                ...state,
                authenticated: true
            };
        case AuthActions.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case AuthActions.SET_OTP_OBJ:
            return {
                ...state,
                otpObj: action.payload
            };
        case AuthActions.LOGOUT:
            return {
                ...state,
                tokenStr: null,
                authTokenObj: null,
                user: null,
                otpObj: null,
                authenticated: false
            };
        default:
            return state;
    }    
}
