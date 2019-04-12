import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './auth.state';

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectAuthTokenObj = createSelector(
  selectAuthState,
  state => state.authTokenObj
);

export const selectAuthTokenStr = createSelector(
  selectAuthState,
  state => state.tokenStr
);

export const selectAuthUser = createSelector(
  selectAuthState,
  state => state.user
);

export const selectAuthOtpObj = createSelector(
  selectAuthState,
  state => state.otpObj
);

export const selectAuthIsAuthenticated = createSelector(
  selectAuthState,
  state => state.authenticated
);

export const selectAuthLoginStep = createSelector(
  selectAuthState,
  state => state.loginStep
);
