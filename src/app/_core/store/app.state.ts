import * as AuthReducers from './auth/auth.reducers';
import * as AuthState from './auth/auth.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: AuthState.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducers.reducer
};
