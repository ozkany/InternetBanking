import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { AuthState, AppState, AuthSelectors } from '../store';
import { AuthTokenObj } from '../models/auth/auth-token.model';
import { User } from '../models/auth/user.model';
export { AuthActions } from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  public authState$: Observable<AuthState.State> = this.store.select(AuthSelectors.selectAuthState);
  public authTokenObj$: Observable<AuthTokenObj> = this.store.select(AuthSelectors.selectAuthTokenObj);
  public authTokenStr$: Observable<string> = this.store.select(AuthSelectors.selectAuthTokenStr);
  public authUser$: Observable<User> = this.store.select(AuthSelectors.selectAuthUser);
  public authOtpObj$: Observable<any> = this.store.select(AuthSelectors.selectAuthOtpObj);
  public authIsAuthenticated$: Observable<boolean> = this.store.select(AuthSelectors.selectAuthIsAuthenticated);
  public authLoginStep$: Observable<number> = this.store.select(AuthSelectors.selectAuthLoginStep);

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
