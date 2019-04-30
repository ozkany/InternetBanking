import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap, catchError } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as CommonActions from '../common/common.actions';
import { AuthService } from '@core/services/auth.service';
import { AuthTokenObj } from '@core/models/auth/auth-token.model';
import { User } from '@core/models/auth/user.model';

@Injectable()
export class AuthEffects {

  @Effect()
  createToken = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_CREATE_TOKEN),
    switchMap(() => {
      return this.authService.createToken().pipe(
        map((authTokenObj: AuthTokenObj) => new AuthActions.SetTokenObj(authTokenObj)),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AuthActions.ActionTypes.CALL_CREATE_TOKEN })))
      );
    })
  );

  @Effect()
  login = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_LOGIN),
    map((action: AuthActions.CallLogin) => action.payload),
    switchMap((loginData) => {
      return this.authService.login(loginData.username, loginData.password).pipe(
        mergeMap((user: User) => {
          return [
            new AuthActions.SetUser(user),
            new AuthActions.SetLoginStep(2)
          ];
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AuthActions.ActionTypes.CALL_LOGIN })))
      );
    })
  );

  @Effect()
  createOtp = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_CREATE_OTP),
    switchMap(() => {
      return this.authService.createOtp().pipe(
        map((otpResponse: Object) => {
          return new AuthActions.SetOtpObj(otpResponse);
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AuthActions.ActionTypes.CALL_CREATE_OTP })))
      );
    })
  );

  @Effect()
  validateOtp = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_VALIDATE_OTP),
    map((action: AuthActions.CallValidateOtp) => action.payload),
    switchMap((smscode: string) => {
      return this.authService.validateOtp(smscode).pipe(
        map(() => {
          return new AuthActions.LoginSuccess();
        }),
        tap(() => {
          this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/accounts/account-list']);
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AuthActions.ActionTypes.CALL_VALIDATE_OTP })))
      );
    })
  );

  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.LOGOUT),
    tap(() => this.router.navigate(['/login']))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }
}
