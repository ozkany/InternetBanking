import * as AuthActions from './auth.actions';
import { initialState, State } from '../auth/auth.state';

export function reducer(state = initialState, action: AuthActions.AuthActions): State {
  switch (action.type) {
    case AuthActions.ActionTypes.SET_LOGIN_STEP:
      return {
        ...state,
        loginStep: action.payload
      };
    case AuthActions.ActionTypes.SET_TOKEN_OBJ:
      return {
        ...state,
        authTokenObj: action.payload,
        tokenStr: action.payload.token
      };
    case AuthActions.ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true
      };
    case AuthActions.ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case AuthActions.ActionTypes.SET_OTP_OBJ:
      return {
        ...state,
        otpObj: action.payload
      };
    case AuthActions.ActionTypes.LOGOUT:
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
