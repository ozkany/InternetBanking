import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AccountActions from './account.actions';
import { Router } from '@angular/router';
import { switchMap, mergeMap, map, tap } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';

@Injectable()
export class AccountEffects {

  @Effect()
  callGetAccounts = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.CALL_GET_ACCOUNTS),
    switchMap(() => {
      return this.accountService.getAccountList();
    }),
    map((res) => {
      return new AccountActions.SetAccounts(res.accounts);
    })
  );

  @Effect()
  navtoAccountActivities = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.NAVTO_ACCOUNT_ACTIVITIES),
    map((action: AccountActions.NavtoAccountActivities) => {
      return action.payload;
    }),
    switchMap((accountId) => {
      return this.accountService.getAccountActivities(accountId);
    }),
    map((res) => {
      return new AccountActions.SetAccountActivities(res);
    }),
    tap(() => {
      this.router.navigate(['/accounts/account-activities']);
    })
  );

  @Effect()
  callReceipt = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.CALL_RECEIPT),
    map((action: AccountActions.CallReceipt) => {
      return action.payload;
    }),
    switchMap((data) => {
      return this.accountService.getReceipt(data.accountId, data.receiptId);
    }),
    map((res) => {
      return new AccountActions.SetReceipt(res);
    })
  );

  @Effect()
  callGetAssets = this.actions$.pipe(
    ofType(AccountActions.ActionTypes.CALL_GET_ASSETS),
    switchMap(() => {
      return this.accountService.getAssets();
    }),
    map((res) => {
      return new AccountActions.SetAssets(res);
    })
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private router: Router) { }
}
