import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AccountActions from './account.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';

@Injectable()
export class AccountEffects {

    @Effect()
    callGetAccounts = this.actions$.pipe(
        ofType(AccountActions.CALL_GET_ACCOUNTS),
        switchMap(() => {
            return this.accountService.getAccountList();
        }),
        map((res) => {
            return (
                {
                    type: AccountActions.SET_ACCOUNTS,
                    payload: res.accounts
                }
            );
        })
    );

    @Effect()
    navtoAccountActivities = this.actions$.pipe(
        ofType(AccountActions.NAVTO_ACCOUNT_ACTIVITIES),
        map((action: AccountActions.NavtoAccountActivities) => {
            return action.payload;
        }),
        switchMap((accountId) => {
            return this.accountService.getAccountActivities(accountId);
        }),
        map((res) => {
            return (
                {
                    type: AccountActions.SET_ACCOUNT_ACTIVITIES,
                    payload: res
                }
            );
        }),
        tap(() => {
            this.router.navigate(['/accounts/account-activities'])
        })
    );

    @Effect()
    callReceipt = this.actions$.pipe(
        ofType(AccountActions.CALL_RECEIPT),
        map((action: AccountActions.CallReceipt) => {
            return action.payload;
        }),
        switchMap((data) => {
            return this.accountService.getReceipt(data.accountId, data.receiptId);
        }),
        map((res) => {
            return (
                {
                    type: AccountActions.SET_RECEIPT,
                    payload: res
                }
            );
        })
    );

    @Effect()
    callGetAssets = this.actions$.pipe(
        ofType(AccountActions.CALL_GET_ASSETS),
        switchMap(() => {
            return this.accountService.getAssets();
        }),
        // map((res) => {
        //     let data = res.assetTypes.map(a => [a.title, a.totalAmount]);
        //     data = [['Varlık Türü', 'Tutarı'], ...data];
        //     return data;
        // }),
        map((res) => {
            return (
                {
                    type: AccountActions.SET_ASSETS,
                    payload: res
                }
            );
        })
    );

    constructor(
        private actions$: Actions, 
        private accountService: AccountService, 
        private router: Router,
        private route: ActivatedRoute) { }
}