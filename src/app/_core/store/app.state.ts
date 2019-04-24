import * as AuthState from './auth/auth.state';
import * as AuthReducers from './auth/auth.reducers';
import * as CommonState from './common/common.state';
import * as CommonReducers from './common/common.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: AuthState.State;
  common: CommonState.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducers.reducer,
  common: CommonReducers.reducer
};
