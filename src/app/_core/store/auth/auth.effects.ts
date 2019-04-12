import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { AuthTokenObj } from '../../models/auth/auth-token.model';
import { User } from '../../models/auth/user.model';

@Injectable()
export class AuthEffects {

  @Effect()
  createToken = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_CREATE_TOKEN),
    switchMap(() => {
      return this.authService.createToken();
    }),
    map((authTokenObj: AuthTokenObj) => {
      return new AuthActions.SetTokenObj(authTokenObj);
    })
  );

  @Effect()
  login = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_LOGIN),
    map((action: AuthActions.CallLogin) => {
      return action.payload;
    }),
    switchMap((loginData) => {
      return this.authService.login(loginData.username, loginData.password);
    }),
    mergeMap((user: User) => {
      return [
        new AuthActions.SetUser(user),
        new AuthActions.SetLoginStep(2)
      ];
    })
  );

  @Effect()
  createOtp = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_CREATE_OTP),
    switchMap(() => {
      return this.authService.createOtp();
    }),
    map((otpResponse: Object) => {
      return new AuthActions.SetOtpObj(otpResponse);
    })
  );

  @Effect()
  validateOtp = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.CALL_VALIDATE_OTP),
    map((action: AuthActions.CallValidateOtp) => {
      return action.payload;
    }),
    switchMap((smscode: string) => {
      return this.authService.validateOtp(smscode);
    }),
    map(() => {
      return new AuthActions.LoginSuccess();
    }),
    tap(() => {
      this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/accounts/account-list']);
    })
  );

  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType(AuthActions.ActionTypes.LOGOUT),
    tap(() => {
      this.router.navigate(['/login']);
    }
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }
}
