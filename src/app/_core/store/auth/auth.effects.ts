import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AuthTokenObj } from '../../models/auth-token.model';
import { User } from '../../models/user.model';

@Injectable()
export class AuthEffects {

    @Effect()
    createToken = this.actions$.pipe(
        ofType(AuthActions.CALL_CREATE_TOKEN),
        switchMap(() => {
            return this.authService.createToken();
        }),
        map((authTokenObj: AuthTokenObj) => {
            return (
                {
                    type: AuthActions.SET_TOKEN_OBJ,
                    payload: authTokenObj
                }
            );
        })
    );

    @Effect()
    login = this.actions$.pipe(
        ofType(AuthActions.CALL_LOGIN),
        map((action: AuthActions.CallLogin) => {
            return action.payload;
        }),
        switchMap((loginData) => {
            return this.authService.login(loginData.username, loginData.password);
        }),
        mergeMap((user: User) => {
            return [
                {
                    type: AuthActions.SET_USER,
                    payload: user
                },
                {
                    type: AuthActions.SET_LOGIN_STEP,
                    payload: 2
                }
            ]
        })
    );

    @Effect()
    createOtp = this.actions$.pipe(
        ofType(AuthActions.CALL_CREATE_OTP),
        switchMap(() => {
            return this.authService.createOtp();
        }),
        map((otpResponse: Object) => {
            return {
                type: AuthActions.SET_OTP_OBJ,
                payload: otpResponse
            }
        })
    );

    @Effect()
    validateOtp = this.actions$.pipe(
        ofType(AuthActions.CALL_VALIDATE_OTP),
        map((action: AuthActions.CallValidateOtp) => {
            return action.payload;
        }),
        switchMap((smscode: string) => {
            return this.authService.validateOtp(smscode);
        }),
        map(() => {
            return {
                type: AuthActions.LOGIN
            }
        }),
        tap(() => {
            this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/accounts/account-list'])
        })
    );

    @Effect({ dispatch: false })
    logout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
            this.router.navigate(['/login'])
        }
        )
    )

    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private router: Router,
        private route: ActivatedRoute) { }
}