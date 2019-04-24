import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, mergeMap, map, tap, withLatestFrom, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ApproveActions from './approve.actions';
import * as CommonActions from '../common/common.actions';
import { ApproveService } from '@core/services/approve.service';
import { ApproveSelectors, AppState } from '@core/store';

@Injectable()
export class ApproveEffects {

  @Effect()
  navtoApproval = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.NAVTO_APPROVAL),
    map((action: ApproveActions.NavtoApproval) => action.payload),
    map((data) => {
      return new ApproveActions.SetTranApproveData(data);
    }),
    tap(() => {
      this.router.navigate(['/approve']);
    })
  );

  @Effect()
  doApprove = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_APPROVE),
    withLatestFrom(this.store$.select(ApproveSelectors.TranData)),
    switchMap(([action, tranData]) => {
      return this.approveService.doApprove(tranData).pipe(
        map((res) => {
          if (res['type'] === 'ConfirmSms') {
            return new ApproveActions.DoApproveSuccess(res);
          } else {
            return new ApproveActions.DoApproveFail(res['type']);
          }
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: ApproveActions.ActionTypes.DO_APPROVE })))
      );
    })
  );

  @Effect()
  doApproveSuccess = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_APPROVE_SUCCESS),
    map((action: ApproveActions.DoApproveSuccess) => action.payload),
    mergeMap(data => {
      return [
        new ApproveActions.SetConfirmSmsData({ confirmSmsData: data }),
        new ApproveActions.NavToConfirmSms()
      ];
    })
  );

  @Effect()
  doApproveFail = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_APPROVE_FAIL),
    map((action: ApproveActions.DoApproveFail) => action.payload),
    map((payload) => {
      return new ApproveActions.SetConfirmSmsData({ confirmSmsData: payload });
    })
  );

  @Effect({ dispatch: false })
  navToConfirmSms = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.NAVTO_CONFIRM_SMS),
    tap(() => {
      this.router.navigate(['/confirm-sms']);
    })
  );

  @Effect()
  doConfirmSms = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_CONFIRM_SMS),
    map((action: ApproveActions.DoConfirmSms) => action.payload),
    withLatestFrom(this.store$.select(ApproveSelectors.TranData),
                   this.store$.select(ApproveSelectors.ConfirmSmsData)),
    switchMap(([data, tranData, confirmSmsData]) => {
      console.log('Effect doConfirmSms switchMap', data, tranData, confirmSmsData);
      return this.approveService.doConfirmSms(data.smsCode, confirmSmsData.token, tranData.approveApiPath, tranData.forceDuplicate).pipe(
        map((res) => {
          console.log('Effect doConfirmSms map', res);
          if (res['type'] === 'Completed') {
            return new ApproveActions.DoConfirmSmsSuccess(res);
          } else {
            return new ApproveActions.DoConfirmSmsFail(res);
          }
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: ApproveActions.ActionTypes.DO_CONFIRM_SMS })))
      );
    })
  );

  @Effect()
  doConfirmSmsSuccess = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_CONFIRM_SMS_SUCCESS),
    map((action: ApproveActions.DoConfirmSmsSuccess) => action.payload),
    tap((successData) => {
      this.router.navigate(['/finish']);
    })
  );

  @Effect({ dispatch: false })
  doConfirmSmsFail = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_CONFIRM_SMS_FAIL),
    map((action: ApproveActions.DoConfirmSmsFail) => action.payload),
    tap((failData) => {
      console.log('doConfirmSmsFail', failData);
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private approveService: ApproveService,
    private router: Router) { }
}
