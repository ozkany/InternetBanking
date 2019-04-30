import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AccountActions from './account.actions';
import * as CommonActions from '../common/common.actions';
import { AccountService } from '@core/services/account.service';

@Injectable()
export class AccountEffects {

  @Effect()
  callGetAccounts = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.CALL_GET_ACCOUNTS),
    switchMap(() => {
      return this.accountService.getAccountList().pipe(
        map(res => new AccountActions.SetAccounts(res.accounts)),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AccountActions.ActionTypes.CALL_GET_ACCOUNTS })))
      );
    })
  );

  @Effect()
  navtoAccountActivities = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.NAVTO_ACCOUNT_ACTIVITIES),
    map((action: AccountActions.NavtoAccountActivities) => action.payload.accountId),
    switchMap((accountId) => {
      return this.accountService.getAccountActivities(accountId).pipe(
        map(res => new AccountActions.SetAccountActivities(res)),
        tap(() => {
          this.router.navigate(['/accounts/account-activities']);
        }),
        catchError(error => of(new CommonActions.EffectError({
          detail: error,
          location: AccountActions.ActionTypes.NAVTO_ACCOUNT_ACTIVITIES
        })))
      );
    })
  );

  @Effect()
  callReceipt = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.CALL_RECEIPT),
    map((action: AccountActions.CallReceipt) => action.payload),
    switchMap((data) => {
      return this.accountService.getReceipt(data.accountId, data.receiptId).pipe(
        map(res => new AccountActions.SetReceipt(res)),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AccountActions.ActionTypes.CALL_RECEIPT })))
      );
    })
  );

  @Effect()
  callGetAssets = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.CALL_GET_ASSETS),
    switchMap(() => {
      return this.accountService.getAssets().pipe(
        map(res => new AccountActions.SetAssets(res)),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: AccountActions.ActionTypes.CALL_GET_ASSETS })))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private router: Router) { }
}
